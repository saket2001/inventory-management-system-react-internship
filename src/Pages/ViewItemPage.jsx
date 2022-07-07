import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Layout } from "../Components/Layout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { inventoryActions } from "../Store/inventory"


export const ViewItemPage = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  // Get the itemId param from the URL.
  let { itemID } = useParams();

  const [data, setData] = useState(
    useSelector((state) => state?.inventory?.inventoryData)
  );
  const [isLoading, setLoading] = useState(false);

  // selecting data
  useEffect(() => {
    setLoading(true);
    setData((prevData) => prevData.filter((d) => +d.id === +itemID));
    setLoading(false);
  }, [itemID]);

  const deleteHandler = (id) => {
    dispatch(inventoryActions.deleteInventoryItem(+id));
    setData([]);
    navigate('/')
    alert("Item Deleted!");
  };

  if (isLoading) return "Loading...";

  return (
    <Layout>
      <div className="min-w-screen min-h-screen bg-gray-200 flex flex-col gap-3 p-5">
        <div className="flex flex-col p-4 bg-gray-100 rounded-md shadow-md my-2">
          <h2 className="font-bold text-2xl text-gray-700 my-1">
            Item Details
          </h2>
          <hr />
          <br />
          <div className="flex flex-col gap-1 p-1">
            <p className="text-gray-600 text-lg font-medium">Item ID</p>
            <p className="text-gray-600 text-lg capitalize">
              {data[0]?.id}
            </p>
          </div>

          <div className="flex flex-col gap-1 p-1">
            <p className="text-gray-600 text-lg font-medium">Name</p>
            <p className="text-gray-600 text-lg capitalize">
              {data[0]?.item_name}
            </p>
          </div>

          <div className="flex flex-col gap-1 p-1">
            <p className="text-gray-600 text-lg font-medium">Category</p>
            <p className="text-gray-600 text-lg capitalize">
              {data[0]?.item_category}
            </p>
          </div>

          <div className="flex flex-col gap-1 p-1">
            <p className="text-gray-600 text-lg font-medium">Quantity</p>
            <p className="text-gray-600 text-lg capitalize">
              {data[0]?.item_quantity} (in stock)
            </p>
          </div>
          <div className="flex flex-col gap-1 p-1">
            <p className="text-gray-600 text-lg font-medium">Price</p>
            <p className="text-gray-600 text-lg capitalize">
              {data[0]?.item_price} ₹
            </p>
          </div>

          <div className="flex flex-col gap-1 p-1">
            <p className="text-gray-600 text-lg font-medium">Description</p>
            <p className="text-gray-600 text-lg capitalize">
              {data[0]?.item_description}
            </p>
          </div>

          <div className="flex flex-col gap-1 p-1">
            <p className="text-gray-600 text-lg font-medium">Mobile RAM</p>
            <p className="text-gray-600 text-lg capitalize">
              {data[0]?.item_ram}
            </p>
          </div>

          <div className="flex flex-col gap-1 p-1">
            <p className="text-gray-600 text-lg font-medium">Internal Storage</p>
            <p className="text-gray-600 text-lg capitalize">
              {data[0]?.item_storage}
            </p>
          </div>

          <div className="flex flex-col gap-1 p-1">
            <p className="text-gray-600 text-lg font-medium">Mobile Camera</p>
            <p className="text-gray-600 text-lg capitalize">
              {data[0]?.item_camera}
            </p>
          </div>

          <div className="flex flex-col gap-1 p-1">
            <p className="text-gray-600 text-lg font-medium">Date Created</p>
            <p className="text-gray-600 text-lg capitalize">
              {data[0]?.date_added}
            </p>
          </div>

          {/* buttons */}
          <hr />
          <div className="flex items-center gap-2 p-1 my-2">
            <button className="px-4 py-1 text-lg border-blue-700 border rounded-md">
              <Link to={`/item-edit/${data[0]?.id}`}>Edit</Link>
            </button>
            <button
              onClick={() => deleteHandler(data[0]?.id)}
              className="px-4 py-1 text-lg border-red-800 text-red-800 border rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
