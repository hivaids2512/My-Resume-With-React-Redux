import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AppAvatar from '../../containers/sign-in/AppAvatar'
import Divider from 'material-ui/Divider';
import { browserHistory } from "react-router";

export default class AppToolBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.handleProfileClick = this.handleProfileClick.bind(this)
    this.handleSettingsClick = this.handleSettingsClick.bind(this)
  }

  handleChange = (event, index, value) => this.setState({value});

  handleLogoutClick (event) {
    localStorage.clear()
    browserHistory.push('/signin')
  }

  handleProfileClick (event) {
    browserHistory.push('/profile')
  }

  handleSettingsClick (event) {
    browserHistory.push('/settings')
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="My Resume" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton label="Create Broadcast" primary={true} />
          <AppAvatar/>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem onTouchTap={this.handleProfileClick} primaryText="Profile" />
            <MenuItem onTouchTap={this.handleSettingsClick} primaryText="Settings" />
            <Divider />
            <MenuItem onTouchTap={this.handleLogoutClick} primaryText="Logout" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}