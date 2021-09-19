import React,{useState,useEffect} from 'react'
import {varibale} from '../App'
import M from 'materialize-css'

function Board(props) {
    const [data,setData]=useState([])
    useEffect(()=>{

    },[data])
    
    const drop=e=>{
        e.preventDefault();
        const card_id=e.dataTransfer.getData('card_id');
        const card=document.getElementById(card_id)
        card.style.display='block'

       
        console.log(e.target.id)
        if( e.target.id&&e.target.id==='board-2'){
           e.target.appendChild(card)



            fetch(`/deletetodo/${card_id}`,{
                method:"delete"

            }).then(res=>res.json())
            .then(resu=>{setData(resu.result)
                console.log(resu)
             return   fetch('/createdonetodo',{
                    method:"post",
                    headers:{
                        "Content-Type":"application/json",
                 
                    },
                    body:JSON.stringify(
                        {
                            title:resu.result.title,
                            body:resu.result.body,
                            cretedby:resu.result.cretedby
                        }
                    )
                }).then(data=>{console.log(data)
                    
                   
                                 }
                        )


            })



            
          

        }
        if( e.target.id&&e.target.id==='board-1'){
            return M.toast({html:"sorry you cant do that",classes:"#e53935 red darken-1"})

        }
       
           
       
      //console.log(card.id)

    }

    const dragOver=e=>{
        e.preventDefault()
        {console.log("drag")}
        
    }

    return (
        <div className="card board collection-item overflow-auto "
        id={props.id}
        onDrop={drop}
       // className={props.className}
        onDragOver={dragOver}
        style={{height:props.height , backgroundImage:props.image,width:props.width}}
        >
            {props.children}
           
            
        </div>
    )
}

export default Board
{/*if( e.target.id&&e.target.id==='board-2'){


            
            fetch(`/deletetodo/${card_id}`,{
                method:"delete"

            }).then(res=>res.json())
            .then(resu=>{setData(resu.result)
                console.log(resu)
             return   fetch('/createdonetodo',{
                    method:"post",
                    headers:{
                        "Content-Type":"application/json",
                 
                    },
                    body:JSON.stringify(
                        {
                            title:resu.result.title,
                            body:resu.result.body,
                            cretedby:resu.result.cretedby
                        }
                    )
                }).then(data=>{console.log(data)
                    
                    const  refreshPage=()=>{      window.parent.location = window.parent.location.href; }
                    refreshPage()
                                 }
                        )


            })



            
          

        } 
    
    heheh
    if( e.target.id&&e.target.id==='board-1'){
            fetch(`/deletedonetodo/${card_id}`,{
                method:"delete"

            }).then(res=>res.json())
            .then(resu=>{setData(resu.result)
                console.log(resu)
                if(resu.result==undefined){
                    console.lof(card_id)
                    fetch(`/searchdata/${card_id}`,{
                        method:"get"
                    })
                    .then(resu=>resu.json()).then(ress=>console.log(ress))
                  
                  

                }
                else{
                    return   fetch('/createtodo',{
                        method:"post",
                        headers:{
                            "Content-Type":"application/json",
                     
                        },
                        body:JSON.stringify(
                            {
                                title:resu.result.title,
                                body:resu.result.body,
                                cretedby:resu.result.cretedby
                            }
                        )
                    }).then(data=>{console.log(data)
                    
                    const  refreshPage=()=>{      window.parent.location = window.parent.location.href; }
                    refreshPage()
                    }
 )

                }
            


            })
        }
    
    
    */}