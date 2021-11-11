import React , {Component} from "react"

class Test extends Component{

    state = {
        clients : []
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:8081/getAll');
        const body = await response.json();
        this.setState({clients: body});

        console.log(" testing Test :: "+this.state.clients);
        console.log(" testing Test :: "+JSON.stringify(this.state.clients));
    }

    render() {
        const {clients} = this.state;
        return (
            <div>
             
                <div className="App-intro">
                 
                  {clients.map(client =>
                      <div key={client.id}>
                        {client.firstName} ({client.lastName})
                      </div>
                  )}
                </div>
            
            </div>
        );
    }



}

export default Test;