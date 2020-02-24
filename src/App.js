/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

/* Home component */
const Home = () => (
    <div>
        <h2>Welcome</h2>
    </div>
)

const Profile = () => (
    <div>
        <h2>Profile</h2>
    </div>
)

/* Products component */
const Edit = () => (
    <div>
        <h2>Edit</h2>
    </div>
)

/* App component */

class App extends Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Homes</Link></li>
                        <li><Link to="/profile">Category</Link></li>
                        <li><Link to="/edit">Edit</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/edit" component={Edit}/>
                </Switch>

            </div>
        );
    }
}
export default App;
