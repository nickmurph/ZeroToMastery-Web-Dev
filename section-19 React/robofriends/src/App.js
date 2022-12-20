import React from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css'


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}) //replace {robots: users} with {} to test the empty robots loading page
        )
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return <h1 className='tc f1'>Loading</h1>
        }else {
        return (
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <CardList robots={filteredRobots}/>
            </div>
        );
        }
    }
}

export default App;