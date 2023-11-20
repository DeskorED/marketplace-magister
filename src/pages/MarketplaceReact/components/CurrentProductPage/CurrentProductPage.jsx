import { useParams } from "react-router-dom"

import { categories } from "../../../../constants/categories"

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

            <div className="current-product__description">
                {
                    currentProduct?.description
                }
            </div>

            <div className="current-product__price">
                Ціна:
                {
                    currentProduct?.price?.value + " " + currentProduct?.price?.unit
                }
            </div>
        </div>
    )
}