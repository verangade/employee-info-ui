
import React , {Component} from "react"

class SearchBar extends Component{

    state = {
        employeeFname : "hello",
        employeeLname : "hello2"
    };

    onChange = e => {
        console.log(e.target.value)

        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render(){

        const REACT_VERSION = React.version;
        return(<div className="SearchBar">Search {REACT_VERSION}
            <form>
                <input type="text" name="employeeFname" placeholder="Search Employee" value={this.state.employeeFname} onChange={this.onChange}/>
                <button>Search By First Name</button> <br/>
                <input type="text" name="employeeLname" placeholder="Search Employee by Age" value={this.state.employeeLname} onChange={this.onChange}/>
                <button>Search By Last Name</button>
            </form>
        
        
        </div>);
    }
}

export default SearchBar