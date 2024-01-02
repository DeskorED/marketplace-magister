import {useContext} from "react";
import {useParams} from "react-router-dom"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import {MarketplaceContext} from "../../MarketplaceReact";

import {Hr} from "../../../../components/Hr";

import "./style.scss"


export const CurrentProductPage = () => {
    let categories = useContext(MarketplaceContext)["response"]["categories"];
    let {currentProductName} = useParams();
    let {currentCategoryName} = useParams();

    let { shoppingCart } = useContext(MarketplaceContext);

    let currentCategory = categories?.find(category => category?.name === currentCategoryName);
    let currentProduct = currentCategory?.items?.find(product => product?.name?.substring(0, 25) === currentProductName)

    const handleAddToCart = () => {
        let currentShoppingCart = shoppingCart?.get();

        const existingProduct = currentShoppingCart?.find(item => item.product.name === currentProduct.name);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            currentShoppingCart?.push({
                id: currentProduct.name,
                product: currentProduct,
                quantity: 1
            });
        }

        shoppingCart?.set([...currentShoppingCart]);
    };

    return (
        <div className="current-product">
            <div className="current-product__name">
                {
                    currentProduct?.name
                }
            </div>
            <div className="current-product__image">
                <img src={currentProduct?.img}></img>
            </div>
            <Hr/>
            <div className="current-product__description">
                {
                    currentProduct?.description
                }
            </div>
            <Hr/>
            <div className="current-product__price">
                Ціна:
                {
                    currentProduct?.price + " грн"
                }
            </div>
            <div className="shopping-cart__add">
                <AddShoppingCartIcon
                    onClick={handleAddToCart}
                    className="shopping-cart__add-icon"
                />
            </div>
            <Hr/>
            {
                currentProduct?.stats &&
                <div className="current-product__stats">
                    Характеристики:
                    {
                        Object?.entries(currentProduct?.stats).map(
                            (stat, index) => {
                                return (
                                    <div key={`${currentProduct + index}`} className="current-product__stat">
                                        {
                                            stat[0] + " : " + stat[1]
                                        }
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            }

        </div>
    )
}