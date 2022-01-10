const Apify = require('apify');
const { prepareProduct } = require('./products-adapter');
const { findByText } = require('./utils');


const { utils: { log } } = Apify;

const waitForProductsList = async (page) => {
    let refreshButton = await findByText('Refresh', 'button', page);
    let skipPopupButton = await findByText('Skip for now', 'button', page);
    let errorElement = await page.$('.ResultsPageError');

    while (refreshButton || errorElement || skipPopupButton) {
        await page.reload({ waitUntil: [ 'networkidle0', 'domcontentloaded' ] });
        refreshButton = await findByText('Refresh', 'button', page);
        errorElement = await page.$('.ResultsPageError');
        skipPopupButton = await findByText('Skip for now', 'button', page);
    }
};

const handleSearchPage = async (context, requestQueue) => {
    const { page, request } = context;
    const { url } = request;

    await waitForProductsList(page);
    
    await page.waitForSelector('#root + script');
    const initialState = await page.evaluate(() => __INITIAL_STATE__);
    const products = Object
        .values(initialState.calypso.domains.products)
        .map(({ data }) => prepareProduct(data));

    await Apify.utils.enqueueLinks({
        page,
        requestQueue,
        selector: '.kds-Pagination > .kds-Pagination-link',
    });

    await Apify.pushData(products);
    log.info('State products are saved.', { url });
};

module.exports = { handleSearchPage };