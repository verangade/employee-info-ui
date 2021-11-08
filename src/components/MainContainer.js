import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import Header from "./Header"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"


class MainContainer extends Component {

    state = {  employeeData : [
        {
            "id" : "1",
            "firstName" : "Jhon",
            "lastName" : "Doe",
            "age " : "20",
        },
        {
            "id" : "2",
            "firstName" : "Jane",
            "lastName" : "Doe",
            "age " : "22",
        },
        {
            "id" : "3",
            "firstName" : "Mike",
            "lastName" : "Penn",
            "age " : "40",
        }
    ]  };

    render(){
      

       return( <>
             <NavBar/>
            <Header/>
            <SearchBar/>
            <EmployeeList employeeData={this.state.employeeData}/>
           
           
        </>);
    }

  
}

export default MainContainer;

