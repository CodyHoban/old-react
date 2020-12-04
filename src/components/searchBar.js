import React, { Component } from 'react' 
// { Component } is to shorten the extends React.Component

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'starting value' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)} 
                />
            </div> 
        ); 
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

// whenever a class based components state is changed it causes the
// component to be rerendered.