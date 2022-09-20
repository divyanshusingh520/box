import './App.css';

function Loop({count}) {
  
  
  var x =Object.values(count)
  console.log(x);
  for(var i=0;i<x.length;i++)
  {
    var data =x[i];
    console.log(data);
    // var x =Object.values(count)
    var rows =[];
   for(var j=0;j<data;j++)
  {
    // var rows =[];
    rows.push(<div>{<input className='inputbox'></input>}</div>)
  } 
  }
  
  return (
    <div className="box">
    
      {rows}
    </div>
  );
}

export default Loop;
