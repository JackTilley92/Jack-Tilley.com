
import Header from "./Header";
import AppBar from 'material-ui/AppBar';
import AppBarExampleIcon from "./Bar";
import React from 'react';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import SwipeableViews from 'react-swipeable-views';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui/Tabs';
import ContactUs from './ContactUs';
import Products from './Products';
import ProductsMenu from './ProductsMenu';
let imgUrl = 'template.png';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  root: {

    backgroundImage: 'url('+ imgUrl + ') noRepeat center center fixed',
    backgroundSize: 'cover',
    overflow: 'hidden'
  },
  font:{
    fontSize: 40,
    paddingTop: 30,
    fontColor: 'white',
  },
  tabStyle:{
    backgroundColor: '#FFFFFF',
  },
};
export default class TabsExampleControlled extends React.Component {

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
          <Tabs
              onChange={this.handleChange}
              value={this.state.slideIndex}
            >
              <Tab label="Tab One" value={0} style = {styles.tabStyle} />
              <Tab label="Tab Two" value={1} style = {styles.tabStyle} />
              <Tab label="Tab Three" value={2} style = {styles.tabStyle} />
            </Tabs>
            <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={this.handleChange}
            >
              <div>
                <h2 style={styles.headline}>Tabs with slide effect</h2>
                  <ProductsMenu />
              </div>
              <div style={styles.slide}>
                  <Products />
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
