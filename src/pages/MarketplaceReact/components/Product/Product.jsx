import { Link } from "react-router-dom"

import { routes } from "../../../../router/routes"

import { textFormater } from "../../../../utility/textFormater"

import "./style.scss"

export const Product = ({ currentProduct, currentCategory }) => {
    return (
        <div className="product">
            <div className="product__name">
                <Link to={routes?.CurrentProduct(currentCategory?.id, currentProduct?.id)}>
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
                {textFormater(currentProduct?.description, 99)}
            </div>

        </div>
    )
}