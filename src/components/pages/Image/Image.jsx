import React from "react";
import './Image.css'

const Image = ()=>{
    return(
        <div className="Image">
            <div>
            <div className="Image__colba">
                <h1>
                    Колба
                </h1>
            </div>
            <div className="Image__sterzhen">
                <h1>
                    Электроды
                </h1>
            </div>
            <div className="Image__cocol">
                <h1>
                    Цоколь
                </h1>
            </div>
            <div className="Image__central">
                <h1>
                    Центральный контакт
                </h1>
            </div>
            </div>
        </div>
    )
}

export default Image