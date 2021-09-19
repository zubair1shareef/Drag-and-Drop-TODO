import React from 'react'

function Card(props) {


    const dragStart=e=>{
        const target=e.target
        e.dataTransfer.setData('card_id',target.id)
        
    }

    const dragOver=e=>{
        e.stopPropagation();
    }

    return (
        <div
        id={props.id}
        className="card-content card card1"
        style={{display:"flex"}}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}

        >
            {props.children}
            
        </div>
    )
}

export default Card
