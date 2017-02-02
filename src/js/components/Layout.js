
import Header from "./Header";
import AppBar from 'material-ui/AppBar';
import AppBarExampleIcon from "./Bar";
import React from 'react';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
  bg: {
    backgroundColor: '#000000',
    color: 'white'
  },
  font:{
    fontSize: 40,
    paddingTop: 30,
    fontColor: 'white',
  },
  white:{
    backgroundColor: '#FFFFFF',
  }
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        slideIndex: 1,
      };
    }

    handleChange(value){
         console.log("Tab is changing to ",value);
          this.setState({
            slideIndex: value,
          });
      };

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.bg}>
          <figure>
          </figure>
          <Tabs value={this.state.slideIndex} onChange={this.handleChange}>
            <Tab label="Jack" value={1}  style = {{backgroundColor: '#882601'}}>
              <div>
                <h2 style={styles.headline}>Controllable Tab A</h2>
                  <ProductsMenu />
              </div>
            </Tab>
            <Tab label="Projects" value={2} style = {{backgroundColor: '#882601'}}>
              <div>
                <h2 style={styles.headline}>Controllable Tab B</h2>
                  <Products />
              </div>
            </Tab>
            <Tab label="Blog" value={3} style = {{backgroundColor: '#882601'}}>
              <div>
                <ContactUs />
              </div>
            </Tab>
          </Tabs>
        </div>
      </MuiThemeProvider>
    );
  }
}
