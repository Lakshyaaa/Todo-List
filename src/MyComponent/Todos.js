import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
let myStyle = {
         minHeight: "45.5vh",
         margin: "40px auto",
         padding: "50px"
}

         return (
                  <div className="container my-3"  style={myStyle}>
                           <h3  className="my-4 text-center">Todos List</h3>
                           {props.todos.length === 0 ? <p className="text-center">No Todos to display</p> :
                                    props.todos.map((todo) => {
                                             return(<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                                             )
                                    })
                           }
                  </div>
         )
}
