import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { HomePage } from './Pages/HomePage';
import { AddItemPage } from './Pages/AddItemPage';
import store from "./Store/store"
import { ItemEditPage } from './Pages/ItemEditPage';
import { ViewItemPage } from './Pages/ViewItemPage';
import { SearchPage } from './Pages/SearchPage';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
          <Route path="/add-item" element={<AddItemPage />} />
          <Route path="/item-edit/:itemID" element={<ItemEditPage />} />
          <Route path="/item-view/:itemID" element={<ViewItemPage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
