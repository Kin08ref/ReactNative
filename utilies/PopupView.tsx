import React, { useEffect, useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
	Image,ImageBackground
} from 'react-native';
import {Slider} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../home/Color';
import {Firebase} from '../utilies/Firebase';
import {getDatabase, ref, onValue, set} from 'firebase/database';
import Confirm from '../utilies/Confirm'
const PopupView = (props : any) => {

	const [configdoam1, setconfigdoam1] = useState(0);
	const [configkl1, setconfigkl1] = useState(0);
	const [configdoam2, setconfigdoam2] = useState(0);
	const [configkl2, setconfigkl2] = useState(0);
	function reload() {
	props.getdata()
}
  useEffect(() => {
    const dbRef = ref(getDatabase(Firebase), '/Config');
    onValue(dbRef, snapshot => {
      const data = snapshot.val();
      setconfigdoam1(data.quat1);
      setconfigkl1(data.ps1);
      setconfigdoam2(data.quat2);
      setconfigkl2(data.ps2);
    });
  }, []);

const postdata = () => {
  const dbRef = ref(getDatabase(Firebase), '/Config');
  const data = {
    quat1: configdoam1,
    ps1: configkl1,
    quat2: configdoam2,
    ps2: configkl2,
  };
  set(dbRef, data)
    .then(() => console.log('Post successfully'))
    .catch(error => console.log('Error posting data: ', error));
};
  const auto = () => {
    const dbRef = ref(getDatabase(Firebase), '/Auto');
    const data = {
      auto: 0,
    };
    set(dbRef, data)
      .then(() => console.log('Post successfully'))
      .catch(error => console.log('Error posting data: ', error));
  };
const ClosePopup = (bool) =>{
	props.PopupVisible(bool);
	}

  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <View
          // source={require('../imgs/heoquyenru.jpg')}
          // resizeMode="contain"
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20}}>Điều chỉnh thông số</Text>
        </View>
      </View>
      <View style={styles.MainView}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <Text style={{flex: 1, left: 48, fontSize: 23}}>Quạt 1</Text>
          <Text
            style={{flex: 1, right: -100, fontSize: 23}}
            numberOfLines={1}
            ellipsizeMode="clip">
            {configdoam1}
          </Text>
        </View>
        <Slider
          style={{width: '70%', height: 40}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#A6D0DD"
          maximumTrackTintColor="#F6BA6F"
          step={1}
          value={configdoam1}
          //thumbTouchSize={{width: 10, height: 10}}
          trackStyle={{height: 7, borderRadius: 25}}
          thumbTintColor="#6DA9E4"
          thumbStyle={{width: 25, height: 25}}
          onValueChange={value => {
            setconfigdoam1(value);
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <Text style={{flex: 1, left: 50, fontSize: 23}}>Phun Sương 1</Text>
          <Text
            style={{flex: 1, right: -100, fontSize: 23}}
            numberOfLines={1}
            ellipsizeMode="clip">
            {configkl1}
          </Text>
        </View>
        <Slider
          style={{width: '70%', height: 40}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#A6D0DD"
          maximumTrackTintColor="#F6BA6F"
          step={1}
          value={configkl1}
          //thumbTouchSize={{width: 10, height: 10}}
          trackStyle={{height: 7, borderRadius: 25}}
          thumbTintColor="#6DA9E4"
          thumbStyle={{width: 25, height: 25}}
          onValueChange={value => {
            setconfigkl1(value);
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <Text style={{flex: 1, left: 48, fontSize: 23}}>Quạt 2</Text>
          <Text
            style={{flex: 1, right: -100, fontSize: 23}}
            numberOfLines={1}
            ellipsizeMode="clip">
            {configdoam2}
          </Text>
        </View>
        <Slider
          style={{width: '70%', height: 40}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#A6D0DD"
          maximumTrackTintColor="#F6BA6F"
          step={1}
          value={configdoam2}
          //thumbTouchSize={{width: 10, height: 10}}
          trackStyle={{height: 7, borderRadius: 25}}
          thumbTintColor="#6DA9E4"
          thumbStyle={{width: 25, height: 25}}
          onValueChange={value => {
            setconfigdoam2(value);
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{flex: 1, left: 50, fontSize: 23}}>Phun Sương 2</Text>
          <Text
            style={{flex: 1, right: -100, fontSize: 23}}
            numberOfLines={1}
            ellipsizeMode="clip">
            {configkl2}
          </Text>
        </View>
        <Slider
          style={{width: '70%', height: 40}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#A6D0DD"
          maximumTrackTintColor="#F6BA6F"
          step={1}
          value={configkl2}
          //thumbTouchSize={{width: 10, height: 10}}
          trackStyle={{height: 7, borderRadius: 25}}
          thumbTintColor="#6DA9E4"
          thumbStyle={{width: 25, height: 25}}
          onValueChange={value => {
            setconfigkl2(value);
          }}
        />
      </View>
      <View style={styles.Bot}>
        <TouchableOpacity
          style={[
            styles.LeftView,
            {backgroundColor: Color.gray, borderRightWidth: 2},
          ]}
          onPress={() => ClosePopup(false)}>
          <Text style={{color: 'black'}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.RightView, {backgroundColor: '#C0EEE4'}]}
          onPress={() => [ClosePopup(false), postdata(), auto()]}>
          <Text style={{color: 'black'}}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PopupView;
const styles = StyleSheet.create({
  container: {
    width: '82%',
    height: '50%',
    left: '9%',
    top: '25%',
    borderWidth: 2,
    backgroundColor: '#F8F988',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Top: {
    flex: 1,
    width: '100%',
  },
  MainView: {
    flex: 5.7,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9E9E',
  },
  Bot: {
    flex: 1,
    flexDirection: 'row',
    babackgroudColor: 'red',
    borderTopWidth: 3,
  },
  LeftView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
