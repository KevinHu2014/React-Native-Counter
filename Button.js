'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Vibration,
} = React;
var i = 0;
var Button = React.createClass({ 
	getInitialState: function() {
		return { 
			pressing: false,
			press: false,
			ThePress: false,
		} 
	},
	_onPressIn: function() { 
		this.setState({pressing: true});
		i++;
		//Vibration.vibrate();
	},
	_onPressOut: function() { 
		this.setState({pressing: false});
	},
	onPressIn: function() { 
		this.setState({press: true});
		if(i>=1){i--;}
	},
	onPressOut: function() { 
		this.setState({press: false});
	},
	on_PressIn: function() { 
		this.setState({ThePress: true});
		i = 0;
	},
	on_PressOut: function() { 
		this.setState({ThePress: false});
	},
	render: function() { 
	return (
		<View style={styles.container}>
			<Text style={styles.large}>
				{' '}
				{parseInt(i/1000)}
				{parseInt((i%1000)/100)}
				{parseInt((i%100)/10)}
				{parseInt((i%10)/1)}
				{' '}
			</Text>
			<Text style={styles.blank}></Text>
	  		<TouchableHighlight
				onPressIn={this._onPressIn}
			 	onPressOut={this._onPressOut}
			 	style={styles.touchable}>
	    		<View style={styles.button_L}>
	      			<Text style={styles.welcome_L}>
						{this.state.pressing ? '十' : '十'} 
					</Text>
	    		</View>
	  		</TouchableHighlight>
	  		<Text style={styles.blank}></Text>
	  		<TouchableHighlight
				onPressIn={this.onPressIn}
			 	onPressOut={this.onPressOut} 
			 	style={styles.touchable}>
	    		<View style={styles.button_M}>
	      			<Text style={styles.welcome_M}>
						{this.state.press ? '一' : '一'} 
					</Text>
	    		</View>
	  		</TouchableHighlight>
	  		<Text style={styles.blank}></Text>
	  		<TouchableHighlight
				onPressIn={this.on_PressIn}
			 	onPressOut={this.on_PressOut} 
			 	style={styles.touchable}>
	    		<View style={styles.button_S}>
	      			<Text style={styles.welcome_S}>
						{this.state.ThePress ? 'R' : 'R'} 
					</Text>
	    		</View>
	  		</TouchableHighlight>
		</View>
	); }
});
var styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  	backgroundColor: '#A9A9A9',
	},
  large: {
  	fontSize: 100,
  	margin: 10,
  	borderRadius: 50,
  	color: '#FFFFFF',
  	backgroundColor: '#000000',
  },
  blank:{
  	margin: 10,
  },	 
  welcome_L: {
    fontSize: 100,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  welcome_M: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  welcome_S: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  touchable: {
    borderRadius: 100
  },
  button_L: {
    backgroundColor: '#4F4F4F',
    borderRadius: 100,
    height: 200,
    width: 200,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  button_M: {
    backgroundColor: '#4F4F4F',
    borderRadius: 100,
    height: 100,
    width: 100,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  button_S: {
    backgroundColor: '#FF0000',
    borderRadius: 100,
    height: 50,
    width: 50,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
 });
module.exports = Button;