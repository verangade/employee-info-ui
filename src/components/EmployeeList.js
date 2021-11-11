import React,{Component} from "react"
import Employee from "./Employee"

class EmployeeList extends Component{
    state = { employeeData : []  }

     async componentDidMount(){
       /* console.log("aaaaaaaaaaa");
         await fetch("http://localhost:8081/getAll")
                        .then(response => response.json())
                        .then(r => { console.log("a"+ JSON.stringify(r)) } )
                        .then( x => { this.setState({ employeeData: x })})
                       // console.log(this.state.employeeData);


                       
                        console.log("vv");
                        console.log(" testing :: "+this.state.employeeData);
                        console.log(" testing :: "+JSON.stringify(this.state.employeeData)); */
                /*
                fetch("http://localhost:8081/getAll")
                .then(r => r.json())
                .then(x => console.log("X  "+x))
                .then(x => { this.setState({employeeData:x})});   
                
                console.log("c  "+this.state.employeeData);
                */
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
                       employeeData.map( x => <li id={x.id}>{x.firstName}</li> )

                   }
                 
                    
                
                
                </ul>

       
        </div>);
    }
}

export default EmployeeList