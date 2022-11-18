import React from "react";
import Card from "../../UI/Card/Card";
import './Sale.css'
import { product } from "../../../ArrayBD/Array";

const Sale = ()=>{
    document.title="Спецпредложения и скидки"
    return(
        <div className="Sale">
            <img src="https://static.mvideo.ru/media/Promotions/Promo_Page/2022/October/chyornaya-pyatnica-skidki/img/bf/banner-desktop-20.png" />
            <h1>Спецпредложения и скидки</h1>
            <div className="Sale__card">
            {
                    product?.map((product)=>(
                        <Card key={product.id} p={true} product={product}></Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Sale