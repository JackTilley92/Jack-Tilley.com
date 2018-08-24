import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import firebase from 'firebase';
import FlatButton from 'material-ui/FlatButton';

const styles = {
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
  <header style={styles.headerStyle}>FUN </header>
);

const Interests = () => (
  <div>
    <div class="Interests" style={styles.contentContainer}>
      <div style={styles.contentSection}>
        <header style={styles.headerStyle}>Interests</header>
        <p>
          When I am not coding, I am an avid pop culture fanatic. I go to the
          cinema weekly with 38,733 Spotify minutes of listening to music and
          podcasts in 2018 alone. I play tennis and football or basketball when
          I can find the people. Since I was a child I did not have a television
          in the house so I found a skill in art that has led me to designing
          marketting material for friends and businesses as well as tattoos and
          portraits. My musical weapon of choice is guitar although I have
          dabbled in DJing.
        </p>
      </div>
    </div>
    <div style={styles.centered}>
      <div>
        <img
          className="interests"
          style={{ marginBottom: 30 }}
          src="interests.jpg"
        />
      </div>
    </div>
  </div>
);

const FeaturedProject = () => (
  <p> The space is saved for technical side projects. The kittens are at work to add side projects.</p>
);

const ProjectList = () => (
  <p> Since I promised fun. Here is some art that I do.</p>
);


export default class Projects extends React.Component {


  render() {
    return(
    <div>
    <div class="Fun" style={styles.contentContainer}>
      <div style={styles.contentSection}>
  			<Header />
  			<FeaturedProject />
  			<div style={{marginBottom: 20}}>
  			  <img style={styles.centered} src = 'TechSupport.png'  width = '40%' height = '40%' />
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
    <div>
      <Interests/>
    </div>
    </div>
);
}
}
