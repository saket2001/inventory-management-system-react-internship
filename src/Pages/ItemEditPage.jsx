import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout } from '../Components/Layout'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { inventoryActions } from "../Store/inventory";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export const ItemEditPage = () => {
  // Get the itemId param from the URL.
  let { itemID } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [data, setData] = useState(useSelector(state => state?.inventory?.inventoryData));
  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: data[0]?.id,
      item_name: data[0]?.item_name,
      item_category: data[0]?.item_category,
      item_quantity: data[0]?.item_quantity,
      item_description: data[0]?.item_description,
      item_camera: data[0]?.item_camera,
      item_price: data[0]?.item_price,
      item_ram: data[0]?.item_ram,
      item_storage: data[0]?.item_storage,
      // item_img: data[0]?.item_name,
    },
    onSubmit: (values) => {
      console.log(values)
      dispatch(inventoryActions.updateInventory({
        id: data[0]?.id,
        newEntry: values,
      }))
      navigate('/')
      alert("Item Updated!");
    }
  });

  // selecting data
  useEffect(() => {
    setLoading(true);
    setData(prevData => prevData.filter(d => +d.id === +itemID))
    setLoading(false);
  }, [itemID])

  if (isLoading) return "Loading..."

  return (
    <Layout>
      <div className="min-w-screen min-h-screen bg-gray-200 flex flex-col gap-3 p-5">
        <div className="flex flex-col p-4 bg-gray-100 rounded-md shadow-md my-2">
          <h2 className="font-bold text-2xl text-gray-700 my-1">
            Edit Item Details
          </h2>
          <hr />
          <br />
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-1"
          >
            {/* form inputs */}
            {/* name */}
            <div className="w-1/2 flex flex-col gap-2 justify-center p-2">
              <label
                htmlFor="item_name"
                className="text-lg font-medium text-gray-600"
              >
                Item Name
              </label>
              <input
                type="text"
                className="px-2 py-1 outline-none border-2 border-gray-400 rounded-md bg-transparent focus:border-blue-600"
                name="item_name"
                value={formik.values.item_name}
                onChange={formik.handleChange}
              />
            </div>

            {/* category */}
            <div className="w-1/2 flex flex-col gap-2 justify-center p-2">
              <label
                htmlFor="item_category"
                className="text-lg font-medium text-gray-600"
              >
                Category
              </label>
              <input
                type="text"
                className="px-2 py-1 outline-none border-2 border-gray-400 rounded-md bg-transparent focus:border-blue-600"
                name="item_category"
                value={formik.values.item_category}
                onChange={formik.handleChange}
              />
            </div>

            {/* quantity */}
            <div className="w-1/2 flex flex-col gap-2 justify-center p-2">
              <label
                htmlFor="item_quantity"
                className="text-lg font-medium text-gray-600"
              >
                Quantity
              </label>
              <input
                type="text"
                className="px-2 py-1 outline-none border-2 border-gray-400 rounded-md bg-transparent focus:border-blue-600"
                name="item_quantity"
                value={formik.values.item_quantity}
                onChange={formik.handleChange}
              />
            </div>

            {/* image */}
            {/* <div className="w-1/2 flex flex-col gap-2 justify-center p-2">
              <label
                htmlFor="item_img"
                className="text-lg font-medium text-gray-600"
              >
                Image
              </label>
              <input
                type="file"
                className="px-2 py-1 outline-none rounded-md bg-transparent focus:border-blue-600"
                name="item_img"
                value={formik.values.item_img}
                onChange={formik.handleChange}
              />
            </div> */}

            <div className="w-1/2 grid grid-cols-2 gap-2">
              {/* ram */}
              <div className="w-auto flex flex-col gap-2 justify-center p-2">
                <label
                  htmlFor="item_price"
                  className="text-lg font-medium text-gray-600"
                >
                  RAM
                </label>
                <select
                  name="item_ram"
                  id="item_ram"
                  className="px-2 py-1 outline-none border-2 border-gray-400 rounded-md bg-transparent focus:border-blue-600"
                  value={formik.values.item_ram}
                  onChange={formik.handleChange}
                >
                  <option value="">Select any one</option>
                  <option value="4GB">4 GB</option>
                  <option value="6GB">6 GB</option>
                  <option value="8GB">8 GB</option>
                  <option value="12GB">12 GB</option>
                </select>
              </div>
              {/* storage */}
              <div className="w-auto flex flex-col gap-2 justify-center p-2">
                <label
                  htmlFor="item_price"
                  className="text-lg font-medium text-gray-600"
                >
                  Internal Storage
                </label>
                <select
                  name="item_storage"
                  id="item_storage"
                  className="px-2 py-1 outline-none border-2 border-gray-400 rounded-md bg-transparent focus:border-blue-600"
                  value={formik.values.item_storage}
                  onChange={formik.handleChange}
                >
                  <option value="">Select any one</option>
                  <option value="8GB">8 GB</option>
                  <option value="16GB">16 GB</option>
                  <option value="32GB">32 GB</option>
                  <option value="64GB">64 GB</option>
                  <option value="128GB">128 GB</option>
                  <option value="256GB">256 GB</option>
                  <option value="500GB">500 GB</option>
                  <option value="1TB">1 TB</option>
                </select>
              </div>
              {/* camera */}
              <div className="w-auto flex flex-col gap-2 justify-center p-2">
                <label
                  htmlFor="item_camera"
                  className="text-lg font-medium text-gray-600"
                >
                  Camera
                </label>
                <select
                  name="item_camera"
                  id="item_camera"
                  className="px-2 py-1 outline-none border-2 border-gray-400 rounded-md bg-transparent focus:border-blue-600"
                  onChange={formik.handleChange}
                  value={formik.values.item_camera}
                >
                  <option value="">Select any one</option>
                  <option value="8 mega pixels">8 mega pixels</option>
                  <option value="12 mega pixels">12 mega pixels</option>
                  <option value="16 mega pixels">16 mega pixels</option>
                  <option value="32 mega pixels">32 mega pixels</option>
                  <option value="48 mega pixels">48 mega pixels</option>
                  <option value="64 mega pixels">64 mega pixels</option>
                  <option value="100 mega pixels">100 mega pixels</option>
                </select>
              </div>
              {/* price */}
              <div className="w-auto flex flex-col gap-2 justify-center p-2">
                <label
                  htmlFor="item_price"
                  className="text-lg font-medium text-gray-600"
                >
                  Price (in rupees)
                </label>
                <input
                  type="number"
                  onChange={formik.handleChange}
                  className="px-2 py-1 outline-none border-2 border-gray-400 rounded-md bg-transparent focus:border-blue-600"
                  value={formik.values.item_price}
                  name="item_price"
                />
              </div>
            </div>

            {/* description */}
            <div className="w-1/2 flex flex-col gap-2 justify-center p-2">
              <label
                htmlFor="item_description"
                className="text-lg font-medium text-gray-600"
              >
                Item Description
              </label>
              <textarea
                onChange={formik.handleChange}
                name="item_description"
                id="item_description"
                cols="30"
                rows="7"
                value={formik.values.item_description}
                className="px-2 py-1 outline-none border-2 border-gray-400 rounded-md bg-transparent focus:border-blue-600"
              ></textarea>
            </div>

            {/* submit btn */}
            <div className="p-2">
              <button
                type="submit"
                className="px-3 py-2 bg-blue-700 text-gray-200 font-medium text-lg rounded-md hover:shadow-lg"
              >
                Confirm Changes
              </button>
            </div>
          </form>

        </div>
      </div>
    </Layout>
  )
}
