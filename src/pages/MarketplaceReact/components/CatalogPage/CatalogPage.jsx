import {useState} from "react";

import { categories } from "../../../../constants/categories"
import {filters} from "../../../../constants/filters";

import { Category } from "../Category"
import { Filter } from "../../../../components/Filter"

import "./style.scss"
import {setRightResult} from "../../../../utility/setRightResult";

export const CatalogPage = () => {
    const [currentFilter, setCurrentFilter] = useState(filters);

    let currentListAfterFilters = setRightResult(categories, currentFilter);

    return (
        <div className="categories-block">
            <div className="categories-filter">
                <Filter currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
            </div>
            {
                currentListAfterFilters?.map(
                    category => <Category currentCategory={category} />
                )
            }
        </div>
    )
}