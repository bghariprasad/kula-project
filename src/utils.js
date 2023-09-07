export const sortProduct = (product, key, order) => {
  let sortedProduct = product;

  if (!order) return product;
  else if (order === "ASC") {
    sortedProduct = product.sort((a, b) => a[key] - b[key]);
  } else if (order === "DEC") {
    sortedProduct = product.sort((a, b) => b[key] - a[key]);
  }

  console.log("sortedProduct", sortedProduct);

  return sortedProduct;
};

export const getBrands = (products) => {
  return [...new Set(products.map((product) => product.brand))];
};

export const getProductsByBrand = (brand, products) => {
  if (!brand) return products;
  return products.filter((product) => product.brand === brand);
};

export const modifyTheProductList = (product, key, order, brand) => {
  let newProducts = product;
  if (brand) {
    newProducts = getProductsByBrand(brand, product);
  }
  newProducts = sortProduct(newProducts, key, order);

  return newProducts;
};
