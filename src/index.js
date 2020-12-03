import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/searchBar'

const API_KEY = 'AIzaSyDS7G15Yx2HAx6MavmatWzD7K3H2daoTYc';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));