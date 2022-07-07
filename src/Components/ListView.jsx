import React from "react";
import { Link } from "react-router-dom";

export const ListView = ({ data, rowsLength, deleteHandler }) => {
  return (
    <>
      <table className="w-100 table text-center bg-gray-100 p-2 rounded-md shadow-md">
        <thead className="text-gray-800 text-lg p-3 rounded-sm">
          <tr>
            <th className="p-4">Sr no</th>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="rounded-lg text-gray-600 text-base">
          {data.length > 0 &&
            data.map((d, i) => (
              <tr key={d?.id} className="p-4 border-b-2 border-slate-200">
                <td className="p-3">{i + 1}</td>
                <td>{d?.id}</td>
                <td className="capitalize">{d?.item_name}</td>
                <td className="capitalize">{d?.item_category}</td>
                <td>{d?.item_price} ₹</td>
                <td className="font-semibold">{d?.item_quantity ? d.item_quantity : 0}</td>
                <td className="flex items-center justify-center gap-2">
                  <button className="px-2 py-1 text-base bg-blue-700 text-gray-100 rounded-md border-blue-700 border">
                    <Link to={`/item-view/${d.id}`}>View</Link>
                  </button>
                  <button className="px-2 py-1 text-base border-blue-700 border rounded-md">
                    <Link to={`/item-edit/${d.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteHandler(d.id)}
                    className="px-2 py-1 text-base border-red-800 text-red-800 border rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <p className="text-sm text-medium text-gray-500 text-end">
        Showing {rowsLength} rows
      </p>
    </>
  );
};
