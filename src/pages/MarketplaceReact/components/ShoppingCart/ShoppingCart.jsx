import {useContext, useEffect, useState} from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {MarketplaceContext} from "../../MarketplaceReact";

import "./style.scss";

export const ShoppingCart = () => {
        const {shoppingCart} = useContext(MarketplaceContext);
        const [shoppingCartModalIsOpen, setShoppingCartModalIsOpen] = useState(false);
        const [shoppingCartItems, setShoppingCartItems] = useState([]);

        useEffect(() => {
            setShoppingCartItems(shoppingCart?.get() || []);
        }, [shoppingCart?.get()]);

        const handleQuantityChange = (itemId, delta) => {
            const updatedItems = shoppingCartItems.map(item => {
                if (item.id === itemId) {
                    return {...item, quantity: Math.max(0, item.quantity + delta)};
                }
                return item;
            }).filter(item => item.quantity > 0);

            setShoppingCartItems(updatedItems);
            shoppingCart?.set(updatedItems);
        };

        const getTrueSizeOfShoppingCart = () => {
            return shoppingCartItems?.reduce((sum, item) => sum + (item?.quantity || 0), 0);
        }

    const handleInputChange = (itemId, newQuantity) => {
        const quantity = parseInt(newQuantity, 10);
        if (!isNaN(quantity) && quantity >= 0) {
            handleQuantityChange(itemId, quantity - (shoppingCartItems.find(item => item.id === itemId)?.quantity || 0));
        }
    };

        const handleRemoveItem = (itemId) => {
            const updatedItems = shoppingCartItems.filter(item => item.id !== itemId);
            setShoppingCartItems(updatedItems);
            shoppingCart?.set(updatedItems);
        };

        return (
            <div className="shopping-cart__component">
                <ShoppingCartIcon
                    className="shopping-cart__icon"
                    onClick={() => setShoppingCartModalIsOpen(!shoppingCartModalIsOpen)}
                    fontSize={"large"}
                />
                <div className="shopping-cart__amount">{getTrueSizeOfShoppingCart()}</div>
                {shoppingCartModalIsOpen && (
                    <div className="shopping-cart__modal-background">
                        <div className="shopping-cart__modal">
                            <div className="header">Корзина</div>
                            <div className="shopping-cart__items">
                                {
                                    shoppingCartItems.map((item, index) => {
                                        console.log(item)
                                            return (
                                                <div key={`item-${index}`} className="shopping-cart__item">
                                                    <div className="shopping-card__item-name">
                                                        {item?.product?.name}
                                                    </div>

                                                    <div className="shopping-cart__item-price">
                                                        {`${item?.product?.price} Грн`}
                                                    </div>

                                                    <div className="shopping-cart__item-quantity">
                                                        <div
                                                            className="item-quantity__remove"
                                                            onClick={() => handleQuantityChange(item.id, -1)}
                                                        >
                                                            <RemoveIcon/>
                                                        </div>
                                                        <div className="item-quantity__value">
                                                            <input
                                                                type="number"
                                                                value={item.quantity}
                                                                min={0}
                                                                max={99}
                                                                onChange={
                                                                (e) => handleInputChange(item.id, e.target.value)
                                                            }
                                                                className="item-quantity__input"
                                                            />
                                                        </div>
                                                        <div
                                                            className="item-quantity__add"
                                                            onClick={() => handleQuantityChange(item.id, 1)}
                                                        >
                                                            <AddIcon/>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="shopping-cart__item-cancel"
                                                        onClick={() => handleRemoveItem(item.id)}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                            <div className="shopping-cart__summary">

                                <div>
                                    Сума: {
                                    shoppingCartItems.reduce((sum, current) => sum + (current?.quantity * current?.product?.price || 0), 0)
                                } Грн
                                </div>

                                <button className="submit">
                                    Купить
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
;
