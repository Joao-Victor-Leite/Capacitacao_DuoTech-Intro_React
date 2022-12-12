import React from 'react'


export default function Cards({props}){
    const {icon, title, number} = props;
    return(
        <div style={{
            backgroundColor: "#EEF1F6",
            width: 100,
            height: 100,
            display: "flex",
            flexDirection: "column",
            borderRadius: 10,
            padding: 10,
            justifyContent: 'space-around',
            margin: 2,
        }}>
            <img src={icon} alt={title}/>
            <p>{title}</p>
            <p>{number}</p>
        </div>
    );
}

/*  */