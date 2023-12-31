import {useContext, useEffect, useState} from "react";

import {setRightResult} from "../../../../utility/setRightResult";
import {MarketplaceContext} from "../../MarketplaceReact";
import {getFilters} from "../../../../constants/getFilters";

import {Category} from "../Category"
import {Filter} from "../../../../components/Filter"

import "./style.scss"

export const CatalogPage = () => {
    let categories = useContext(MarketplaceContext)["response"]["categories"];

    const [currentFilter, setCurrentFilter] = useState({});

    useEffect(() => {
        setCurrentFilter(getFilters(categories));
    }, [categories]);

    let currentListAfterFilters = setRightResult(categories, currentFilter);

    return (
        <div className="categories-block">
            <div className="categories-filter">
                <Filter currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>
            </div>
            {
                currentListAfterFilters?.map(
                    category => {
                        if (currentFilter[category?.name]?.status) {
                            return <Category key={category?.name} currentCategory={category}/>;
                        } else return " ";
                    }
                )
            }
        </div>
    )
}