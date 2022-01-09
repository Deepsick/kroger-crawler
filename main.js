const Apify = require('apify');
const { handleStart } = require('./src/routes');
const { deleteCookies } = require('./src/utils');

const { utils: { log } } = Apify;

Apify.main(async () => {
    const { startUrls } = await Apify.getInput();

    const requestList = await Apify.openRequestList('start-urls', startUrls);
    const requestQueue = await Apify.openRequestQueue();
    const proxyConfiguration = await Apify.createProxyConfiguration();

    const crawler = new Apify.PuppeteerCrawler({
        requestList,
        requestQueue,
        proxyConfiguration,
        handlePageTimeoutSecs: 180000,
        navigationTimeoutSecs: 180000,
        launchContext: {
            useChrome: false,
            stealth: true,
            launchOptions: {
                headless: false,
                timeout: 180000,
            },
        },
        handlePageFunction: async (context) => {
            puppeteer.addInterceptRequestHandler(context.page, async (request) => {
                const response = await request.response();

                if (request.redirectChain().length === 0) {
                    const responseBody = await response.buffer();
                    log.info(responseBody.toString());
                }

                request.continue();
            })

            const { url, userData: { label } } = context.request;
            log.info('Page opened.', { label, url });
            await deleteCookies(context.page, url);
            await context.page.viewport({
                width: 1024 + Math.floor(Math.random() * 100),
                height: 768 + Math.floor(Math.random() * 100),
            });
            log.info(context.proxyInfo.url);
            return handleStart(context, requestQueue);
        },
    });

    log.info('Starting the crawl.');
    await crawler.run();
    log.info('Crawl finished.');
});
