import React, { useEffect, useState } from "react";
import './Menu.css'

const Menu = ({style})=>{
    
    const head=[{height: 155}]
    const [styles, setStyles] = useState([])

    useEffect(()=>{
        window.addEventListener('scroll', () => { 
        
            if(window.scrollY>100 && root.offsetWidth>1000 && head[0].height==155){
                setStyles({marginTop: -60})
                
                head[0].height=60
            }else if(window.scrollY<100 && root.offsetWidth>1000 && head[0].height==60){
                setStyles({marginTop: 0})
                head[0].height=155
                
            }else if(root.offsetWidth<1000 && head[0].height==155){
                head[0].height=60
                console.log('render');
                setStyles({marginTop: 0, display: 'none'})
            }
        })
       
    return () => window.removeEventListener('scroll', ()=>{
        console.log(head[0].height);
        if(window.scrollY>100 && root.offsetWidth>1000 && head[0].height==155){
            setStyles({marginTop: 0})
            
            head[0].height=60
        }else if(window.scrollY<100 && root.offsetWidth>1000 && head[0].height==60){
            setStyles({marginTop: -60})
            head[0].height=155
            
        }else if(root.offsetWidth<1000){
            console.log('render');
            setStyles({marginTop: -60, display: 'none'})
        }
    });
    },[])


    return(
        <>
        <div>
        <div className="Menu">
            <div style={styles} className="Menu__filter">
                <h3
                >Каталог товаров</h3>
                <div>
                <h3>Геодезическое оборудование</h3>

                <p className="Filter__p"><a>GPS</a></p>
                <p className="Filter__p"><a>Тахометры</a></p>
                <p className="Filter__p"><a>Теоделиты</a></p>
                <p className="Filter__p"><a>Нивелиры</a></p>
                <p className="Filter__p"><a>Аксессуары</a></p>
                </div>
                <div>
                <h3>Светотехника</h3>
                <p className="Filter__p"><a>Светофоры</a></p>
                <p className="Filter__p"><a>Светильники</a></p>
                <p className="Filter__p">
                <a>Указатели улиц</a>
                </p>
                </div>
                <div>
                <h3>Медицина</h3>
                <p className="Filter__p"><a>Неонатально оборудование</a></p>
                <p className="Filter__p"><a>Лабораторное оборудование</a></p>
                <p className="Filter__p"><a>Кислородные палатки</a></p>
                <p className="Filter__p"><a>Бактерицидное оборудование</a></p>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Menu