import React, { Component } from 'react'; 
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactUs from './ContactComponent';
import MenuPage from './MenuComponent';
import { Fade } from 'react-animation-components'


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Fade in>
                    <Header/>
                    <Switch>
                        <Route path= '/home' component={Home} /> 
                        <Route exact path= '/contactus' component={ContactUs} /> 
                        <Route exact path= '/menu' component={MenuPage} /> 
                        <Redirect to='/home'/>
                    </Switch> 
                    <Footer/>
                </Fade>
             
            </div>
        );
    }
}

export default Main;