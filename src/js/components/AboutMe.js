
import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Flexbox from 'flexbox-react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import AppBar from 'material-ui/AppBar';
const styles = {
  color: {
    backgroundColor: "#002d29"
  },
  contentSection: {
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
    marginRight: '25%',
    marginLeft: '25%',
  },
  paperExp:{
    height: 150,
    width: 150,
    marginRight: 20,
    float: 'left',
    marginBottom: 15,
    textAlign: 'center',
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


  statusBar:{
    backgroundColor: '#000000',
    textAlign: 'center',
    textColor: 'white',
  }
}

const AboutMe = () => (

  <div class="Page">
    <img  src = 'banner.jpeg'  width = "100%" height = "100%"/>
    <AppBar title={'Status: Employed'} style={styles.statusBar} showMenuIconButton={false}  titleStyle={{color:'white'}} />
    <div style={styles.centered}>
    <a href={'Jack-Tilley-CV-Software-Engineer.pdf'} download>
      <FlatButton label="Download my CV here!" Primary={true} fullWidth={true} style={{marginTop: 15, color: '#000000'}} />
    </a>
    </div>
    <div class="About Me" style={styles.contentContainer}>
      <div style={styles.contentSection}>
        <header style={styles.headerStyle}>
          About Me
        </header>
        <h1 style={styles.subHeaderStyle}>Intro</h1>
        <p style={styles.contentText}>
          Hi I am Jack,
          <br/><br/>
          I am a software engineer based in Dublin with strong skills in many programming languages across multiple paradigms and the background for delivering applications with the latest technology and robust code keeping with the tech industries high standards.
          This website is of general purpose use but primarily I want to give you an incite into my background and skills. I am only a short time out of college where I studied Computer Applications and Software Engineering at Dublin City University.
          <br/><br/>
          I graduated in 2016 and I have been working to find my place in the industry through a few roles:
          <br/>
          <ul>
          <li>Solo Software Developer at The DPW Group.</li>
          <li>Web Developer at INSTACOACH.</li>
          <li>Solo Test Automation Engineer at Ballzey.</li>
          <li>Technical Engineer (Consultant) at SQS.</li>
          </ul>

          Certifications:
          <ul>
          <li>ISTQB foundation level</li>
          <li>PRINCE 2</li>
          </ul>

          This website is currently under development with the intention of adding technical projects to the "Fun" tab.
          <br/>
          Please find my contact details in the "Contact" tab and download my CV.
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
				SQS is the world's leading specialist in software quality. SQS consultants identify and mitigate business risk in technology led transformations utilizing standardized methodology, industrialized automation solutions, global delivery and deep domain knowledge across multiple industries.
				<br/><br/>
				Completed training in South Africa for a month along with receiving an ISTQB Testing certification.
				<br/><br/>
				SQS provided me with opportunities to become a well rounded technical professional with training in technical and non technical areas.
				Worked as a Technical Test Analyst/Automation Specialist in the Irish banking industry in a banking giant as part of a test team(onshore/offshore).
				<br/><br/><div style={{fontWeight: "bold"}}> Technical Experience:</div>
        <ul>
				<li>SQL</li>
        <li>Excel/VB</li>
        <li>Querysurge</li>
        <li>Teradata/Data warehousing</li>
        <li>JIRA</li>
        <li>Selenium</li>
        </ul>

              <a href="https://www.sqs.com">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000', float: 'right'}} />
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
				<br/><br/>
				Part-time software test automation engineer at Ballzey working in a two-person team developing automated tests in NodeJS(Javascript) using Appium(Selenium API) and the MochaJS testing framework.
				Appium is an automation tool for running scripts and testing native applications and mobile-web applications that allowed me to simulate tests on iOS devices by use of a web driver.
				<br/><br/>
				This position gave me experience working alongside a senior developer writing using React native.
				I utilized skills in git management and issue posting along with manual testing for bugs in the application.
				<br/><br/>
				<div style={{fontWeight: "bold"}}> Further Employment</div>
				Ballzey re-hired me to do further testing in Python to deploy tests on devices using Amazon Web Services' Device Farm for regression and performance testing.

				<br/><br/><div style={{fontWeight: "bold"}}> Technical Experience:</div>
        <ul>
				<li>Appium</li>
				<li>Python</li>
				<li>NodeJS</li>
				<li>React Native</li>
				<li>Git</li>
				<li>Selenium API</li>
				<li>Xcode/MacOS/IOS Development</li>
				<li>AWS Device Farm/Performance Testing</li>
				<li>MochaJS</li>
        </ul>

              <a href="http://www.crowdfunder.co.uk/ballzey">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000', float: 'right'}} />
              </a>
            </div>
          </p>
        </div>
        <h1 style={styles.subHeaderStyle}>INSTACOACH</h1>
        <div style={styles.wrap}>
          <p style={styles.contentText}>
            <Paper style={styles.paperExp} zDepth={5}>
              <a href="http://www.instacoach.com/">
                <img src="instacoach.png" style={styles.icon} />
              </a>
            </Paper>
            <div style={styles.nowrap}>
              Instacoach is a startup developing a communication and video analysis platform that helps sports federations, academies, coaches and players to interact.
              Working with an overseas team from Ukraine developing apps in Ruby on Rails.
              I got to work with a Postgres SQL database as well as gaining experience managing of a git repository with Linux.
			  <br/><br/>
              I chose to try web development as my chosen field at Instacouch since I had minimal experience with this side of programming in college.
              This was great as I prefer environments in which I get hands on experience with technologies I have had no history with so that I can increase my knowledge and skills.


				<br/><br/><div style={{fontWeight: "bold"}}> Technical Experience:</div>
        <ul>
				<li>Ruby on Rails/MVC</li>
				<li>PostgreSQL</li>
				<li>Git</li>
				<li>Linux/Ubuntu</li>
        </ul>
              <a href="http://www.instacoach.com/">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000', float: 'right'}} />
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
              <br/><br/>
			  I was a solo developer at this company which was a startup focused on building information modelling.
              The DPW Group preferred to adopt an agile approach to development implementing SCRUM as our methodology of choice.
              This required me to have strong communication skills in discussing progress with my employer.

				<br/><br/><div style={{fontWeight: "bold"}}> Technical Experience:</div>
        <ul>
				<li>C#</li>
				<li>Visual Studio</li>
				<li>Autodesk's Revit API</li>
				<li>Manual Testing</li>
				<li>Scrum Development/Agile</li>
				<li>Raspberry Pi</li>
        </ul>
              <a href="http://www.dpw-group.com/">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000', float: 'right'}} />
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
              Working at the Aviva stadium during football and rugby matches. Roles included escorting attendees to their seats and pitch security. I utilized communication skills and crowd management in this position.
              <br />
              <a href="http://www.avivastadium.ie/">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000', float: 'right'}} />
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
              <br />
              <a href="http://www.tcmcontrols.com/">
                <FlatButton label="Website" style={{marginTop: 15, color: '#000000', float: 'right'}} />
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
          I graduated from Dublin City University in November of 2016 with a BSc in Computer Applications and Software Engineering. Given an in-depth knowledge of software engineering and the practical skills to apply the knowledge to develop software. This includes an understanding of object oriented and functional programming in design and implementation, operating systems, databases, networking along with knowledge of the lifecycles and methodologies required to develop and maintain quality software.

        </CardText>
        <CardActions style={styles.color}>
          <a href='http://www.computing.dcu.ie/undergraduate/ca/bsc-computer-applications-dc121'>
            <FlatButton label="Computer Applications & Software Engineering" />
          </a>
        </CardActions>
      </Card>
    </div>
    <div class="Interests" style={styles.contentContainer}>
      <div style={styles.contentSection}>
        <header style={styles.headerStyle}>
          Interests
        </header>
        <p style={styles.contentText}>
          When I am not coding, I am an avid pop culture fanatic. I go to the cinema weekly with 38,733 Spotify minutes of listening to music and podcasts in 2018 alone.
          I play tennis and football or basketball when I can find the people. Since I was a child I did not have a television in the house so I found a skill in art that has led me to designing marketting material for friends and businesses as well as tattoos and portraits.
          My musical weapon of choice is guitar although I have dabbled in DJing which I couldn't quite master.
        </p>
      </div>
    </div>
    <div style={styles.centered}>
      <div>
        <img className="interests" style={{marginBottom: 30}} src = 'interests.jpg' />
      </div>
    </div>
  </div>

);

export default AboutMe;
