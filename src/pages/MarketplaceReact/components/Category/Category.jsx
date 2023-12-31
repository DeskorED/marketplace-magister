import { Link } from "react-router-dom";

import { routes } from "../../../../router/routes";
import { Product } from "../Product";

import "./style.scss";

export const Category = ({ currentCategory }) => {

    return (
        <div className="category">
            <div className="category__item">
                <div className="category__name">
                    <Link to={routes.CurrentCategory(currentCategory?.name)}>
                        <div className="name__value">
                            {
                                currentCategory?.name
                            }
                        </div>
                    </Link>
                    <hr className="name__hr" />
                </div>
                <div className="category__products">
                    {
                        currentCategory?.items?.map(
                            (product) => <Product key={product?.name} currentProduct={product} currentCategory={currentCategory} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}