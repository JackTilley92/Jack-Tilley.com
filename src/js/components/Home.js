

import Header from "./Header";
import AppBar from 'material-ui/AppBar';
import AppBarExampleIcon from "./Bar";
import React from 'react';

import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import SwipeableViews from 'react-swipeable-views';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {cyan500} from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui/Tabs';
import ContactUs from './ContactUs';
import Projects from './Projects';
import AboutMe from './AboutMe';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
});
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tabStyle:{
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  appBar: {
    backgroundColor: '#FFFFFF',
  },
  projectsPage: {
    backgroundColor: '#000000',
  },
  tabs: {
    width: '50%',
  },
  banner:{
    alignSelf: 'stretch',
    width: null
  },
  statusBar:{
    backgroundColor: '#000000',
    textAlign: 'center',
    textColor: 'white',
  },
};
export default class NavigationB extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <AppBar title={'JACK TILLEY'} style={styles.appBar} showMenuIconButton={false}>
            <Tabs onChange={this.handleChange} value={this.state.slideIndex} style={styles.tabs}>
                <Tab label="About Me" value={0} style = {styles.tabStyle} />
                <Tab label="Fun" value={1} style = {styles.tabStyle} />
                <Tab label="Tab Three" value={2} style = {styles.tabStyle} />
              </Tabs>
            </AppBar>
            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
              <div>
                  <div>
                    <img  src = 'banner.jpg'style={styles.banner} width = "100%" height = "100%"/>
                  </div>
                  <AppBar title={'Status: Employed'} style={styles.statusBar} showMenuIconButton={false}  titleStyle={{color:'white'}} />
                  <AboutMe />
              </div>
              <div style={styles.slide}>

                //<Projects />

              </div>
              <div style={styles.slide}>
                <ContactUs />
              </div>
            </SwipeableViews>
        </div>
      </MuiThemeProvider>
    );
  }
}
