const { Url } = require('./const');

const prepareProduct = (responseProduct) => {
  const { id, item } = responseProduct;
  const { seoDescription } = item;

  const url = `${Url.BASE_URL}/p/${seoDescription}/${id}`;
  return {
    url,
    ...responseProduct,
  };
};

const prepareApiProducts = async (responses) => {
  let preparedProducts = [];

  for (const response of responses) {
    const { data: { products } } = await response;
    const preparedPageProducts = products.map((product) => prepareProduct(product));
    preparedProducts = [ ...preparedProducts, ...preparedPageProducts ];
  }

  return preparedProducts;
};

module.exports = { prepareProduct, prepareApiProducts };
