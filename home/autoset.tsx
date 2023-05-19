import React, {useEffect, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Firebase} from '../utilies/Firebase';
import {getDatabase, ref, onValue, set} from 'firebase/database';
import Color from '../home/Color'
function AutoSet() {
  const [maxquat, setmaxquat] = useState(0);
  const [minquat, setminquat] = useState(0);
  const [maxps, setmaxps] = useState(0);
  const [minps, setminps] = useState(0);
  const [maxquatx, setmaxquatx] = useState(0);
  const [minquatx, setminquatx] = useState(0);
  const [maxpsx, setmaxpsx] = useState(0);
  const [minpsx, setminpsx] = useState(0);
  useEffect(() => {
    const dbRef = ref(getDatabase(Firebase), '/ConfigAuto');
    onValue(dbRef, snapshot => {
      const data = snapshot.val();
      setmaxquatx(data.maxquat);
      setminquatx(data.minquat);
      setmaxpsx(data.maxphunsuong);
      setminpsx(data.minphunsuong);
    });
  }, []);
  const postdata = () => {
    const dbRef = ref(getDatabase(Firebase), '/ConfigAuto');
    const data = {
      maxquat: maxquat,
      minquat: minquat,
      maxphunsuong: maxps,
      minphunsuong: minps,
    };
    set(dbRef, data)
      .then(() => console.log('Post successfully'))
      .catch(error => console.log('Error posting data: ', error));
  };
  const auto = () => {
    const dbRef = ref(getDatabase(Firebase), '/Auto');
    const data = {
      auto: 1,
    };
    set(dbRef, data)
      .then(() => console.log('Post successfully'))
      .catch(error => console.log('Error posting data: ', error));
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.TopView}>
        <View style={styles.DataView}>
          <Text style={[styles.Data, {borderBottomWidth: 2, width: '60%'}]}>
            Nhiệt độ
          </Text>
          <Text style={styles.Data}>{maxquatx}</Text>
          <Text style={styles.Data}>{minquatx}</Text>
        </View>
        <View style={styles.DataView}>
          <Text style={[styles.Data, {borderBottomWidth: 2, width: '60%'}]}>
            Độ ẩm
          </Text>
          <Text style={styles.Data}>{maxpsx}</Text>
          <Text style={styles.Data}>{minpsx}</Text>
        </View>
      </View>
      <View style={styles.MainView}>
        <View style={styles.SetValue}>
          <Text style={styles.Text}>Max Nhiệt độ</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="  Nhập giá trị"
            keyboardType="numeric"
            onChangeText={number => {
              if (number === '') {
                setmaxquat(0);
              } else {
                setmaxquat(parseInt(number));
              }
            }}
          />
        </View>
        <View style={styles.SetValue}>
          <Text style={styles.Text}>Min Nhiệt độ</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="  Nhập giá trị"
            keyboardType="numeric"
            onChangeText={number => {
              if (number === '') {
                setminquat(0);
              } else {
                setminquat(parseInt(number));
              }
            }}
          />
        </View>
        <View style={styles.SetValue}>
          <Text style={styles.Text}>Max Độ ẩm</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="  Nhập giá trị"
            keyboardType="numeric"
            onChangeText={number => {
              if (number === '') {
                setmaxps(0);
              } else {
                setmaxps(parseInt(number));
              }
            }}
          />
        </View>
        <View style={styles.SetValue}>
          <Text style={styles.Text}>Min Độ ẩm</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="  Nhập giá trị"
            keyboardType="numeric"
            onChangeText={number => {
              if (number === '') {
                setminps(0);
              } else {
                setminps(parseInt(number));
              }
            }}
          />
        </View>
      </View>
      <View style={styles.BotView}>
        <TouchableOpacity
          style={styles.But}
          onPress={() => [postdata(), auto()]}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: Color.yellow}}>
            Set
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default AutoSet;
const styles = StyleSheet.create({
  TopView: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  DataView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Data: {
    flex: 2,
    width: '100%',
    height: '20%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: Color.black,
  },
  MainView: {
    flex: 4,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  SetValue: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
  Text: {
    width: '80%',
    justifyContent: 'flex-start',
    fontSize: 20,
    color: 'black',
  },
  TextInput: {
    width: '80%',
    borderTopWidth: 2,
    borderColor: Color.line,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#57c5b6',
  },
  BotView: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  But: {
    width: '20%',
    height: '46%',
    marginBottom: 5,
    borderRadius: 20,
    backgroundColor: Color.lightRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
