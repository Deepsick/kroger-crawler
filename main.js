const Apify = require('apify');
const { handleStart } = require('./src/routes');
const { deleteCookies, getInterceptedResponse } = require('./src/utils');

const { utils: { log, puppeteer } } = Apify;

Apify.main(async () => {
    const { startUrls } = await Apify.getInput();

    const requestList = await Apify.openRequestList('start-urls', startUrls);
    const requestQueue = await Apify.openRequestQueue();
    const proxyConfiguration = await Apify.createProxyConfiguration();

    const crawler = new Apify.PuppeteerCrawler({
        requestList,
        requestQueue,
        proxyConfiguration,
        launchContext: {
            useChrome: false,
            stealth: true,
            launchOptions: {
                headless: false,
            },
        },
        handlePageFunction: async (context) => {
            const { url, userData: { label } } = context.request;
            log.info('Page opened.', { label, url });
            await deleteCookies(context.page, url);
            await context.page.viewport({
                width: 1024 + Math.floor(Math.random() * 100),
                height: 768 + Math.floor(Math.random() * 100),
            });

            return handleStart(context, requestQueue);
        },
        preNavigationHooks: [
            async (crawlingContext) => {
                crawlingContext.page.on('response', async (response) => {
                    if (response.url().startsWith('https://www.kroger.com/atlas/v1/product/v2/products')) {
                        const body = await response.json();
                        await Apify.pushData(body.data.products);
                    }
                });
            },
        ]
    });

    log.info('Starting the crawl.');
    await crawler.run();
    log.info('Crawl finished.');
});
