import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Firebase} from '../utilies/Firebase';
import {getDatabase, ref, onValue, set} from 'firebase/database';
import Color from './Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PopupView from '../utilies/PopupView';
import Confirm from '../utilies/Confirm'
/*type ItemData = {
  id: string;
  nhietdo: string;
  doam01: string;
};
const DATA: ItemData[] = [
  {
    id: 1;
    nhietdo: Data[2];
    doam01: string;
  },
];*/
import {getApps}  from 'firebase/app';
const apps = getApps(); if (apps.length > 0) { console.log('Firebase connected successfully'); } 
else { console.log('Firebase not connected'); }


function Home() {
const [temp, settemp] = useState('');
const [doam01, setdoam01] = useState('');
const [kl01, setkl01] = useState('');
const [doam02, setdoam02] = useState('');
const [kl02, setkl02] = useState('');
const [isPopup, setisPopup] = useState(false);
const PopupVisible = (bool:any) => {
  setisPopup(bool);
};
const Get1 = () => {
    const dbRef = ref(getDatabase(Firebase), '/01');
    onValue(dbRef, snapshot => {const data = snapshot.val();
      setdoam01(data.doam);
      setkl01(data.kl);
    });
  }
const Get2 =  () => {
    const dbRef = ref(getDatabase(Firebase), '/02');
    onValue(dbRef, snapshot => {
      const data = snapshot.val();
      settemp(data.temp);
      setdoam02(data.doam);
      setkl02(data.kl);
    });
  }
function GET() {
    Get1();
    Get2();
    const dbRef = ref(getDatabase(Firebase));
    onValue(dbRef, snapshot => {
      const data = snapshot.val();
      settemp(data.temp);
      console.log("GET successfull");
    });
  }
  const DATA = [
    {
      id: 1,
      nhietdo: temp,
      doam: doam01,
      kl: kl01,
    },
    {
      id: 2,
      nhietdo: temp,
      doam: doam02,
      kl: kl02,
    },
    {
      id: 3,
      nhietdo: temp,
      doam: 54,
      kl: 90,
    },
    {
      id: 4,
      nhietdo: temp,
      doam: 69,
      kl: 50,
    },
    {
      id: 5,
      nhietdo: temp,
      doam: 71,
      kl: 190,
    },
    {
      id: 6,
      nhietdo: temp,
      doam: 56,
      kl: 71,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View
        style={styles.flatlist}>
        <View style={styles.nameborder0}>
          <Text style={[styles.text, {color: Color.black,fontSize:30}]}>
            {item.id}
          </Text>
        </View>
        <View style={{flex: 2}}>
          <TouchableOpacity
            style={[
              styles.nameborder,
              {
                flexDirection: 'row',
                backgroundColor:
                  item.doam < 55 || item.doam > 70
                    ? Color.warning
                    : Color.primary,
              },
            ]}>
            <Text style={styles.text}numberOfLines={1}
              ellipsizeMode='tail'>Độ ẩm: {item.doam}</Text>
            {/* <Text
              style={[styles.text, {width: item.doam>=100?'19%': item.doam<=10 ?'7%':'12%'}]}
              >
              
            </Text> */}
            <Text style={styles.text}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.nameborder,
              {
                flexDirection: 'row',
                backgroundColor: item.kl > 70 ? Color.sell : Color.primary,
              },
            ]}>
            <Text
              style={[
                styles.text,
                {color: item.kl > 70 ? Color.red : '#f8fdfe'},
              ]}numberOfLines={1}
              ellipsizeMode="clip">
              Khối lượng: {item.kl} 
            </Text>
            {/* <Text
              style={[
                styles.text,
                {color: item.kl > 70 ? Color.red : '#f8fdfe', width: item.kl>=100?'19%':item.kl<=10 ? '7%':'12%'},
              ]}
              >
              
            </Text> */}
            <Text
              style={[
                styles.text,
                {color: item.kl > 70 ? Color.red : '#f8fdfe'},
              ]}>
              Kg
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        <Image
          source={require('../imgs/heologo.jpg')}
          style={{
            width: '20%',
            resizeMode: 'contain',
          }}
        />
        <Text style={{fontSize: 24, color: Color.white}}> Nông trại heo</Text>
        <Text style={{fontSize: 24, color: Color.yellow}}> Thông Minh</Text>
      </View>

      {/* <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          borderBottomWidth: 1,
        }}> */}
      <ImageBackground
        source={require('../imgs/homepage.jpg')}
        resizeMode="stretch"
        style={{
          flex: 0.5,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'baseline',
          borderBottomWidth: 1,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            marginLeft: 10,
            top: -5,
            flex: 8,
          }}>
          Nhiệt độ: {temp} ℃
        </Text>
        <TouchableOpacity
          style={{
            marginLeft: 10,
            flex: 1,
            flexDirection: 'row-reverse',
          }}
          onPress={GET}>
          <MaterialIcons name="autorenew" color="black" size={31} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 10,
            flex: 1,
            flexDirection: 'row-reverse',
          }}
          onPress={() => PopupVisible(true)}>
          <MaterialIcons name="auto-fix-high" color="black" size={31} />
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="slide"
          visible={isPopup} // nRequestClose={()=>PopupVisible(false)}
        >
          <PopupView getdata={GET} PopupVisible={PopupVisible} />
        </Modal>
        {/* </View> */}
      </ImageBackground>
      <View style={[styles.mainView]}>
        <FlatList
          numColumns={2}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Color.mauxanhotren,
  },
  mainView: {
    flex: 8,
    width: '100%',
    backgroundColor: Color.maunentrang,
  },
  flatlist: {
    width: '41%',
    margin: 17,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: Color.tag, //'#00efbd',AFD3E2
  },
  title: {
    fontSize: 32,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f8fdfe',
  },
  nameborder0: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  nameborder: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
});
