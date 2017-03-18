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


const styles2 = {
  projectsPage:{
    backgroundColor: '#000000',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15
  }
}

class Projects extends React.Component {
  /*constructor(props){
    super(props);
  }
  componentDidMount(){
    //Fetch the most recent post
    firebase.database().ref('/Blog/Post').on("value", (snapshot) => {
      console.log(snapshot.val()[Object.keys(snapshot.val())[0]]);
      this.setState({
        post: snapshot.val()[Object.keys(snapshot.val())[0]]
      });
    }, (error) => {
      console.log(error);
    });
  }*/
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
