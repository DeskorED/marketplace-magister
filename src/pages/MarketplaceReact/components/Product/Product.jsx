import { Link } from "react-router-dom"

import { Routes } from "../../../../router/routes"

import "./style.scss"

export const Product = ({ currentProduct, currentCategory }) => {
    return (
        <div className="product">
            <div className="product__name">
                <Link to={Routes?.CurrentProduct(currentCategory?.id, currentProduct?.id)}>
                    {currentProduct?.name}
                </Link>
            </div>
            <div className="product__image">
                <img src={currentProduct?.img}></img>
            </div>
            <div className="product__price">
                {currentProduct?.price?.value} {currentProduct?.price?.unit}
            </div>
            <div className="product__description">
                {currentProduct?.description}
            </div>

        </div>
    )
}