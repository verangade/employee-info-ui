import React,{Component} from "react"
import Employee from "./Employee"

class EmployeeList extends Component{

    render(){
        return(
        <div className="EmployeeList">
  
                <ul>
                    {this.props.employeeData.map( employee => (<Employee  key={employee.id} 
                    employeeData={employee}/>)
                    ) }
                    
                
                
            </ul>

       
        </div>);
    }
}

export default EmployeeList