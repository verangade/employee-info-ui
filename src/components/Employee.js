import React from "react"

function Employee(props){
  
        return(
       /* <li className="Employee">
            {this.props.employeeData.firstName}  {this.props.employeeData.lastName} 
        </li> */
        <li className="Employee">
            {props.empData.firstName}  {props.empData.lastName} 
        </li>

        ); 
    
}

export default Employee