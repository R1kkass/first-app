import React from 'react';
import cl from './MyModal.module.css';
import MyButton from '../../UI/MyButton/MyButton';


const MyModal = ({children, visible, setVisible, nameModal, inf, click, nameButton}) => {

const rootClasses = [cl.myModal]
if(visible && nameModal==inf){
rootClasses.push(cl.active)
}

return (
<div>
<MyButton click={click}>{nameButton}</MyButton>
<div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
<div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}>
{children}
</div>
</div>
</div>
);
};

export default MyModal;