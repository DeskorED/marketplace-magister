import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MarketplaceReact } from '../pages/MarketplaceReact';

const MarketplaceRouter = createBrowserRouter([
  {
    path: "",
    element: <MarketplaceReact />
  }
])

export const App = () => {
  return (
    <div className="App">
      <RouterProvider router={MarketplaceRouter} />
    </div>
  );
}