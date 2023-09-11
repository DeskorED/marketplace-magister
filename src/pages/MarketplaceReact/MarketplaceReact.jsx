import { categories } from "../../constants/categories"

import { Header } from "./components/Header"

import "./style.scss"

export const MarketplaceReact = () => {
    return (
        <div className="market-place-page">
            <Header />
            <div className="categories-block">
                {
                    categories.map(
                        category => {
                            return (
                                <div className="categories__item">
                                    <div className="categories__name">
                                        <div className="name__value">
                                            {
                                                category?.name?.ua
                                            }
                                        </div>
                                        <hr className="name__hr" />
                                    </div>
                                    <div className="categories__products">
                                        {
                                            category?.items?.map(
                                                (product) => {
                                                    return (
                                                        <div>
                                                            {product?.name}
                                                        </div>
                                                    )
                                                }
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}