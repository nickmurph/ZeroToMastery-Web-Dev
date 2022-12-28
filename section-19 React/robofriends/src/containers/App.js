import React from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

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
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (!robots.length){ //robots.length being zero evaluates to false, any length > 0 evalutes to true. Invert it to match the logic
            return <h1 className='tc f1'>Loading</h1>
        }else {
        return (
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
            </div>
        );
        }
    }
}

export default App;