import { useParams } from "react-router-dom"

import { categories } from "../../../../constants/categories"

import { Hr } from "../../../../components/Hr";

import "./style.scss"

export const CurrentProductPage = () => {

    let { currentProductID } = useParams();
    let { currentCategoryID } = useParams();

    let currentCategory = categories?.find(category => category?.id === currentCategoryID);
    let currentProduct = currentCategory.items.find(product => product?.id === currentProductID)

    console.log(currentProduct)

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
            <Hr />
            <div className="current-product__description">
                {
                    currentProduct?.description
                }
            </div>
            <Hr />
            <div className="current-product__price">
                Ціна: 
                {
                    currentProduct?.price?.value + " " + currentProduct?.price?.unit
                }
            </div>
            <Hr />
            {
                currentProduct?.stats &&
                <div className="current-product__stats">
                    Характеристики: 
                    {
                        Object?.entries(currentProduct?.stats).map(
                            stat => <div className="current-procut__stat">
                                {
                                    stat[0] + " : " + stat[1]
                                }
                            </div>
                        )
                    }
                </div>
            }

        </div>
    )
}