import React , {Component} from 'react';
import { View, Text, Button  ,Animated,
  Image,StyleSheet,
  Easing} from 'react-native';
import { connect } from "react-redux";
import { tryAuth } from "../store/actions/index";
class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.spinValue = new Animated.Value(0);
      }

  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'white' }}>
        <Text>Welcome to Home Screen {this.props.user}</Text>
        <Button
          title="Go to Details" 
          onPress={() => {
          // this.props.navigation.navigate('Settings');
            //this.props.onAuth('Alex');
            this.props.navigation.openDrawer();
          }}
        />
        
      </View>


    );
    // const spin = this.spinValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg']
    // })
    // return (
    //   <View style={styles.container}>
    //     <Animated.Image
    //       style={{
    //         width: 227,
    //         height: 200,
    //         transform: [{rotate: spin}] }}
    //         source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
    //     />
    //   </View>
    // )
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    user: state.places.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: key => dispatch(tryAuth(key))
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);