/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Create from './Create.js'
import Show from './Show.js'

const Home = () => (
    <div>
        <h2>Welcome</h2>
    </div>
)

class App extends Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Homes</Link></li>
                        <li><Link to="/profile">Show</Link></li>
                        <li><Link to="/edit">Create</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/profile" component={Show}/>
                    <Route path="/edit" component={Create}/>
                </Switch>

            </div>
        );
    }
}
export default App;
