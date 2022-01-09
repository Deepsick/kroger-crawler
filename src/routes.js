const Apify = require('apify');

const { getInterceptedResponse } = require('./utils');

const { utils: { log } } = Apify;

exports.handleStart = async (context, requestQueue) => {
    const { page } = context;
    // const response = await getInterceptedResponse('https://www.kroger.com/atlas/v1/product/v2/products', page);
    // log.info(response);
    log.info('page is loaded');

    await Apify.utils.enqueueLinks({
        page,
        requestQueue,
        selector: '.kds-Pagination > .kds-Pagination-link',
    });

    // return Apify.pushData(response);
};

