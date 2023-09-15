import { categories } from "../../../../constants/categories"

import { Category } from "../Category"

import "./style.scss"

export const CatalogPage = () => {
    return (
        <div className="categories-block">
            {
                categories.map(
                    category => <Category currentCategory={category} />
                )
            }
        </div>
    )
}