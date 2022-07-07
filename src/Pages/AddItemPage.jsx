import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Layout } from "../Components/Layout";
import { inventoryActions } from "../Store/inventory";
import { useNavigate } from "react-router-dom";
import { generateID } from "../helperFunction";

export const AddItemPage = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      item_name: "",
      item_category: "",
      item_quantity: "",
      item_description: "",
      item_camera: "",
      item_price: "",
      item_ram: "",
      item_storage: "",
      // item_img:"",
    },
    onSubmit: (values) => {
      console.log(values)
      dispatch(inventoryActions.addToInventory({ ...values, id: generateID(6),date_added:new Date().toDateString() }))
      navigate('/')
      alert("Item Added To Inventory!");
    }
  });

  return (
    <Layout>
      <div className="min-w-screen min-h-screen bg-gray-200 flex flex-col gap-3 p-5">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-1 shadow-md rounded-md p-5 my-2 bg-gray-100"
        >
          <h1 className="text-gray-800 font-semibold text-2xl">
            Add Item to Inventory
          </h1>
          <p className="text-gray-600 text-base">
            Fill in all the accurate details of an item to add in the inventory
          </p>
          <hr />

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
              onChange={formik.handleChange}
            />
          </div>

          {/* image */}
          {/* <div className="w-1/2 flex flex-col gap-2 justify-center p-2">
            <label
              htmlFor="item_quantity"
              className="text-lg font-medium text-gray-600"
            >
              Image
            </label>
            <input
              type="file"
              className="px-2 py-1 outline-none rounded-md bg-transparent focus:border-blue-600"
              name="item_quantity"
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
              className="px-2 py-1 outline-none border-2 border-gray-400 rounded-md bg-transparent focus:border-blue-600"
            ></textarea>
          </div>

          {/* submit btn */}
          <div className="p-2">
            <button
              type="submit"
              className="px-3 py-2 bg-blue-700 text-gray-200 font-medium text-lg rounded-md hover:shadow-lg"
            >
              Add to Inventory
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
