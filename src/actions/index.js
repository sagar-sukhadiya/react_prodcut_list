export const getProductsData = () => {
  return (dispatch) => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_PRODUCTS", payload: data.products });
      });
  };
};

export const addProduct = (product) => {
  return { type: "ADD_PRODUCT", payload: product };
};

export const updateProduct = (id, product) => {
  return { type: "UPDATE_PRODUCT", payload: { id, product } };
};

export const deleteProduct = (id) => {
  return { type: "DELETE_PRODUCT", payload: id };
};
