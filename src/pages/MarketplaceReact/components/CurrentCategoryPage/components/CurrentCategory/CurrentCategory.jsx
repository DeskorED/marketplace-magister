import { useParams } from "react-router-dom";

import { categories } from "../../../../../../constants/categories";
import { Category } from "../../../Category";

import "./style.scss"

export const CurrentCategory = () => {
    let { currentCategoryID } = useParams();

    const currentCategory = categories?.find(
        category => category?.id === currentCategoryID
    )

    return (
        <div className="current-category">
            <Category currentCategory={currentCategory} />
        </div>
    )
}