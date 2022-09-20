
import './App.css';
import { useState} from 'react'
import Loop from './Loop';



function App() {
  
  let [email,setEmail]= useState('');
  let [data,setData]=useState([]);
  let [first,setFirst]=useState(0);
   console.log(email);
  
   
   const addChange=(e)=>{
    const sumArr=data;
    const sum=sumArr.reduce(function(a,b){
      return parseInt(a)+parseInt(b);
    },0);
    if(sum){
      setFirst(sum);

   }
  }
   
  function handleClick(e){
    let response = (email)
    setData([...data,` ${response}`]);
    console.log(data);
    // let response = (email)
    // setData(response);
    // console.log(data);
    // console.log(response);
//      for(let i=0; i<data; i++)
//      {
     
// console.log('hi')
//      }
  
  }
  return (
    
    
    <div className="App">
      
      
        <label className='label'>Create Number Box </label><br></br>
     <input classname="first" type="number" name="num" min="1" max="9" placeholder="enter your value"  onChange={(e)=>setEmail(e.target.value)}/>
  
  
   
     <button className='create' onClick={handleClick}>Create</button>
     <button className='evolute'onClick={addChange} >Evolute</button>

      <Loop count={data}></Loop>
      <label>Sum of inputs : {first}</label>
      </div>
  )
  }

export default App;

