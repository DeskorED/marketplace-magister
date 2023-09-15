import { createBrowserRouter } from "react-router-dom";

import { MarketplaceReact } from "../pages/MarketplaceReact";
import { CurrentProductPage } from "../pages/MarketplaceReact/components/CurrentProductPage";
import { CurrentCategoryPage } from "../pages/MarketplaceReact/components/CurrentCategoryPage";
import { CatalogPage } from "../pages/MarketplaceReact/components/CatalogPage";
import { CurrentCategory } from "../pages/MarketplaceReact/components/CurrentCategoryPage/components/CurrentCategory";

export const MarketplaceRouter = createBrowserRouter([
    {
        path: "/marketplace-magister",
        element: <MarketplaceReact />,
        children: [
            {
                path: "",
                element: <CatalogPage />
            },
            {
                path: ":currentCategoryID",
                element: <CurrentCategoryPage />,
                children:
                    [
                        {
                            path: "all",
                            element: <CurrentCategory />
                        },
                        {
                            path: ":currentProductID",
                            element: <CurrentProductPage />
                        }
                    ]
            },

        ]
    }
])