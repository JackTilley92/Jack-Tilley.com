import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import styles from './Home'
import firebase from 'firebase';
import FlatButton from 'material-ui/FlatButton';

const styles2 = {
  projectsPage:{
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15
  },
   contentContainer:{
    display: 'flex',
    marginRight: '25%' ,
    marginLeft: '25%',
  },
   headerStyle: {
    fontSize: 30,
    color: "#004d46",
    justifyContent: 'center',
    	display: 'flex',
  },
   centered:{
	display: 'flex',
    justifyContent: 'center',
  },
  contentSection: {
    paddingTop: 60,
  }

}

const Header = () => (
  	<header style={styles2.headerStyle}>FUN </header>
);

const FeaturedProject = () => (
  <p> The space is saved for technical side projects. The kittens are at work to add side projects.</p>
);

const ProjectList = () => (
  <p> Since I promised fun. Here is some art that I do.</p>
);

const ProjectsList = () => (
  <MobileTearSheet>
    <List>
      <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
      <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
      <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
      <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
    </List>
  </MobileTearSheet>
);

const Projects = () => (

    <div class="Fun" style={styles2.contentContainer}>
      <div style={styles2.contentSection}>
  			<Header />
  			<FeaturedProject />
  			<div style={{marginBottom: 20}}>
  			  <img style={styles2.centered} src = 'TechSupport.png'  width = '40%' height = '40%' />

  			</div>
  			<div>
    			<ProjectList />
  			</div>
  			<div>
  			  <img  src = 'Art1.jpg'  width = "50%" height = "50%"/>
  			  <img  src = 'Art2.jpg'  width = "50%" height = "50%"/>
  			  <img  src = 'Art3.jpg'  width = "50%" height = "50%"/>
  			  <img  src = 'Art4.jpg'  width = "50%" height = "50%"/>
  			</div>
        <a href={'Night Run V1.0.zip'} download>
          <div class="FlatButton1" style = {styles.centered}>
            <FlatButton label="NightRun Game" Primary={true} fullWidth={true} style={{marginTop: 15, color: '#000000' }}  />
          </div>
        </a>
  		</div>
  	</div>
);
export default Projects;



/*
class Projects extends React.Component {
  render() {

        <MobileTearSheet>
          <div style ={styles2.projectsPage}>
          <List>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          </List>
              </div>
        </MobileTearSheet>
    }

}

export default Projects;
*/
