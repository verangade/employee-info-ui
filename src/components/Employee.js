import React from "react"

function Employee(props){

    const val = false;
  
        return(
       /* <li className="Employee">
            {this.props.employeeData.firstName}  {this.props.employeeData.lastName} 
        </li> */
        <li className="Employee">
           <input type="checkbox" onChange={ () => console.log("checked")} checked={val}/> {props.empData.firstName}  {props.empData.lastName} 
        </li>

        ); 
    
}

export default Employee