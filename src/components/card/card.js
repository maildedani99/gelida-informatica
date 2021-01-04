import React from 'react';
import styles from './card.module.css';
import star from '../../assets/star.png';
import chat from '../../assets/chat.png';
import settings from '../../assets/settings.png';
import big2 from '../../assets/big2.png';


const Card = (props) => {
    
    const { img, title, content } = props;
    return (
        <div className={styles.__card}>
            <img className={styles.__icon} src={img} alt="imagen"/>
            <p className={styles.__icon_title} >{title}</p>
            <p className={styles.__icon_content}>{content}</p>
        </div>
    )
}
export default Card;