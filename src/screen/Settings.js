import React , {Component} from 'react';
import { View, Text, Button ,TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import { LoginManager } from 'react-native-fbsdk';
import { tryAuth } from "../store/actions/index";
import  {GoogleSignin} from 'react-native-google-signin'
class Settings extends Component{
    constructor(props){
        super(props);
      }
      componentDidMount() {
        this.setupGoogleSignin();
      }
    
      googleAuth() {
        GoogleSignin.signIn()
          .then((user) => {
            console.log(user);
          })
          .catch((err) => {
            console.log('WRONG SIGNIN', err);
          })
          .done();
      }
    
      async setupGoogleSignin() {
        try {
          await GoogleSignin.hasPlayServices({ autoResolve: true });
          await GoogleSignin.configure({
            iosClientId: '947384054859-4s08cqi6tchs9tr8377mnd16sb1akkks.apps.googleusercontent.com',
            offlineAccess: false
          });
    
          const user = await GoogleSignin.currentUserAsync();
          console.log(user);
        }
        catch (err) {
          console.log("Google signin error", err.code, err.message);
        }
      }

      fbAuth() {
        LoginManager.logInWithReadPermissions(["public_profile"]).then(
          function(result) {
            console.log(result)
            if (result.isCancelled) {
              console.log("Login cancelled");
            } else {
              console.log(
                "Login success with permissions: " +
                  result.grantedPermissions.toString()
              );
            }
          },
          function(error) {
            console.log("Login fail with error: " + error);
          }
        );
      }
  render() {
    return (
      <View>
      <TouchableOpacity onPress={this.fbAuth.bind(this)}>
        <Text>Login with Facebook</Text>
      </TouchableOpacity>
              <TouchableOpacity onPress={this.googleAuth.bind(this)}>
          <Text>Login with Google</Text>
        </TouchableOpacity>
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


export default connect(mapStateToProps,mapDispatchToProps)(Settings);