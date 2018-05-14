
import React from "react";
import Chartjs from 'chart.js'
var BarChart = require("react-chartjs").Bar;
import Title from "./Header/Title"
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  contentContainer:{
    display: 'flex',
    marginRight: '12%' ,
    marginLeft: '12%'
  },
  contentSection: {
    paddingTop: 60,
  },
  subHeaderStyle: {
    fontSize: 24,
    color: "#004d46",
    fontWeight: 500
  },
  headerStyle: {
    fontSize: 30,
    color: "#004d46"
  },
  contentText: {
      fontSize: 16,
      paddingBottom: 1
  },
  color: {
    backgroundColor: "#002d29"
  },
  centered:{
    display: 'flex',
    justifyContent: 'center',
    marginRight: '16%' ,
    marginLeft: '16%'
  }
}

const CardExampleExpandable = () => (
  <Card style={styles.color} >
    <CardHeader
      title="CLICK HERE To See Course Modules Completed!"
      subtitle="Computer Applications and Software Engineering - Dublin City University"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions  >
      <a href='http://www.computing.dcu.ie/undergraduate/ca/bsc-computer-applications-dc121'>
        <FlatButton label="Course Website" />
      </a>
    </CardActions>
    <CardText  expandable={true}>
    1st Year:<br/>
    Web Design.<br/>
    Programming 1 & 2.<br/>
    Operating Systems 1.<br/>
    Networks 1.<br/>
    Computer Systems & Hardware.<br/>
    Mathematics.<br/>
    Other.<br/><br/>


    2nd Year:<br/>
    Linear Algebra.<br/>
    Logic.<br/>
    OO Design and Implementation.<br/>
    Data Structures and Algorithms.<br/>
    Systems Analysis.<br/>
    Intro to Databases.<br/>
    Operating Systems 2.<br/>
    Probability & Statistics.<br/>
    Software Testing.<br/>
    Computer Architecture & Assembly Language.<br/>
    Advanced Computer Architectures.<br/><br/>


    3rd Year:<br/>
    Technical Communication Skills.<br/>
    Networks 2.<br/>
    OO Analysis & Design.<br/>
    A.I.<br/>
    Computability & Complexity.<br/>
    Operating Systems 3.<br/>
    Human Computer Interaction.<br/><br/>

    3rd year Project.<br/>
    INTRA<br/><br/>


    4th Year:<br/>
    Software Eng Process,Principles & Methods.<br/>
    Statistical Machine Translation.<br/>
    Search Technologies.<br/>
    Data Warehousing & Data Mining.<br/>
    Graphics and Image Processing.<br/>
    Compiler Construction.<br/>
    4th year Project.<br/>
    </CardText>
  </Card>
);

export default class Skills extends React.Component {
      constructor() {
          super();
      }

