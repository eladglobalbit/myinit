import React , {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from "react-redux";
import { tryAuth } from "../store/actions/index";
class UserDetail extends Component{
    constructor(props){
        super(props);
      }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'white' }}>
        <Text>User detalis {this.props.user}</Text>
        <Button
          title="Go to Details" 
          onPress={() => {
             this.props.navigation.navigate('Settings');
            // this.props.onAuth('Alex');
          }}
        />
      </View>
    );
  }  
}

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


export default connect(mapStateToProps,mapDispatchToProps)(UserDetail);