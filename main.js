const Apify = require('apify');
const { Url } = require('./src/const');
const { handleSearchPage } = require('./src/routes');
const { prepareApiProducts } = require('./src/products-adapter');
require('dotenv').config();

const { utils: { log } } = Apify;

Apify.main(async () => {
    const { url: startUrl } = await Apify.getInput();

    const requestList = await Apify.openRequestList('start-url', [ startUrl ]);
    const requestQueue = await Apify.openRequestQueue();
    const proxyConfiguration = await Apify.createProxyConfiguration({ proxyUrls: [ process.env.PROXY_URL ] });
    const responses = [];

    const handlePageFunction = async (context) => {
        try {
            const { url } = context.request;
            log.info('Page is opened.', { url });

            return handleSearchPage(context, requestQueue);
        } catch(error) {
            log.error(error);
        }
    };

    const interceptProductsResponse = (crawlingContext) => {
        crawlingContext.page.on('response', (response) => {
            if (response.url().startsWith(Url.PRODUCTS_URL)) {
                const responsePromise = response
                    .json()
                    .catch(() => ({ data: { products: [] } }));
                responses.push(responsePromise);
            }
        });
    };

    const crawler = new Apify.PuppeteerCrawler({
        requestList,
        requestQueue,
        proxyConfiguration,
        launchContext: {
            useChrome: false,
            stealth: false,
            launchOptions: {
                headless: true,
            },
        },
        handlePageFunction,
        preNavigationHooks: [ interceptProductsResponse ],
    });

    try {
        log.info('Starting the crawl.');
        await crawler.run();
        log.info('Crawl is finished.');
    
        log.info('Prepare api products.');
        const preparedProducts = await prepareApiProducts(responses);
    
        await Apify.pushData(preparedProducts);
        log.info('Api products are saved.');
    } catch(error) {
        log.error(error);
    }
});
