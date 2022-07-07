import React from "react";
import { Link } from "react-router-dom";

export const GalleryView = ({ data, rowsLength, deleteHandler }) => {
  return (
    <div className="w-100 h-100 grid grid-cols-2 gap-2 p-2">
      {data.length > 0 &&
        data.map((d) => (
          <Link to={`/item-view/${d.id}`}>
            <div className="flex flex-col justify-center p-2 rounded-md border-2 border-gray-400">
              {/* image */}
              {/* <img
                src={d?.item_img}
                alt="item_image"
                className="rounded-md aspect-video"
              /> */}
              {/* item details */}
              <div className="flex flex-col p-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-xl text-gray-800">
                    {d.item_name}
                  </h3>
                  <p className="font-semibold text-xl text-gray-600">{d.item_price} Rs</p>
                </div>
                <p className="text-lg text-gray-600">{d.item_category}</p>
                <p className="text-lg text-gray-600">{d.item_quantity} (in stock)</p>
              </div>
              {/* buttons */}
              <div className="flex items-center gap-2 p-2">
                <button className="px-3 py-1 text-lg border-blue-700 border rounded-md">
                  <Link to={`/item-edit/${d.id}`}>Edit</Link>
                </button>
                <button
                  onClick={() => deleteHandler(d.id)}
                  className="px-3 py-1 text-lg border-red-800 text-red-800 border rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </Link>
        ))}
      {data?.length > 0 && (<p className="w-full text-sm text-medium text-gray-500 text-end">
        Showing {rowsLength} rows
      </p>)}
    </div>
  );
};
