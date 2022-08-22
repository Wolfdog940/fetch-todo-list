

import React, { useEffect, useState } from "react";

const List = () => {
  const [todolist, setTodolilst] = useState([]);
  const [bol,setBol]=useState(false);

  
 

  const deleteTask=(item)=>{

    setTodolilst(todolist.filter(filtro=>filtro !== item))

  }


  useEffect(() =>{
    //createNewUser()
    //deletAll()
  },[])

const createNewUser=()=>{


  fetch('https://assets.breatheco.de/apis/fake/todos/user/OscarUrrutia', {
    method: "POST",
    body: JSON.stringify([{label: "primera tarea" , done: false}]),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => {
      console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
      console.log(resp.status); // el código de estado = 200 o código = 400 etc.
     
      return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
  })
  .then(data => {
      //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
      console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
  })
  .catch(error => {
      //manejo de errores
      console.log(error);
  });


}

function sendTodoList(toDos) {
  fetch("https://assets.breatheco.de/apis/fake/todos/user/OscarUrrutia", {
    method: "PUT",
    body: JSON.stringify(toDos),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      console.log(resp.ok); // will be true if the response is successfull
      console.log(resp.status); // the status code = 200 or code = 400 etc.
      console.log(resp.text()); // will try return the exact result as string
      return resp; //(returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then((data) => {
      //here is were your code should start after the fetch finishes
      console.log(data); //this will print on the console  the exact object received from the server
    })
    .catch((error) => {
      //error handling
      console.log(error);
    });
}

const addList = (e) => {
  if(e.target.value.trim()<=0) return;
   
  setTodolilst([
    ...todolist,
      {
        
        label: e.target.value,
        done: false,
      }
    
    
    
      ]);

      sendTodoList([
      ...todolist,
      
      {
      label: e.target.value,
      done: false,
    }
  


      ])
}

function deleteTodoList() {
  fetch("https://assets.breatheco.de/apis/fake/todos/user/OscarUrrutia", {
    method: "DELETE]",
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      console.log(resp.ok); // will be true if the response is successfull
      console.log(resp.status); // the status code = 200 or code = 400 etc.
      console.log(resp.text()); // will try return the exact result as string
      return resp; //(returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then((data) => {
      //here is were your code should start after the fetch finishes
      console.log(data); //this will print on the console  the exact object received from the server
    })
    .catch((error) => {
      //error handling
      console.log(error);
    });




}




console.log("nuestro todo array", todolist);


  return (
    <div className="list">
      <h1>To Do List</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key == "Enter"&& e.target.value.trim()) {
            addList(e);//trin para que elimine espacios y no agrege tarea vacia
          e.target.value="";
          }
        }}
      />
      <div className="">
        <ul>
          {todolist.map((item, i) => (
            <li key={i}>{item.label} <button onClick={()=>deleteTask(item)}>X</button></li>
          ))}
          <p>{todolist.length +" elements left"}</p>
          
        </ul>
      </div>
    </div>
  );
          }

export default List;
