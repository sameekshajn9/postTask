import React, { Component } from 'react';
import { getHeight } from '../../theme';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions';
import { styles } from './style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }

  render() {
    const { userName, password } = this.state;
    return (
      <SafeAreaView>
        <View style={styles.parentWrapper}>
          <Image
            source={require('../../../assets/background.png')}
            style={{
              position: 'absolute',
              flex: 1,
              zIndex: -1
            }}
            resizeMode={'center'}
          />
          <View style={styles.LoginCard}>
            <View style={styles.addDetailWrapper}>
              <Text style={styles.labelText}>USERNAME</Text>
              <TextInput
                value={userName}
                onChangeText={value => this.setState({ userName: value })}
                placeholder={'user0'}
                style={styles.textInputWrapper}
              />
              <View style={styles.inputLine} />
            </View>
            <View style={styles.addDetailWrapper}>
              <Text style={styles.labelText}>PASSWORD</Text>
              <TextInput
                value={password}
                secureTextEntry={true}
                placeholder={'P@ssword0'}
                style={styles.textInputWrapper}
                onChangeText={value => this.setState({ password: value })}
              />
              <View style={styles.inputLine} />
            </View>
            <Text
              style={[
                styles.labelText,
                { fontSize: 10, alignSelf: 'center', marginTop: getHeight(20) }
              ]}
            >
              FORGOT YOUR PASSWORD?{' '}
            </Text>
            <TouchableOpacity onPress={this.handleOnButtonClick}>
              <View style={styles.loginButton}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.connectWithWrapper}>
              <View style={styles.lineView} />
              <Text style={{ fontSize: 10, color: '#737273' }}>
                {' '}
                OR CONNECT WITH{' '}
              </Text>
              <View style={styles.lineView} />
            </View>
            <View style={styles.signMethods}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/facebook.png')}
                  style={{ height: 45, width: 45 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/google.png')}
                  style={{ height: 45, width: 45, marginLeft: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  handleOnButtonClick = () => {
    const { navigation } = this.props;
    const { userName, password } = this.state;
    const { loginUserAction } = this.props;
    loginUserAction({ userName, password });
  };
}

const mapActionToProps = dispatch => {
  return {
    loginUserAction: payload => dispatch(loginUser(payload))
  };
};

export default connect(null, mapActionToProps)(Login);
