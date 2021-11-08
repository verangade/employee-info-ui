import React, {Component} from "react"

class Employee extends Component{
    render(){
        return(
        <li className="Employee">
            {this.props.employeeData.firstName}  {this.props.employeeData.lastName}
        </li>
        );
    }
}

export default Employee