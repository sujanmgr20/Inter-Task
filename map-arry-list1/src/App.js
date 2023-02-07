
import './App.css';
import ArrayList from './ArrayList';

function App() {
  const students = [
    {name:"Sujan", email:"Sujanpun200@", phone:9834595286},
    {name:"Amrit", email:"Amtir300@gmai", phone:9864654286},
    {name:"Asmita", email:"Asmitanpun230@", phone:9834895286},
    {name:"Sonam", email:"Sonampon200@", phone:9864894586}

  ]
  // // Map function used for Looping
  // students.map((item)=>{
  // console.warn(item)
  // });

  /*
  for(let i=0; i<students.length; i++);
  {
    console.log("in for loop my name is:" students[i])
  }
  
  */
  return (
 <>
 <h1>Handle Array with List</h1>

 <tr>
     <td>Name</td>
     <td>Email</td>
     <td>Phone</td>

 
 </tr>

 {
  students.map((data) =>{
    <tr>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.phone}</td>
    </tr>
  })
 }
 <ArrayList/>
 </>
  );
}

export default App;
