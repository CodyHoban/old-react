import React, { Component } from 'react' 
// { Component } is to shorten the extends React.Component

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'starting value' };
    }

    render() {
        console.log(this.state.value);
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={(event) => this.setState({ term: event.target.value })} 
                />
            </div> 
        ); 
    }
}

export default SearchBar;

// whenever a class based components state is changed it causes the
// component to be rerendered.