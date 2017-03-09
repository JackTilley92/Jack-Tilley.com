import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Flexbox from 'flexbox-react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

const styles = {
  color: {
    backgroundColor: "#002d29"
  },
  contentSection:{
    paddingTop: 60,
  },
  headerStyle: {
    fontSize: 30,
    color: "#004d46",
  },
  subHeaderStyle: {
    fontSize: 24,
    color: "#004d46",
    fontWeight: 500
  },
  contentText: {
    fontSize: 16,
    paddingBottom: 10,
  },
  wrap: {
    display: 'flex',
    flexWrap: 'no-wrap'
  },
  nowrap: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  contentContainer:{
    display: 'flex',
    marginRight: '25%' ,
    marginLeft: '25%',
  },
  centered:{
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
  },
  paperExp:{
    height: 150,
    width: 150,
    marginRight: 20,

    marginBottom: 15,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'white',
  },
  paper:{
    height: 150,
    width: 150,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'white',
  },
  testPaper:{
    height: 150,
    width: 150,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15,
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
  flatExp:{
    backgroundColor: "#002d29",
    color: "#FFFFFF"
  },
  flatContainer:{
    padding: 1
  }
}
const AboutMe = () => (

  <div class="row">
    <div class="About Me" style={styles.contentContainer}>
      <div style={styles.contentSection}>
        <header style={styles.headerStyle}>
          About Me
        </header>
        <h1 style={styles.subHeaderStyle}>Intro</h1>
        <p style={styles.contentText}>
          I graduated from Dublin City University in November of 2016 with a BSc in Computer Applications and Software Engineering.
          Given an in-depth knowledge of software engineering and the practical skills to apply the knowledge to develop software.
          This includes an understanding of object oriented and functional programming in design and implementation, operating systems, databases,
          networking along with knowledge of the lifecycles and methodologies required to develop and maintain quality software.
        </p>
      </div>
    </div>

    <div class="Links" style={styles.centered}>
      <div>
        <header style={styles.headerStyle}>
          Useful Links
        </header>
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


    <div class="Commercial Experience" style={styles.contentContainer}>
      <div style={styles.contentSection}>
        <header style={styles.headerStyle}>
          Commercial Experience
        </header>

        <h1 style={styles.subHeaderStyle}>SQS</h1>
        <div style={styles.wrap}>
          <p style={styles.contentText}>
            <Paper style={styles.paperExp} zDepth={5}>
              <a href="https://www.sqs.com">
                <img src="SQS.png" style={styles.icon} />
              </a>
            </Paper>
            <div style={styles.nowrap}>
              Ballzey is a startup developing live sports quiz apps.
              Working alongside a developer writing automated tests on iOS and android devices using javascript with Node.js.
              Tests carried out using Appium, a test automation framework using a selenium based server.
              I was re-hired by Ballzey to write more tests in Python and utilize them with Amazon Web Services Device Farm.
              My time at Ballzey was valuable as I was working alongside a highly skilled engineer that I learned many skills from.
              We worked as a team helping each other in order to accomplish our objectives.

              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              <br />
              <a href="https://www.sqs.com">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000'}} />
              </a>
            </div>
          </p>
        </div>

        <h1 style={styles.subHeaderStyle}>Ballzey</h1>
        <div style={styles.wrap}>
          <p style={styles.contentText}>
            <Paper style={styles.paperExp} zDepth={5}>
              <a href="http://www.crowdfunder.co.uk/ballzey">
                <img src="Ballzey.png" style={styles.icon} />
              </a>
            </Paper>
            <div style={styles.nowrap}>
              Ballzey is a startup developing live sports quiz apps.
              Working alongside a developer writing automated tests on iOS and android devices using javascript with Node.js.
              Tests carried out using Appium, a test automation framework using a selenium based server.
              I was re-hired by Ballzey to write more tests in Python and utilize them with Amazon Web Services Device Farm.
              My time at Ballzey was valuable as I was working alongside a highly skilled engineer that I learned many skills from.
              We worked as a team helping each other in order to accomplish our objectives.

              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              <br />
              <a href="http://www.crowdfunder.co.uk/ballzey">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000'}} />
              </a>
            </div>
          </p>
        </div>
        <h1 style={styles.subHeaderStyle}>INSTACOACH</h1>
        <div style={styles.wrap}>
          <p style={styles.contentText}>
            <Paper style={styles.paperExp} zDepth={5}>
              <a href="http://www.instacoach.com/">
                <img src="instacoach.jpeg" style={styles.icon} />
              </a>
            </Paper>
            <div style={styles.nowrap}>
              Instacoach is a startup developing a communication and video analysis platform that helps sports federations, academies, coaches and players to interact.
              Working with an overseas team from Ukraine developing apps in Ruby on Rails.
              I got to work with a Postgres SQL database as well as gaining experience managing of a git repository with Linux.
              I chose to try web development as my chosen field at Instacouch since I had minimal experience with this side of programming in college.
              This was great as I prefer environments in which I get hands on experience with technologies I have had no history with so that I can increase my knowledge and skills.
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              <br />
              <a href="http://www.instacoach.com/">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000'}} />
              </a>
            </div>
          </p>
        </div>
        <h1 style={styles.subHeaderStyle}>The DPW-Group</h1>
        <div style={styles.wrap}>
          <p style={styles.contentText}>
            <Paper style={styles.paperExp} zDepth={5}>
              <a href="http://www.dpw-group.com/">
                <img src="DPW.jpg" style={styles.icon} />
              </a>
            </Paper>
            <div style={styles.nowrap}>
              The DPW Group is a startup using Building Information Modeling to aid the Irish construction industry.
              Developing plugins for the Autodesk 3D modeling architecture software product Revit.
              Development included work in C# with Revit’s API using Visual Studio.
              I was a solo developer at this company which was a startup focused on building information modelling.
              The DPW Group preferred to adopt an agile approach to development implementing SCRUM as our methodology of choice.
              This required me to have strong communication skills in discussing progress with my employer.
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              <br />
              <a href="http://www.dpw-group.com/">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000'}} />
              </a>
            </div>
          </p>
        </div>
        <h1 style={styles.subHeaderStyle}>The Aviva Stadium</h1>
        <div style={styles.wrap}>
          <p style={styles.contentText}>
            <Paper style={styles.paperExp} zDepth={5}>
              <a href="http://www.avivastadium.ie/">
                <img src="Aviva.jpg" style={styles.icon} />
              </a>
            </Paper>
            <div style={styles.nowrap}>
              Working at the Aviva stadium during football and rugby matches. Roles included escorting attendees to their seats and pitch security.
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              <br />
              <a href="http://www.avivastadium.ie/">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000'}} />
              </a>
            </div>
          </p>
        </div>
        <h1 style={styles.subHeaderStyle}>TCM Controls</h1>
        <div style={styles.wrap}>
          <p style={styles.contentText}>
            <Paper style={styles.paperExp} zDepth={5}>
              <a href="http://www.tcmcontrols.com/">
                <img src="TCM.jpg" style={styles.icon} />
              </a>
            </Paper>
            <div style={styles.nowrap}>
              Handled incoming and outgoing deliveries as well as providing general assistance to staff.
              This was a summer job taken during school and college. I worked with TCM at various times during each year assisting them whenever they were understaffed.
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              ........................ ........................... ........................... ........................... ........................... ...........................
              <br />
              <a href="http://www.tcmcontrols.com/">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000'}} />
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>


    <div style={styles.centered}>
      <Card align="center">
        <CardMedia overlay={<CardTitle title="Graduation" subtitle="12th of November, 2016" />} >
          <img src="dcuSign.jpg" />
        </CardMedia>
        <CardText style={styles.color}>
          Hello World, this is an example
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
        </CardText>
        <CardActions style={styles.color}>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    </div>
    <div class="Interests" style={styles.contentContainer}>
      <div style={styles.contentSection}>
        <header style={styles.headerStyle}>
          Interests
        </header>
        <p style={styles.contentText}>
          I graduated from Dublin City University in November of 2016 with a BSc in Computer Applications and Software Engineering.
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
          ........................ ........................... ........................... ........................... ........................... ...........................
        </p>
      </div>
    </div>
    <div style={styles.centered}>
      <div>
        <img className="interests" src = 'interests.jpg' />
      </div>
    </div>
  </div>

);

export default AboutMe;
