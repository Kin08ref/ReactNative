import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Feather';
import {Firebase,firebase} from '../utilies/Firebase';   //! ???
import auth from '@react-native-firebase/auth';          //! ???
import {
  isValidAccount,
  isValidPassword,
  isValidEmail,
  isValidRePassword,
} from '../utilies/Validation';
function SignUp({navigation}) {
  const [errorEmail, seterrorEmail] = useState('');
  const [errorAccount, seterrorAccount] = useState('');
  const [errorPassword, seterrorPassword] = useState('');
  const [errorRePassword, seterrorRePassword] = useState('');
  const [Email, setEmail] = useState('');
  const [Account, setAccount] = useState('');
  const [Password, setPassword] = useState('');
  const [RePassword, setRePassword] = useState('');
  const isValiddationCheck = () =>
    Email.length > 0 &&
    Account.length > 0 &&
    Password.length > 0 &&
    isValidEmail(Email) == true &&
    isValidAccount(Account) == true &&
    isValidPassword(Password) == true &&
    isValidRePassword(RePassword, Password) == true;
  const [hidden1, sethidden1] = useState(true);
  const [hidden2, sethidden2] = useState(true);
  const [Icon1, setIcon1] = useState('eye-off');
  const changeIcon1 = () => {
    Icon1 === 'eye-off'
      ? (setIcon1('eye'), sethidden1(false))
      : (setIcon1('eye-off'), sethidden1(true));
  };
  const [Icon2, setIcon2] = useState('eye-off');
  const changeIcon2 = () => {
    Icon2 === 'eye-off'
      ? (setIcon2('eye'), sethidden2(false))
      : (setIcon2('eye-off'), sethidden2(true));
  };
  function createUser() {
    firebase.auth().createUserWithEmailAndPassword(
      'jane.doe@example.com',
      'SuperSecretPassword!',
    ).then(() => {
      Alert.alert('User account created & signed in!');
    });
  }
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.mainView}>
      <View style={{marginBottom: 50}}>
        <Text style={styles.Heading}>Đăng ký</Text>
      </View>
      <View style={styles.tag}>
        <View style={styles.InputView}>
          <TextInput
            placeholder="ankien@gamil.com"
            placeholderTextColor="#b2b2b2"
            style={{
              width: '90%',
              height: 52,
              borderWidth: 1.5,
              borderColor: errorEmail == '' ? '#1fb3e9' : '#ff4f35',
              borderRadius: 10,
              paddingLeft: 15,
              marginTop: 25,
              color: 'black',
            }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={text => {
              seterrorEmail(isValidEmail(text) == true ? '' : 'Lỗi định dạng');
              setEmail(text);
            }}
          />
          <Text style={{color: 'red', fontSize: 13, marginTop: 5}}>
            {errorEmail}
          </Text>
          <TextInput
            placeholder="Account"
            placeholderTextColor="#b2b2b2"
            style={{
              width: '90%',
              height: 52,
              borderWidth: 1.5,
              borderColor: errorAccount == '' ? '#1fb3e9' : '#ff4f35',
              borderRadius: 10,
              paddingLeft: 15,
              marginTop: 10,
              color: 'black',
            }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={text => {
              seterrorAccount(
                isValidAccount(text) == true
                  ? ''
                  : 'Không chưa ký tự đặc biệt và trên 5 ký tự',
              );
              setAccount(text);
            }}
          />
          <Text style={{color: 'red', fontSize: 13, marginTop: 5}}>
            {errorAccount}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              height: 52,
              borderWidth: 1.5,
              borderColor: errorPassword == '' ? '#1fb3e9' : '#ff4f35',
              borderRadius: 10,
              paddingLeft: 10,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={{flex: 6}}
              placeholder="Password"
              placeholderTextColor="#b2b2b2"
              secureTextEntry={hidden1}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={text => {
                seterrorPassword(
                  isValidPassword(text) == true ? '' : 'Trên 5 ký tự',
                );
                setPassword(text);
              }}
            />
            <TouchableOpacity style={{flex: 1}} onPress={changeIcon1}>
              <Icon name={Icon1} size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={{color: 'red', fontSize: 13, marginTop: 5}}>
            {errorPassword}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              height: 52,
              borderWidth: 1.5,
              borderColor: errorRePassword == '' ? '#1fb3e9' : '#ff4f35',
              borderRadius: 10,
              paddingLeft: 10,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={{flex: 6}}
              placeholder="Confirm-Password"
              placeholderTextColor="#b2b2b2"
              secureTextEntry={hidden2}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={text => {
                seterrorRePassword(
                  isValidRePassword(text, Password) == true ? '' : 'Error',
                );
                setRePassword(text);
              }}
            />
            <TouchableOpacity style={{flex: 1}} onPress={changeIcon2}>
              <Icon name={Icon2} size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={{color: 'red', fontSize: 13, marginTop: 5}}>
            {errorRePassword}
          </Text>
        </View>
        <View style={styles.ButtonView}>
          <TouchableOpacity
            disabled={isValiddationCheck() == false}
            style={{
              width: '50%',
              height: '40%',
              backgroundColor:
                isValiddationCheck() == true ? '#1c83ee' : '#b2b2b2',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {createUser}}>
            <Text style={styles.ButtonText}>Tạo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#1cb3e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    color: 'yellow',
    fontSize: 43,
    fontWeight: 'bold',
  },
  tag: {
    flexDirection: 'column',
    width: '92%',
    height: 450,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  InputView: {
    flex: 2.5,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justtifyContent: 'center',
  },
  ButtonView: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    bottom: -7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontWeight: 'bold',
    fontSize: 23,
  },
});
export default SignUp;
