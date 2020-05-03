import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawyer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawyerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleClicked = () => {
        this.setState((previousState) => {
            return {showSideDrawer: !previousState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleClicked} />
                <SideDrawyer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawyerClosedHandler} />
                <div>Toolbar, SideDrawyer, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;