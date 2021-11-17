
import React , {Component} from "react"

class SearchBar extends Component{

    state = {
        employee : ""
    };

    onChange = e => {
        console.log(e.target.value)

        this.setState({
            employee : e.target.value
        });
    }

    render(){

        const REACT_VERSION = React.version;
        return(<div className="SearchBar">Search {REACT_VERSION}
            <form>
                <input type="text" placeholder="Search Employee" value={this.state.employee} onChange={this.onChange}/>
                <button>Search</button>
            </form>
        
        
        </div>);
    }
}

export default SearchBar