import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Flexbox from 'flexbox-react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

const styles = {
  center: {
    paddingTop: 20,
    marginBottom: 10,
    width: '100%',
    subtitleColor: "blue"
  },
  color: {
    backgroundColor: "#002d29"
  },
  contentSection:{
    paddingTop: 60,
  },
  headerStyle: {
    fontSize: 30,
  },
  contentText: {
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 40,
  },
  contentContainer:{
    display: 'flex',
    justifyContent: 'center',
    marginRight: '25%' ,
    marginLeft: '25%',
  },
  paperContainer:{
    display: 'flex',
    justifyContent: 'center',
    marginRight: '25%' ,
    marginLeft: '25%',
    paddingBottom: '30',
  },
  paper:{
    height: 150,
    width: 150,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'white',
  },
  icon:{
    padding: 10,
    height: '150px',
    width: '150px',
  },
  flat:{
    backgroundColor: "#002d29",
    color: "#FFFFFF"
  },
  flatContainer:{
    padding: 1
  }
}
const AboutMe = () => (

  <div class="row">
    <div style={styles.contentContainer}>
      <div style={styles.contentSection}>
        <header style={styles.headerStyle}>
          About Me
        </header>
        <p style={styles.contentText}>
          I graduated from Dublin City University in November of 2016 with a BSc in Computer Applications and Software Engineering.
          ...................................................
          ...................................................
          ...................................................
          ...................................................
          ...................................................
          ...................................................
          ...................................................
          ...................................................
        </p>
      </div>
    </div>
    <div style={styles.paperContainer}>
      <Paper style={styles.paper} zDepth={5}>
        <a href="http://www.computing.dcu.ie/undergraduate/ca/bsc-computer-applications-dc121">
          <img src="DCU.jpg" style={styles.icon} />
        </a>
      </Paper>
      <Paper style={styles.paper} zDepth={5}>
        <a href="https://www.linkedin.com/in/jack-tilley-46575759?trk=nav_responsive_tab_profile">
          <img src="linkedin.png" style={styles.icon} />
        </a>
      </Paper>
      <Paper style={styles.paper} zDepth={5}>
        <a href="https://github.com/JackTilley92">
          <img src="GitHub.png" style={styles.icon} />
        </a>
      </Paper>
    </div>

    <div style={styles.contentContainer}>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="REACT" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Java" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Python" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="C#" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="REACT" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Java" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Python" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="C#" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="REACThjghjkhgkjgjkg" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Java" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Python" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="C#" style={styles.flat} />
        </a>
      </div>
    </div>
    <div style={styles.contentContainer}>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="REACT" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Java" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Python" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="C#" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="REACT" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Java" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Python" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="C#" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="REACT" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Java" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="Python" style={styles.flat} />
        </a>
      </div>
      <div style={styles.flatContainer}>
        <a href="https://github.com/JackTilley92">
          <FlatButton label="C#" style={styles.flat} />
        </a>
      </div>
    </div>


    <div style={styles.contentContainer}>
      <Card align="center">
        <CardMedia overlay={<CardTitle title="Graduation" subtitle="12th of November, 2016" />} >
          <img src="dcuSign.jpg" />
        </CardMedia>
        <CardText style={styles.color}>
          Hello World, this is an example
          ...................................................
          ...................................................
          ...................................................
          ...................................................
          ...................................................
          ...................................................
          ...................................................
          ...................................................
        </CardText>
        <CardActions style={styles.color}>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    </div>
    <div style={styles.contentContainer}>
      <div style={styles.contentSection}>
        <header style={styles.headerStyle}>
          Interests
        </header>
        <p style={styles.contentText}>
          I graduated from Dublin City University in November of 2016 with a BSc in Computer Applications and Software Engineering.
        </p>
      </div>
    </div>
    <div style={styles.contentContainer}>
      <div>
        <img className="interests" src = 'interests.jpg' />
      </div>
    </div>
  </div>

);

export default AboutMe;
