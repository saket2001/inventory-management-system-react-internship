import { createSlice } from "@reduxjs/toolkit";

const inventoryDummyData = [
  {
    id: 11221212,
    item_name: "asus rog 2",
    item_category: "smartphones",
    item_quantity: 10,
    item_price: "35000",
    item_description: "Best smartphones",
    item_ram: "12GB",
    item_storage: "256GB",
    item_camera: "100 mega pixels",
  },
  {
    id: 21221212,
    item_name: "redmi MI 11",
    item_category: "smartphones",
    item_quantity: 50,
    item_price: "23000",
    item_description: "Best smartphones",
    item_ram: "6GB",
    item_storage: "128GB",
    item_camera: "48 mega pixels",
  },
  {
    id: 21221442,
    item_name: "samsung m31",
    item_category: "smartphones",
    item_quantity: 50,
    item_price: "21000",
    item_description: "Best smartphones",
    item_ram: "6GB",
    item_storage: "128GB",
    item_camera: "48 mega pixels",
  },
];

export const inventorySlice = createSlice({
  name: "inventory slice",
  initialState: {
    inventoryData: inventoryDummyData,
  },
  reducers: {
    addToInventory(state, action) {
      if (state.inventoryData)
        state.inventoryData = [action.payload, ...state.inventoryData];
    },
    updateInventory(state, action) {
       const newData = state.inventoryData.filter(
         (d) => +d.id !== +action.payload.id
       );
      state.inventoryData = [...newData, action.payload.newEntry];
    },
    deleteInventoryItem(state, action) {
      const newData= state.inventoryData.filter((d) => +d.id !== +action.payload);
      state.inventoryData = newData;
    },
  },
});

export const inventoryActions = inventorySlice.actions;
