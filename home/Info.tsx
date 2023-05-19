import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Color from './Color';
const Info = () => {
  const DATA = [
    {
      id: 1,
      path: require('../imgs/snniu.jpg'),
      background: require('../imgs/sndo.jpg'),
      hoten: 'Phạm Nguyễn Hoàng Huy',
      mssv: 'B2016700',
      khoa: 'Tự Động Hóa',
    },
    {
      id: 2,
      path: require('../imgs/snnguyen.jpg'),
      background: require('../imgs/snvang.jpg'),
      hoten: 'Phan Trung Nguyên',
      mssv: 'B2016720',
      khoa: 'Tự Động Hóa',
    },
    {
      id: 3,
      path: require('../imgs/snkhoi.jpg'),
      background: require('../imgs/snxanhduong.jpg'),
      hoten: 'Đào Đăng Khôi',
      mssv: 'B2016709',
      khoa: 'Tự Động Hóa',
    },
    {
      id: 4,
      path: require('../imgs/snhuy.jpg'),
      background: require('../imgs/snhuong.jpg'),
      hoten: 'Lưu Quốc Huy',
      mssv: 'B2016699',
      khoa: 'Tự Động Hóa',
    },
    {
      id: 5,
      path: require('../imgs/snkien.jpg'),
      background: require('../imgs/snden.jpg'),
      hoten: 'Ngô Lữ An Kiên',
      mssv: 'B2016711',
      khoa: 'Tự Động Hóa',
    },
    {
      id: 6,
      path: require('../imgs/snnhut.jpg'),
      background: require('../imgs/snxanhla.jpg'),
      hoten: 'Nguyễn Minh Nhựt',
      mssv: 'B2016724',
      khoa: 'Tự Động Hóa',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{width: '100%', flexDirection: 'row', marginVertical: 10}}>
        <ImageBackground
          source={item.background}
          resizeMode="stretch"
          style={[
            {
              flex: 1,
              flexDirection: 'row',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <View style={{flex: 3}}>
            <Text
              style={[styles.Text, {fontSize: 20}]}
              numberOfLines={1}
              ellipsizeMode="clip">
              Tên: {item.hoten}
            </Text>
            <Text style={styles.Text} numberOfLines={1} ellipsizeMode="clip">
              MSSV: {item.mssv}
            </Text>
            <Text style={styles.Text} numberOfLines={1} ellipsizeMode="clip">
              Khoa: {item.khoa}
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={item.path}
              style={{
                flex: 1,
                aspectRatio: 1,
                height: 90,
                right: 20,
                borderWidth: 2,
                borderColor: 'black',
                borderRadius: 100,
                marginVertical: 3,
              }}
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.Container}>
      <View style={styles.list_view}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>
    </View>
  );
};
export default Info;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  flatlist: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 2,
    marginVertical: 10,
    width: '85%',
    flexDirection: 'row',
  },
  list_view: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    margin: 1,
  },
  Text: {
    marginLeft: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.darkGray,
  },
});
