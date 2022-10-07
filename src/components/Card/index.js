import React from "react";
import styles from './Card.module.scss';

function Card (props) {
    return (
        <div className={styles.card}>
            <div className="favorite">
                <img src="/img/liked.svg" alt="Liked"/>
            </div>
            <img style={{ display: "inherit", margin: "0 auto" }} width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="SVG: plus"/>
                </button>
            </div>
        </div>
    )
}

export default Card;