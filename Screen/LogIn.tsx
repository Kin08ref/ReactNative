import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import {isValidAccount, isValidPassword} from '../utilies/Validation';
function LogIn({navigation}) {
  const [errorAccount, seterrorAccount] = useState('');
  const [errorPassword, seterrorPassword] = useState('');
  const [Account, setAccount] = useState('');
  const [Password, setPassword] = useState('');
  const isValiddationCheck = () =>
    Account.length > 0 &&
    Password.length > 0 &&
    isValidAccount(Account) == true &&
    isValidPassword(Password) == true;
  const [hidden1, sethidden1] = useState(true);
  const [Icon1, setIcon1] = useState('eye-off');
  const changeIcon1 = () => {
    Icon1 === 'eye-off'
      ? (setIcon1('eye'), sethidden1(false))
      : (setIcon1('eye-off'), sethidden1(true));
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
      }}>
      <View style={styles.TopView}>
        <Image
          source={require('../imgs/logoctu.png')}
          style={{
            width: '55%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={styles.BottomView}>
        <Text style={styles.Heading}>Đăng nhập</Text>
        <View style={styles.InputView}>
          <TextInput
            placeholder="Account"
            placeholderTextColor="#fff"
            style={{
              width: '90%',
              borderWidth: 1.5,
              borderColor: errorAccount == '' ? 'white' : '#ff4f35',
              height: 52,
              borderRadius: 10,
              paddingLeft: 15,
              marginTop: 10,
              color: '#fff',
            }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={text => {
              seterrorAccount(
                isValidAccount(text) == true ? '' : 'Trống hoặc Tài khoản sai',
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
              borderColor: errorPassword == '' ? 'white' : '#ff4f35',
              borderRadius: 10,
              paddingLeft: 10,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={{flex: 6}}
              placeholder="Password"
              placeholderTextColor="#fff"
              secureTextEntry={hidden1}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={text => {
                seterrorPassword(
                  isValidPassword(text) == true
                    ? ''
                    : 'Trống hoặc mật khẩu sai',
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
        </View>
        <View style={styles.ButtonView}>


          <TouchableOpacity
            disabled={isValiddationCheck() == false}
            style={{
              width: '50%',
              height: '30%',
              backgroundColor:
                isValiddationCheck() == true ? '#1c83ee' : '#b2b2b2',
              borderRadius: 30,
              borderWidth: 2,
              borderColor: isValiddationCheck() == true ? '#e2d505' : '#b2b2b2',
              marginTop: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              Alert.alert(`Account= ${Account}, \nPassword= ${Password}`);
            }}>
            <Text style={styles.ButtonText}>Đăng nhập</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'space-around',
              marginTop: 12,
            }}>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() =>
                Alert.alert('Trường hợp quên', 'Ráng nhớ lại', [{text: 'Chịu'}])
              }>
              <Text style={{fontSize: 18, color: 'white'}}>Quên</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
              }}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={{fontSize: 18, color: 'yellow', borderBottomWidth:1,borderBottomColor:'white',}}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
          <Text style={{justifyContent: 'flex-end'}}>
            Liên hệ: Ngô Lữ An Kiên 0941601227
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopView: {
    flex: 1.2,
    //marginTop:60,
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomView: {
    flex: 2,
    width: '100%',
    height: '70%',
    backgroundColor: '#1fb3e9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  Heading: {
    color: 'yellow',
    fontSize: 43,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 20,
  },
  InputView: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justtifyContent: 'center',
  },
  ButtonView: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justtifyContent: 'center',
  },
  Button: {
    width: '90%',
    color: '#000',
    height: '20%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    fontWeight: 'bold',
    fontSize: 23,
  },
});
export default LogIn;
