const findByText = async (text, tag, page) => {
    const nodes = await page.$x(`//${tag}[contains(text(), '${text}')]`);
    return nodes.length !== 0 ? nodes[0] : null;
  };

module.exports = { findByText };