import {useContext} from "react";
import {useParams} from "react-router-dom"

import {MarketplaceContext} from "../../MarketplaceReact";

import {Hr} from "../../../../components/Hr";

import "./style.scss"


export const CurrentProductPage = () => {
    let categories = useContext(MarketplaceContext)["response"]["categories"];
    let {currentProductName} = useParams();
    let {currentCategoryName} = useParams();

    let currentCategory = categories?.find(category => category?.name === currentCategoryName);
    let currentProduct = currentCategory?.items?.find(product => product?.name?.substring(0, 25) === currentProductName)


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