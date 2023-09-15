import './App.css';

import { RouterProvider } from "react-router-dom";
import { MarketplaceRouter } from '../router/Router';



export const App = () => {
  return (
    <div className="App">
      <RouterProvider router={MarketplaceRouter} />
    </div>
  );
}