import { Link } from "react-router-dom";

import { Routes } from "../../../../router/routes";
import { Product } from "../Product";

import "./style.scss";

export const Category = ({ currentCategory }) => {
    return (
        <div className="category">
            <div className="category__item">
                <div className="category__name">
                    <Link to={Routes.CurrentCategory(currentCategory?.id)}>
                        <div className="name__value">
                            {
                                currentCategory?.name?.ua
                            }
                        </div>
                    </Link>
                    <hr className="name__hr" />
                </div>
                <div className="category__products">
                    {
                        currentCategory?.items?.map(
                            (product) => <Product currentProduct={product} currentCategory={currentCategory} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}