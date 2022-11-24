import React, {useState} from 'react';
import arrowTop from '../../assets/arrow-top.png';
import arrowBottom from '../../assets/arrow-bottom.png';

export default function Collapse (props){
    const [open, setOpen] = useState(false);
    const toggle =() =>{
        setOpen(!open);
    };
    return(
        <div className='dropdown'>
            <div className='dropdown__btn' onClick={toggle}>
                <div>
                    {''}
                    <p>{props.label}</p>{''}
                </div>
                {open ? (
                    <img className='dropdown__arrow' src={arrowTop} alt='fleche haut'/>
                ) : (
                    <img className='dropdown__arrow' src={arrowBottom} alt='fleche bas'/>
                )}
            </div>
            {open && 
            <div className='dropdown__txt'>
                <p>{props.content}</p>
            </div>}
        </div>
    );
}