      render() {
        var chartData = {
                labels: ["Php",
                        "Javascript",
                        "Java", "C",
                        "C#",
                        "C++",
                        "Haskell",
                        "Prolog",
                        "Visual Basic",
                        "Ruby on Rails",
                        "R",
                        "MATLAB",
                        "MIPS/Assembly",
                        "Python",
                        "HTML/CSS",
                        "SQL"],
                datasets: [{
                    label: '# of Votes',
                    data: [2, 15, 20, 7, 23, 10, 5, 3, 20,7,3,3,10,14,13,16],
                    fillColor: ["rgba(114,147,203,1)",
                                "rgba(225,151,76,1)",
                                "rgba(132,186,91,1)",
                                "rgba(211,94,96,1)",
                                "rgba(128,133,133,1)",
                                "rgba(144,103,167,1)",
                                "rgba(171,104,87,1)",
                                "rgba(204,194,16,1)",
                                "rgba(114,147,203,1)",
                                "rgba(225,151,76,1)",
                                "rgba(132,186,91,1)",
                                "rgba(211,94,96,1)",
                                "rgba(128,133,133,1)",
                                "rgba(144,103,167,1)",
                                "rgba(171,104,87,1)",
                                "rgba(204,194,16,1)",
                                "rgba(225,151,76,1)"],
                    strokeColor: ["rgba(57,106,177,1)",
                                "rgba(218,124,48,1)",
                                "rgba(62,150,81,1)",
                                "rgba(204,37,41,1)",
                                "rgba(83,81,84,1)",
                                "rgba(107,76,154,1)",
                                "rgba(146,36,40,1)",
                                "rgba(148,139,61,1)",
                                "rgba(57,106,177,1)",
                                "rgba(218,124,48,1)",
                                "rgba(62,150,81,1)",
                                "rgba(204,37,41,1)",
                                "rgba(83,81,84,1)",
                                "rgba(107,76,154,1)",
                                "rgba(146,36,40,1)",
                                "rgba(148,139,61,1)",
                                "rgba(218,124,48,1)"],
                    highlightFill: ["rgba(114,147,203,0.5)",
                                "rgba(225,151,76,0.5)",
                                "rgba(132,186,91,0.5)",
                                "rgba(211,94,96,0.5)",
                                "rgba(128,133,133,0.5)",
                                "rgba(144,103,167,0.5)",
                                "rgba(171,104,87,0.5)",
                                "rgba(204,194,16,0.5)",
                                "rgba(114,147,203,0.5)",
                                "rgba(225,151,76,0.5)",
                                "rgba(132,186,91,0.5)",
                                "rgba(211,94,96,0.5)",
                                "rgba(128,133,133,0.5)",
                                "rgba(144,103,167,0.5)",
                                "rgba(171,104,87,0.5)",
                                "rgba(204,194,16,0.5)",
                                "rgba(225,151,76,0.5)"],
                    highlightStroke: ["rgba(57,106,177,0.7)",
                                "rgba(218,124,48,0.7)",
                                "rgba(62,150,81,0.7)",
                                "rgba(204,37,41,0.7)",
                                "rgba(83,81,84,0.7)",
                                "rgba(107,76,154,0.7)",
                                "rgba(146,36,40,0.7)",
                                "rgba(148,139,61,0.7)",
                                "rgba(57,106,177,0.7)",
                                "rgba(218,124,48,0.7)",
                                "rgba(62,150,81,0.7)",
                                "rgba(204,37,41,0.7)",
                                "rgba(83,81,84,0.7)",
                                "rgba(107,76,154,0.7)",
                                "rgba(146,36,40,0.7)",
                                "rgba(148,139,61,0.7)",
                                "rgba(218,124,48,0.7)"],
                    borderWidth: 1
                }]
            }

        var chartOptions =  {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }


          return (
            <div class="MySkills Top level" >
              <a href={'Jack-Tilley-CV-Software-Engineer.pdf'} download>

              <RaisedButton label="Download my CV here!" fullWidth={true} style={styles.color} />

              </a>
              <div class="MySkills" style={styles.contentContainer}>
                <div style={styles.contentSection}>
                  <header style={styles.headerStyle}>
                    Skills
                  </header>
                  <p style={styles.contentText}>
                    My degree in Computer Applications has taught me many languages with the majority of module assignments tasked to us in a new branch of programming.
                    This meant that in order to graduate we needed to become skilled at picking up new languages fast and adapt to the many paradigms of programming taught, be it object oriented or functional programming etc.
                    <br/><br/>
                    My strongest languages are C#, Java and Visual Basic but my main focus lies in Web Development with NodeJS so that I can become a full stack developer.
                    <br/><br/>
                    For those of you interested this website was built from NodeJS with the REACTJS framework.
                  </p>

                  <div className="Skillschart" style = {styles.centered}>
                    <BarChart data={chartData} options={chartOptions} width="850" height="500"/>
                  </div>
                  <header style={styles.headerStyle}>
                    B.Sc. in Computer Applications & Software Engineering
                  </header>
                  <p style={styles.contentText}>
                    My B.Sc. in Computer Applications is a four-year degree that prepared me for a career in software development. It taught me to be able to design and implement software solutions for today's business environment.

                    I learnt how to use techniques from disciplines, such as software engineering, databases, multimedia, computer graphics, artificial intelligence and computer security, to write computer programs that are used in the real world applications in computer games, financial services and mobile phones just to name a few.
                    <br/><br/>
                    The B.Sc. in Computer Applications had a strong practical focus. I learnt how to apply the knowledge gained in the course and they will develop key practical skills. My degree incorporated a six month work placement (INTRA) where I worked in a Dublin Building Information Modelling startup to get me experience in the commercial world.
                    <br/><br/>

                    DCU's B.Sc. in Computer Applications gave me a strong technical education and hands-on experience and setting me on the road to further developing expertise skills in areas such as:
                    <br/>
                    <ul>
                    <li>Artificial Intelligence</li>
                    <li>Software Programming</li>
                    <li>Web Design</li>
                    <li>Data Warehouses and Data Mining</li>
                    <li>Concurrent and Distributed Programming</li>
                    <li>Cryptography</li>
                    <li>Multimedia Technology<br/></li>
                    </ul>

                  </p>
                  <div>
                  <CardExampleExpandable />
                  </div>
                </div>


              </div>
            </div>
          );
      }
  }
