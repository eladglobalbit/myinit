import React , {Component} from 'react';
import { View, Text, Button } from 'react-native';



class DetailsScreen extends Component {
    constructor(props){
        super(props);
      }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }  
}

export default DetailsScreen;