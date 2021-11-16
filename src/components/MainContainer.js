import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import Header from "./Header"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import Test from "./Test"


class MainContainer extends Component {

    state = { employeeData : []  }

  /*
    state = {  employeeData : [
        {
            "id" : "1",
            "firstName" : "Jhon",
            "lastName" : "Doe",
            "age " : "20",
            "activeFlag" : true
        },
        {
            "id" : "2",
            "firstName" : "Jane",
            "lastName" : "Doe",
            "age " : "22",
            "activeFlag" : false
        },
        {
            "id" : "3",
            "firstName" : "Mike",
            "lastName" : "Penn",
            "age " : "40",
            "activeFlag" : false
        }
    ]  };

    */

    
    async componentDidMount(){

       const r = await fetch("http://localhost:8081/getAll");
       console.log("R  "+r);
       const b =  await r.json();
       console.log("B  "+b);

       this.setState({ employeeData : b})

       console.log("EmployeeData  "+this.state.employeeData);

   }
   
  

    handleChange = id => {
        console.log("clicked "+id);
        const {employeeData} = this.state;
        console.log("employee Data  "+employeeData);
       
        this.setState(prevState => ({
            employeeData : prevState.employeeData.map( employee => {
                 if(employee.id === id ){
                    return {
                        ...employee,
                        activeFlag:  !employee.activeFlag,
                    }  
                 }

              return    employee;
            })
        }));    
    };

    deleteEmployee = id => {
        console.log("Employee deleted",id)
        this.setState({
            employeeData: [
                ...this.state.employeeData.filter(
                    employee => {
                        return employee.id !== id;
                    }
                )

            ]
        });
    };

    render(){
      

       return( <>
             <NavBar/>
            <Header/>
            <SearchBar/>
            <EmployeeList employeeData={this.state.employeeData} handleChangeProps={this.handleChange} deleteEmployeeProps={this.deleteEmployee}/>
            <Test/>
           
        </>);
    }

  
}

export default MainContainer;

