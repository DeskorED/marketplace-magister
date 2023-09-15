import { Outlet } from "react-router-dom";

import "./style.scss";

export const CurrentCategoryPage = () => {

    return (
        <div className="current-category-page">
            <Outlet />
        </div>
    )
}