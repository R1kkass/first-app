import React from "react";
import './Lending.css'

const Lending = ()=>{
    document.title = "О компании"
    return(
        <div className="Lending">
            <div className="Lending__parallax">
                <h1>Ваш любимый магазин светотехники</h1>
            </div>
            <div className="Lending__aboutCompany">
                <h1>О компании 💡</h1>
                <div>
                    <p>
                    Электротехническая компания "Павлин" работает с 1998 года. Имеет долгосрочные отношения с крупными российскими производителями светотехнической, электромонтажной и кабельной продукции.
                    За годы работы создана надежная материально-техническая база, открыты складские помещения площадью свыше 2000 м2 с достойными запасами товара, находящиеся в центральной части города.
                    </p>
                    <div>
                        <img src="https://docsert.ru/wp-content/uploads/2019/09/lamp.png"></img>
                    </div>
                </div>
            </div>
            <div className="Text__container">
            <div className="Lending__text">
            <h1>Электротехнический центр ⚡</h1>
                <p>Компания имеет отдельное направление по электротехническим работам и предлагает следующие услуги:</p>
            </div>
            <div className="Lending__services">
              
                <div className="Services__block">
                    <div className="Block2">
                    Изготовление электрооборудования
                        
                    </div>
                    <div style={{paddingLeft:20, paddingTop: -10, zIndex: 5, position: 'absolute'}}>
                    <div className="Block">
                        <li>камеры КСО, ВРУ, АВР;</li>                               
                        <li>главные распределительные щиты (ГРЩ);</li>
                        <li>вводно-распределительные устройства;</li>
                        <li>автоматические вводы резерва;</li>
                        <li>шкафы распределительные;</li>
                        <li>шкафы электрические; шкафы учета;</li>
                        <li>шкафы управления; ящики управления</li>
                    </div>
                    </div>
                
                </div>
                <div className="Services__block">
                    <div className="Block2">
                    Изготовление электрооборудования
                        
                    </div>
                    <div style={{paddingLeft:20, paddingTop: -10, zIndex: 5, position: 'absolute'}}>
                    <div className="Block">
                        <li >разработка проектно-сметной документации;</li>
                        <li >электроснабжение различных объектов (жилые и промышленные здания);</li>
                        <li >ремонт и реконструкция объектов электроэнергетики;</li>
                        <li >монтаж и обслуживание распределительных устройств и трансформаторных
                            подстанций;
                        </li>
                        <li >монтаж воздушных линий электропередач, установка опор;</li>
                        <li >монтаж провода СИП;</li>
                        <li >прокладка кабеля, монтаж внешних сетей электроснабжения;</li>
                        <li >наружное и уличное освещение зданий;</li>
                        
                    </div>
                    </div>
                
                </div>
                </div>
            </div>
        </div>
    )
}

export default Lending