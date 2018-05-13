import React from "react";

import Title from "./Header/Title";
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';




const styles = {
  contentContainer:{
    display: 'flex',
    marginRight: '5%' ,
    marginLeft: '5%'
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
  }
}

var data = [
	{
		value: 300,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Red"
	},
	{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Green"
	},
	{
		value: 100,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Yellow"
	}
]

export default class ContactUs extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
        <div>
        <a href={'Jack-Tilley-CV-Software-Engineer.pdf'} download>

        <RaisedButton label="Download my CV here!" fullWidth={true} style={{color: '#000000'}} />

        </a>

        <div class="ContactMe" style={styles.contentContainer}>
            <div style={styles.contentSection}>
            <header style={styles.headerStyle}>
              Contact Me
            </header>
            <h1 style={styles.subHeaderStyle}>Email</h1>
            <p style={styles.contentText}>
              Jack.tilley2@mail.dcu.ie
            </p>
            <h1 style={styles.subHeaderStyle}>Phone</h1>
            <p style={styles.contentText}>
              <div style={{fontWeight: "bold"}}> Mobile</div>
              +353 86 8613572
              <div style={{fontWeight: "bold"}}> Home</div>
                01-6680340
            </p>
            <h1 style={styles.subHeaderStyle}>Address</h1>
            <p style={styles.contentText}>
              5 Sandymount Avenue, D4, Dublin, Ireland
            </p>

        </div>
        </div>

        </div>


    );
  }
}
