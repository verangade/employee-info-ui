
import React , {Component} from "react"

class SearchBar extends Component{

    render(){

        const REACT_VERSION = React.version;
        return(<div className="SearchBar">Search {REACT_VERSION}</div>);
    }
}

export default SearchBar