const Apify = require('apify');


const { utils: { log } } = Apify;

const getInterceptedResponse = (url, page) => {
  return new Promise((resolve) => {
    page.on('response', async (response) => {
        if (response.url().startsWith(url)) {
            const body = await response.json();
            resolve(body.data.products);
        }
    });
  });
};

const deleteCookies = async (page, url) => {
    const cookies = await page.cookies(url);
    return page.deleteCookie(...cookies);
};

module.exports = { getInterceptedResponse, deleteCookies };
