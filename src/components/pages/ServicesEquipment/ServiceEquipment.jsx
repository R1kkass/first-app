import React from "react";
import './ServicesEquipment.css'

const ServicesEquipment = ()=>{
    document.title="Сервисное оборудование"

    return(
        <div className="ServicesEquipment">
            <h1>Категории оборудование</h1>
            <div className="ServicesEquipment__block">
                <div className="Block__unit">
                    <img  src="https://cdn-icons-png.flaticon.com/128/1099/1099191.png"/>
                    <p>Прожекторы</p>
                </div>
                <div className="Block__unit">
                    <img  src="https://obs-dv.ru/bitrix/templates/oborudovanie-servise/media/icons/categories/counter.png"/>
                    <p>Ламочки</p>
                </div>
                <div className="Block__unit">
                    <img  src="https://obs-dv.ru/bitrix/templates/oborudovanie-servise/media/icons/categories/boxes.png"/>
                    <p>Светильники</p>
                </div>
                <div className="Block__unit">
                    <img  src="https://obs-dv.ru/bitrix/templates/oborudovanie-servise/media/icons/categories/boxes.png"/>
                    <p>Люстры</p>
                </div>
                <div className="Block__unit">
                    <img  src="https://obs-dv.ru/bitrix/templates/oborudovanie-servise/media/icons/categories/boxes.png"/>
                    <p>Фонари</p>
                </div>
                <div className="Block__unit">
                    <img  src="https://obs-dv.ru/bitrix/templates/oborudovanie-servise/media/icons/categories/boxes.png"/>
                    <p>Плафоны</p>
                </div>
            </div>
            <div className="ServicesEquipment__title">
                <h1>Свет</h1>
                <div className="Title__block">
                    <div className="Block1">
                        <h1>Люстры</h1>
                    </div>
                    <div className="Block2">
                        <h1>Световые ленты</h1>
                    </div>
                </div>
            </div>
            <div className="ServicesEquipment__title">
                <h1>Лампочки</h1>
                <div className="Title__block">
                    <div style={{background: 'url("http://euro-lamp.nethouse.ru/static/img/0000/0005/9420/59420712.yuqj094zlz.W665.JPG")'}} className="Block1">
                        <h1>Лампы накаливание</h1>
                    </div>
                    <div style={{background: 'url("https://ae04.alicdn.com/kf/Sf9c9145b2e8244088f9d8b3aadc6ed279/-.jpg")', backgroundSize: '100%'}} className="Block2">
                        <h1>Энергосберегающие лампы</h1>
                    </div>
                </div>
            </div>
            <div className="ServicesEquipment__title">
                <h1>Прожекторы</h1>
                <div className="Title__block">
                    <div style={{backgroundSize: '100%', background: 'url("data:image/jpeg;base64,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hIFdml6rk6JTHwF9O0yWwK5WpHdmDG3hMqlsGNW7z8TMyYmEGrfePxmXNIREQEREBERAREQNX8pA/wDLsR91f+ok4z0f2ecRU80ilqlxlUEAEWJJJvpa07P5R/8A07EfdX+dZwzYe2GwtYVACRfrWNiVO8KfDf3SwT22uj9WgueopVTmCspuGZN4BBNtx3jW2k2fyN6tib62Wna+ttam7lNT270qTEKKVNKgpgs5D2ADsGHUQXCL1iLXm1+Rf0sT92n8akDqoE9iJAiIgIiICQ30VWcgi6954kyWfdMGgOsx+1bwAko17aWAGarlZlyrmWzHeLHf7DJ/Yik0VuTfXj2yODZqlTtRvDrSawNO1NB2CIrKiIlQiIgIiICIiAmE9VHfKDdl1NuF+BPPsl+quYEXIB0uDY+w8O+Y/wBFysmSyoobMOd7W153F7mB7iU6rDmD75h1lyvRHJW/KZeIxKqOsbdh3yLWtmdG9Ym3dukonaC2HeSZdiJQiIgIiICIiAiIgYm0MDTr02pVVD03FmU3sdb8O0TWP/DTZ37t/wC9qfrNyiBpw8m2zv3Lf3j/AKya2J0ew2EDfR6YQvbMbklrXtck8LnxkvEBERAREQEREC3UO6YFB99t5LH/ABG35TMqnrCRmzHudfq6Hvkoow2FIdhxy5fH/WTYWY9BOsTzmVECIiUIiICIiAiIgJTbW8qiB5aYhwCecFQ3uBYD6o7bTMiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgR21KmRQ/wBUEX7AeM9oUFPWBFic39JmugIIIuDvB3GY1DAInoggcszFR3An3SDJQcZXEShERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q==")'}} className="Block1">
                        <h1>Инфрокрасные</h1>
                    </div>
                    <div style={{backgroundPosition: 'center', background: 'cover' ,background: 'url("https://svetpro.ru/_assets/components/phpthumbof/cache/gf3.1909996e14d4f5756c0eaae832f37f533808.jpg")', backgroundSize: '100%'}} className="Block2">
                        <h1>Ксеноновые</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesEquipment