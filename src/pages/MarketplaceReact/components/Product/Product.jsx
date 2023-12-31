import { useContext } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { MarketplaceContext } from "../../MarketplaceReact";
import { routes } from "../../../../router/routes";

import { textFormater } from "../../../../utility/textFormater";

import "./style.scss";

export const Product = ({ currentProduct, currentCategory }) => {
    let { shoppingCart } = useContext(MarketplaceContext);

    const handleAddToCart = () => {
        let currentShoppingCart = shoppingCart?.get();

        const existingProduct = currentShoppingCart.find(item => item.product.name === currentProduct.name);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            currentShoppingCart.push({
                id: currentProduct.name,
                product: currentProduct,
                quantity: 1
            });
        }

        shoppingCart?.set([...currentShoppingCart]);
    };

    return (
        <div className="product">
            <div className="product__name">
                <Link to={routes?.CurrentProduct(currentCategory?.name, currentProduct?.name.substring(0, 25))}>
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
            <div className="shopping-cart__add">
                <AddShoppingCartIcon
                    onClick={handleAddToCart}
                    className="shopping-cart__add-icon"
                />
            </div>
        </div>
    );
};
