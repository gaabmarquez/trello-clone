import React from 'react';

const Card = ({ text }) => {
    return (
        <div className="card" style={styles.card}>
            <div className="card-body"  style={styles.cardBody}>
                {text}
           </div>
        </div>
    );

}
const styles = {
    card: {
        margin: "10px",
        boxSizing: "border-box",
        borderRadius: "3px",
        height: "auto",
    },
    cardBody: {
        padding: "10px",
        fontSize: "14px",

    }

}

export default Card;
