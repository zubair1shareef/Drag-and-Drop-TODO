import './App.css';
import './extra.css'
import Board from './components/Board';
import Card from './components/Card';
import React,{useState,useEffect,useContext} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {
  const [data,setData]=useState([])
  const [datad,setDatad]=useState([])
  const [i,setI]=useState()
  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")

  useEffect(()=>{
    fetch('showtodo',{

    }).then(res=>res.json())
    .then(result=>{
     // console.log(result)
      setData(result)
    })

  },[i])

  useEffect(()=>{
    fetch('showdonetodo',{

    }).then(res=>res.json())
    .then(result=>{
     // console.log(result)
      setDatad(result)
    })

  },[])

 const cretadata=() =>{
    fetch('createtodo',{
      method:"post",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        title,
        body
      })

    }).then(res=>res.json())
    .then(resu=>{
      console.log(resu)
      setI(resu)
    })
 }
 
  
  return (
    <div className="App mainbody">
      
      
      
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">TODO</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>

  <div>
      <div id="container">
     
    <div className="inputall" style={{marginTop:"20px"}} >
      <div >
      <input className="inputcss1" type="text" id="task" placeholder="title" style={{maxWidth:"200px" ,margin:"9px"}} value={title} onChange={((e)=>setTitle(e.target.value))}/>
            
    <br></br>
      <textarea className="inputcss2" type="text" id="task" placeholder="body" style={{maxWidth:"300px"}} value={body} onChange={((e)=>setBody(e.target.value))}/>
    

      </div>
    
        
         <button className="btn waves=effect #64b5f6 blue dark-1 " style={{marginTop:"20px",color:"white"}} onClick={ cretadata}>
               submmit
               </button>
    </div>
        
        <div id="list-container"></div>
    
     <main className='flexbox center '>
       
       <Board id="board-1" className="board" width="400px" height="500px">
       <span class="card-title" style={{color:"white"}}>todo</span>
         
         {
           data.map(item=>{
            {  return(
              <Card id={item._id} className="card1" draggable="true" >
               
               
            <p>{item.title}</p>
            <Popup trigger={<i style={{cursor:"pointer"}} className="material-icons">remove_red_eye</i>} position="center">
            <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{item.title}</span>
          <p>{item.body}</p>
         
        </div>
         
      </div>
  </Popup>
            {console.log(data)
          
            }
 
          </Card>





            )}
            
             
           })
         }
         

         </Board>
         <div>
         <Board id="board-2" className="blockk" width="200px" height="200px" image='url("https://image.shutterstock.com/image-vector/trash-can-icon-symbol-delete-260nw-1454137346.jpg")' >
         
         </Board>
         <Board id="board-2" className="blockk" width="200px" height="200px" >
           
         </Board>
           
         </div>
     
       

       {/*<Board id="board-2" className="board center">
       <p class="card-title" style={{color:"white"}}>completed</p>
       { 
           datad.map(item=>{
            { return(
              <div >
                {
                  varibale(item)
                }

<Card id={item._id} className="card" draggable="true" >
            <p>{item.title}</p>
            <Popup trigger={<i style={{cursor:"pointer"}} className="material-icons">remove_red_eye</i>} position="center">
            <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{item.title}</span>
          <p>{item.body}</p>
        </div>
        
      </div>
  </Popup>
            {console.log(data)}
 
          </Card>
              </div>
              
             
            )}
            
             
           })
         }
       </Board>*/}
     </main>
    
     
    </div>
    </div>
    
      </div>
  );
}

export const varibale=data=>{
  const value =data
}

export default App;
