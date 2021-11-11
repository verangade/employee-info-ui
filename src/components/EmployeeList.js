import React,{Component} from "react"
import Employee from "./Employee"

class EmployeeList extends Component{
    state = { employeeData : []  }

     async componentDidMount(){

        const r = await fetch("http://localhost:8081/getAll");
        console.log("R  "+r);
        const b =  await r.json();
        console.log("B  "+b);

        this.setState({ employeeData : b})

        console.log("EmployeeData  "+this.state.employeeData);

    }

    render(){
        const {employeeData} = this.state;
        //console.log("test new2 "+employeeData);
        return(
        <div className="EmployeeList">
 
                <ul>
                   {
                       employeeData.map( x => <Employee id={x.id} empData ={x}/> )
                   }
  
                </ul>
        </div>);
    }
}
export default EmployeeList