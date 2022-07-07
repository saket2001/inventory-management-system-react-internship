// kind of dashboard
import React, { useState } from "react";
import { Layout } from "../Components/Layout";
import { ListView } from "../Components/ListView";
import { GalleryView } from "../Components/GalleryView";
import { useSelector, useDispatch } from "react-redux";
import { inventoryActions } from "../Store/inventory";
import { dynamicSort } from "../helperFunction"
import { FilterButton } from "../Components/FilterButton";

export const HomePage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(
    useSelector((state) => state?.inventory.inventoryData)
  );
  const [sortState, setSortState] = useState("asc");
  const [dataView, setDataView] = useState("list");

  // sorting function
  const sortData = (sortDir) => {
    let userDataCopy = userData.slice();
    if (sortDir === "asc") {
      setUserData(userDataCopy.sort(dynamicSort("item_name")));
    }
    else {
      userDataCopy.sort(dynamicSort("item_name"));
      userDataCopy.reverse();
      setUserData(userDataCopy)
    }
  };

  // filter actions handler
  const filterActions = (action) => {
    if (action === "") return;
    let userDataCopy = userData.slice();
    userDataCopy.sort(dynamicSort(action));
    setUserData(userDataCopy);
  }

  // removes an item from an inventory
  const deleteHandler = (id) => {
    const newList=userData.filter((d) => d.id !== id)
    dispatch(inventoryActions.deleteInventoryItem(id));
    setUserData(newList);
    alert("Item Deleted!");
  };

  return (
    <Layout>
      <div className="min-w-screen min-h-screen bg-gray-200 flex flex-col gap-3 p-5">
        {/* upper search bar */}
        <div className="flex justify-between items-center my-2">
          {/* <SearchBar /> */}
          <div className="flex flex-col">
            <h1 className="flex items-center gap-2 text-gray-700 text-2xl my-1 font-semibold">Welcome, 
            <span className="text-blue-700">
              John Doe
            </span>
            </h1>
            <p className="text-gray-500 font-medium">Here's how your inventory is looking today</p>
          </div>
          <div className="flex">
            <div className="rounded-full p-2 hover:bg-white hover:shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <div className="rounded-full p-2 hover:bg-white hover:shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* table by default list view */}
        {/* options */}
        <div className="flex flex-col gap-4 w-100 py-3 px-2">
          <div className="flex justify-end gap-1">
            {/* sort */}
            <button
              className="flex items-center px-3 py-1 text-lg text-gray-700 hover:bg-gray-100 ease-in transition-all rounded-md hover:shadow"
              onClick={() => {
                setSortState((prev) => (prev === "asc" ? "desc" : "asc"));
                sortData(sortState);
              }}
            >
              Sort
              {sortState === "asc" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7l4-4m0 0l4 4m-4-4v18"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              )}
            </button>
            
            {/* list btn */}
            <button
              className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-100 rounded-md hover:shadow-md flex items-center gap-2"
              onClick={() => {
                setDataView((prev) => (prev === "list" ? "gallery" : "list"));
              }}
            >
              {dataView === "list" ? "Gallery View" : "List View"}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* filter btn */}
            <FilterButton filterActions={filterActions} />
          </div>

          {/* list or gallery */}
          {dataView === "list" ? (
            <ListView
              data={userData}
              rowsLength={userData.length}
              deleteHandler={deleteHandler}
            />
          ) : (
            <GalleryView   data={userData}
              rowsLength={userData.length}
              deleteHandler={deleteHandler}/>
          )}
        </div>
      </div>
    </Layout>
  );
};
