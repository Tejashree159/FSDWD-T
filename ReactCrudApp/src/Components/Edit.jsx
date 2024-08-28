import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    product_id: "",
    product_name: "",
    product_price: "",
    product_description: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://65d582f13f1ab8c63437231c.mockapi.io/api/products/${id}`);
        setEditData(response.data);
      } catch (err) {
        console.error("Error fetching product data:", err);
        // Optionally, add user feedback here
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://65d582f13f1ab8c63437231c.mockapi.io/api/products/${id}`,
        editData
      );
      navigate("/products");
    } catch (err) {
      console.error("Error updating product:", err);
      // Optionally, add user feedback here
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container">
      <form
        onSubmit={handleFormSubmit}
        className="row g-3 needs-validation"
        noValidate
      >
        <div className="col-md-6 position-relative">
          <label htmlFor="product_id" className="form-label">
            Product Id
          </label>
          <input
            type="text"
            name="product_id"
            className="form-control"
            id="product_id"
            value={editData.product_id}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter a product ID.</div>
        </div>
        <div className="col-md-6 position-relative">
          <label htmlFor="product_name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            name="product_name"
            className="form-control"
            id="product_name"
            value={editData.product_name}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter a product name.</div>
        </div>
        <div className="col-md-6 position-relative">
          <label htmlFor="product_price" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            name="product_price"
            className="form-control"
            id="product_price"
            value={editData.product_price}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter a product price.</div>
        </div>
        <div className="col-md-12 position-relative">
          <label htmlFor="product_description" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            name="product_description"
            className="form-control"
            id="product_description"
            value={editData.product_description}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter a product description.</div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
