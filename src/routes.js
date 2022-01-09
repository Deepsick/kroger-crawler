const Apify = require('apify');

const { getInterceptedResponse } = require('./utils');

const { utils: { log } } = Apify;

exports.handleStart = async (context, requestQueue) => {
    const { page } = context;
    page.waitForSelector('.kds-Pagination');
    log.info('page is loaded');

    await Apify.utils.enqueueLinks({
        page,
        requestQueue,
        selector: '.kds-Pagination > .kds-Pagination-link',
    });
};

