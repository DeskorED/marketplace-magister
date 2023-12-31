import {useContext} from "react";
import { useParams } from "react-router-dom";

import {MarketplaceContext} from "../../../../MarketplaceReact";

import { Category } from "../../../Category";

import "./style.scss"

export const CurrentCategory = () => {
    let categories = useContext(MarketplaceContext)["response"]["categories"];
    let { currentCategoryName} = useParams();

    const currentCategory = categories?.find(
        category => category?.name === currentCategoryName
    )

    return (
        <div className="current-category">
            <Category currentCategory={currentCategory} />
        </div>
    )
}