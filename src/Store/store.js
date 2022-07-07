import { configureStore } from "@reduxjs/toolkit";
import { inventorySlice } from "./inventory";

const store = configureStore({
    reducer: {
        "inventory": inventorySlice.reducer,
    }
})

export default store;