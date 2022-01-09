const Apify = require('apify');


const { utils: { log } } = Apify;

const getInterceptedResponse = (url, page) => {
  return new Promise((resolve) => {
    page.on('response', async (response) => {
        log.info(response);
        log.info(response.url());
        if (response.url().startsWith(url)) {
            const body = await response.json();
            resolve(body);
        }
    });
    page.on('request', (request) => {
        log.info(JSON.stringify(request));
        log.info(request.url());
    })
  });
};

const deleteCookies = async (page, url) => {
    const cookies = await page.cookies(url);
    return page.deleteCookie(...cookies);
};

module.exports = { getInterceptedResponse, deleteCookies };
