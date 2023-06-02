import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import {
  getProductsData,
  addProduct,
  updateProduct,
  deleteProduct
} from "./actions";

function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  const handleAddNewProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value
    };
    dispatch(addProduct(newProduct));
    event.target.reset();
  };

  const handleUpdateNewData = (event, id) => {
    event.preventDefault();
    const updatedProduct = {
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value
    };
    dispatch(updateProduct(id, updatedProduct));
    event.target.reset();
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  console.log("Pprr", products);
  return (
    <div>
      <h1>Product Listing</h1>
      <form onSubmit={handleAddNewProduct}>
        <div style={{ padding: "20px 0" }}>
          <div>
            <input type="text" name="title" placeholder="Title" required />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Description"
              required
            />
          </div>
          <div>
            <input type="number" name="price" placeholder="Price" required />
          </div>
          <button
            type="submit"
            style={{ marginTop: "10px", background: "Lightblue" }}
          >
            Add Product
          </button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <form onSubmit={(e) => handleUpdateNewData(e, product.id)}>
                  <input
                    type="text"
                    name="title"
                    defaultValue={product.title}
                    required
                  />
                  <input
                    type="text"
                    name="description"
                    defaultValue={product.description}
                    required
                  />
                  <input
                    type="number"
                    name="price"
                    defaultValue={product.price}
                    required
                  />
                  <div>
                    <button
                      type="submit"
                      style={{ backgroundColor: "green", color: "white" }}
                    >
                      Update
                    </button>
                    <button
                      style={{
                        marginLeft: "10px",
                        marginTop: "5px",
                        backgroundColor: "red",
                        color: "white"
                      }}
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
