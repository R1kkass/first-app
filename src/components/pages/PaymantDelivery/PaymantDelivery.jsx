import React from "react";
import './PaymantDelivery.css'


const PaymantDelivery = () =>{

    document.title="Оплата и доставка"

    return(
        <div className="PaymantDelivery">
            <div className="PaymantDelivery__blockPaymant">
                <h1>
                    Оплата 💰
                </h1>
                <p>
                Обращаем ваше внимание,
                </p>
                <p>
                отправка заказов в регионы РФ транспортными компаниями возможна только на условиях 100% предоплаты.
                </p>
                <div className="blockPaymant">
                    <div>
                        <img src="https://www.teploluxe.ru/upload/iblock/e4c/e4ca7d9e3462a1d389ddc82175dd6216.png" />
                    </div>
                    <div>
                        <h1>
                            Наличными при получении заказа
                        </h1>
                        <p>
                            Оплата заказа наличными в момент получения заказа.
                            <br/>
                            Возможно только при доставке курьером по Москве и Московской области.
                        </p>
                    </div>
                </div>
                <div className="blockPaymant">
                    <div>
                        <img src="https://www.teploluxe.ru/upload/iblock/b77/b77f90a4e9d459bb2047f589713c5289.png" />
                    </div>
                    <div>
                        <h1>
                            Банковской картой при получении заказа
                        </h1>
                        <p>
                        Оплата заказа банковской картой в момент получения заказа.
                        <br/>
                        Возможно только при доставке курьером по Москве и Московской области.
                        </p>
                    </div>
                </div>
                <div className="blockPaymant">
                    <div>
                        <img src="https://www.teploluxe.ru/upload/iblock/17e/17e54b7b0d609bfeaca8c628bec57dad.png" />
                    </div>
                    <div>
                        <h1>
                            On-line платеж банковской картой на сайте
                        </h1>
                        <p>
                        Перевод денег осуществляется через Промсвязьбанк. Доступно при выборе любого способа доставки.
                        <br/>
                        При выборе этого способа оплаты необходимо указать адрес электронной почты при оформлении заказа.
                        </p>
                    </div>
                </div>
            </div>
            <div className="PaymantDelivery__blockPaymant">
                <h1>
                    Доставка 🚚
                </h1>
                <div className="blockPaymant">
                    <div>
                        <img src="https://www.teploluxe.ru/upload/iblock/2cd/2cd0357a5f7d689cec5d86f884355759.png" />
                    </div>
                    <div>
                        <h1>
                        Самовывоз из салонов розничных продаж.
                        </h1>
                        <p>
                        Вы можете забрать свой заказ в любом из наших розничных магазинов. 
                            </p>
                    </div>
                </div>
                <div className="blockPaymant">
                    <div>
                        <img src="https://www.teploluxe.ru/upload/iblock/c54/c54947186190f0d46a32b6963447cb5e.png" />
                    </div>
                    <div>
                        <h1>
                        Доставка по России транспортными компаниями.
                        </h1>
                        <p>
                        Мы доставим Ваш заказ в любой город РФ любой транспортной компанией по Вашему выбору.
Отправка заказов в регионы производится только на условиях 100% предоплаты за заказанный товар.
                        </p>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default PaymantDelivery