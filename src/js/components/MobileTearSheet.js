let React = require('react');
let MobileTearSheet = React.createClass({

  propTypes: {
    height: React.PropTypes.number
  },

  getDefaultProps() {
    return {

    };
  },

  render() {

    let styles = {
      root: {
        float: 'left',
        marginBottom: 24,
        marginRight: 24,
        marginLeft: 104,
        fontColor: 'white',
        backgroundColor: '#813772',
        width: 960,

      },

      container: {
        height: this.props.height,
        overflow: 'hidden'

      },

      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        width: 360
      }
    };

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = MobileTearSheet;
