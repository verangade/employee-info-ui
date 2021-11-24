import React,{Component} from "react"
import Employee from "./Employee"

class EmployeeList extends Component{
   /* state = { employeeData : []  }

     async componentDidMount(){

        const r = await fetch("http://localhost:8081/getAll");
        console.log("R  "+r);
        const b =  await r.json();
        console.log("B  "+b);

        this.setState({ employeeData : b})

        console.log("EmployeeData  "+this.state.employeeData);

    }
    */

    render(){
        //const {employeeData} = this.state;
        //console.log("test new2 "+employeeData);
        return(
        <div className="EmployeeList">
 
                <ul>
                   {
                       this.props.employeeData.map( x => <Employee key={x.id} empData ={x}
                         handleChangeProps={this.props.handleChangeProps} 
                         deleteEmployeeProps={this.props.deleteEmployeeProps} 
                         addEmployee ={this.props.addEmployee}/> )
                   }
  
                </ul>
        </div>);
    }
}
export default EmployeeList