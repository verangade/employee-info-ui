//import React from "react"
import React, {useState} from "react";

function Employee(props){

    const val = false;
    const [editing,setEditing] = useState(false);
   
    let viewMode = {}
    let editMode = {}

    if(editing){
        viewMode.display = "none";
    }else{
        editMode.display = "none";
    }

    function handleEditing() {
        console.log("edit");
        setEditing(true);
    }
    
        return(
       /* <li className="Employee">
            {this.props.employeeData.firstName}  {this.props.employeeData.lastName} 
        </li> */
        <li key={props.empData.id}>
           <div onDoubleClick={handleEditing} style={viewMode}>
                <input type="checkbox" onChange={ () => props.handleChangeProps(props.empData.id)} checked={props.empData.activeFlag}/> 
                {props.empData.firstName}  {props.empData.lastName} 
              
           </div>
           <input type="text" style={editMode} className="{styles.textInput}" value={props.empData.firstName} onChange={ 
               e => {console.log(e.target.value)}
           }/>
           <button onClick={ () => props.deleteEmployeeProps(props.empData.id)}>Delete</button>
        </li>

        ); 
    
}

export default Employee