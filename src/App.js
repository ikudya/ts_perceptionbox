import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfilePage from "./components/ProfilePage/Profile";
import Users from "./components/Users/Users";
import FacebookLogin from 'react-facebook-login';
import {Component} from "react";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin : false
        }
    }
    responseFacebook = (response) =>{
        console.log(response)
        this.setState({
            isLoggedin: true

        })
    }
    render(){
        return (

        this.state.isLoggedin ? <Users/> :

            <div className="buttom">
                <FacebookLogin
                    appId="1186951135473354"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.responseFacebook} />
            </div>
        )
    }

}

export default App;
