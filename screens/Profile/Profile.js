import React, { Component , useState} from 'react';
import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Icon } from 'react-native-elements';
import TabViewExample from '../../screens/Profile/Navigators';
import ActionButtons from '../../screens/Profile/ActionButtons';

export default function Profile(){

  //rendering the header component
  const renderContactHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.userRow}>
          <Image
            style={styles.userImage}
            source={require('../../assets/sietama.png')}
          />
          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>UserName</Text>
          </View>
          <View style={styles.userBioRow}>
            <Text style={styles.userBioText}>BIO</Text>
          </View>
        </View>
        <View style={styles.socialRow}>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#3B5A98"
              name="facebook-with-circle"
              onPress={() => console.log('place here the facebook profile link')}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#56ACEE"
              name="twitter-with-circle"
              onPress={() => console.log('place here the twitter profile link')}
            />
          </View>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#DD4C39"
              name="google--with-circle"
              onPress={() => console.log('place here the g+ profile link')}
            />
          </View>
        </View>
      </View>
    )
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {renderContactHeader()}
        <ActionButtons />
        <TabViewExample />
        </View>
      </View>
    </ScrollView>
  );

}


const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
    },
    headerContainer: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      marginBottom: 10,
      marginTop: 45,
    },
    socialIcon: {
      marginLeft: 20,
      marginRight: 20
    },
    socialRow: {
        marginTop: 10,
      flexDirection: 'row',
    },
    scroll: {
      backgroundColor: '#FFF',
    },
    sceneContainer: {
      marginTop: 10,
    },
    userBioRow: {
      marginLeft: 40,
      marginRight: 40,
    },
    userBioText: {
      color: 'gray',
      fontSize: 13.5,
      textAlign: 'center',
    },
    userImage: {
      borderRadius: 60,
      height: 60,
      marginBottom: 10,
      width: 60,
    },
    userNameRow: {
      marginBottom: 10,
    },
    userNameText: {
      color: '#5B5A5A',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    userRow: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 12,
    },
  })


