import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Home() {
  
  // const store = useSelector((store) => store);
  // console.log(store);

  const [product, setProduct] = useState([]);
  const [formData, setFormData] = useState({
    imageLink: "",
    category: "",
    price: "",
    rate: "",
  });

  const [editId, setEditId] = useState("");

  // CREATE operation
  function postData(e) {
    e.preventDefault();
    if (editId) {
      // if edit id
      axios
        .put(`https://fakestoreapi.com/products/${editId}`, {
          image: formData.imageLink,
          category: formData.category,
          price: formData.price,
          rate: formData.rate,
        })
        .then((res) => {
          console.log("data updated successfully");
          console.log(res.data);
        });
      setEditId("");
    } else {
      // new add
      axios
        .post("https://fakestoreapi.com/products", {
          image: formData.imageLink,
          category: formData.category,
          price: formData.price,
          rate: formData.rate,
        })
        .then((res) => {
          console.log("data added successfully");
          console.log(res.data);
        });
    }

    setFormData({
      imageLink: "",
      category: "",
      price: "",
      rate: "",
    });
  }

  // READ operation
  function fetchData() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  // DELETE operation
  function handleDelete(id) {
    console.log(id);
    axios.delete(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log("data deleted successfully");
      console.log(res.data);
    });
  }

  //UPDATE operation
  function handleEdit(item) {
    setFormData({
      imageLink: item.image,
      category: item.category,
      price: item.price,
      rate: item.rating.rate,
    });

    setEditId(item.id);
  }

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* add product form */}
      <section className="max-w-md mx-auto mt-10">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={postData}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="imageLink"
            >
              Image Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="imageLink"
              type="text"
              name="imageLink"
              value={formData.imageLink}
              onChange={(e) =>
                setFormData({ ...formData, imageLink: e.target.value })
              }
              placeholder="Enter image link"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              placeholder="Enter category"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              placeholder="Enter price"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rate"
            >
              Rate
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rate"
              type="number"
              step="0.1"
              name="rate"
              value={formData.rate}
              onChange={(e) =>
                setFormData({ ...formData, rate: e.target.value })
              }
              placeholder="Enter rating"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {editId ? "UPDATE" : " Add Product"}
            </button>
          </div>
        </form>
      </section>

      {/* product list */}
      <section className="section-products py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {product.map((v) => {
              return (
                <div className="w-full sm:w-1/3 lg:w-1/4 px-4 mb-8" key={v.id}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="card-image">
                      <img
                        className="w-full h-48"
                        src={v.image}
                        alt="product image"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {v.category}
                      </h3>
                      <p className="text-gray-600 mb-4">${v.price}</p>
                      <p className="text-gray-600">
                        Rating: {v.rating.rate} ⭐
                      </p>

                      <div className="action-btns mt-2">
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                          onClick={() => {
                            handleDelete(v.id);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          onClick={() => {
                            handleEdit(v);
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
