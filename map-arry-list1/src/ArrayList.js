import React from 'react'

const ArrayList = () => {
    const students = [
        {name:"Sujan", email:"Sujanpun200@", phone:9834595286},
        {name:"Amrit", email:"Amtir300@gmai", phone:9864654286},
        {name:"Asmita", email:"Asmitanpun230@", phone:9834895286},
        {name:"Sonam", email:"Sonampon200@", phone:9864894586}
    
      ]
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
    
    </>
  )
}

export default ArrayList