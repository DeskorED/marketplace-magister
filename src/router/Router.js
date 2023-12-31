import { createBrowserRouter } from "react-router-dom";

import { MarketplaceReact } from "../pages/MarketplaceReact";
import { CurrentProductPage } from "../pages/MarketplaceReact/components/CurrentProductPage";
import { CurrentCategoryPage } from "../pages/MarketplaceReact/components/CurrentCategoryPage";
import { CatalogPage } from "../pages/MarketplaceReact/components/CatalogPage";
import { CurrentCategory } from "../pages/MarketplaceReact/components/CurrentCategoryPage/components/CurrentCategory";
import { UserPage } from "../pages/MarketplaceReact/components/UserPage"

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
                path: "user-page",
                element: <UserPage />
            },
            {
                path: ":currentCategoryName",
                element: <CurrentCategoryPage />,
                children:
                    [
                        {
                            path: "all",
                            element: <CurrentCategory />
                        },
                        {
                            path: ":currentProductName",
                            element: <CurrentProductPage />
                        }
                    ]
            },

        ]
    }
])