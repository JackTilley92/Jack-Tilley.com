import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const styles = {
  center: {
    paddingTop: 10,
    marginBottom: 10,
    width: '100%',
  },
}
const AboutMe = () => (
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
  <div style={styles.center}>

    <Card align="center">
      <CardHeader subtitle="Subtitle" />
      <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} >
        <img src="dcuSign.jpg" />
      </CardMedia>
      <CardText>
        Hello World, this is an example
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
  </div>
  </div>
);

export default AboutMe;
