import React, {useState} from 'react';

export const AddTodo = ({addTodo}) => {
         const [title, setTitle] = useState("");  
         const [desc, setDesc] = useState("");


         const submit = (e) =>{
                  e.preventDefault();
                  if(!title || !desc){
                           alert("Title or Description Cannot be blank")
                  }
                  else{
                  addTodo(title, desc);
                  setTitle("");
                  setDesc("");
         }}

         const meSty = {
           color: "black",
           backgroundColor: "DodgerBlue",
           padding: "10px",
           fontFamily: "Arial",
           textAlign: "center"
         };

         const formSty = {
           color: "black",
           fontSize: "17px",
           backgroundColor: "rgb(229, 236, 255)",
           padding: "50px",
           fontFamily: "Arial",
           textAlign: "left",
           
         };

         return (
                  <div className="container my-3">
                  <h3 style={meSty}>ADD A TODO</h3>
                           <form onSubmit = {submit} style={formSty}>
                                    <div className="mb-3">
                                             <label htmlFor="title" className="form-label">Todo Title</label>
                                             <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                                    </div>
                                             <div className="mb-3">
                                                      <label htmlFor="desc" className="form-label">Todo Description</label>
                                                      <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc"/>
                                             </div>
                                             <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                           </form>
                  </div>
         )
}
