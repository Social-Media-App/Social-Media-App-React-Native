import React from 'react';
import { 
    Animated, 
    View, 
    StyleSheet, 
    Dimensions, 
    Text, 
    Button } from 'react-native';
import { Icon } from 'react-native-elements';


export default function ActionButtons(){

    return(
        <View style={styles.headerContainer}>
            <View style={styles.socialRow}>
                <View style={styles.socialIcon}>
                    <Icon
                        size={30}
                        type="material"
                        color="black"
                        name='person-add'
                        onPress={() => console.log('send follow')}
                    />
                </View>
                <View style={styles.socialIcon}>
                    <Icon
                        size={30}
                        type="material"
                        color="black"
                        name="error"
                        onPress={() => console.log('get about')}
                    />
                </View>
                <View style={styles.socialIcon}>
                    <Icon
                        size={30}
                        type="material"
                        color="black"
                        name="email"
                        onPress={() => console.log('send msg')}
                    />
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: 10,
      },
    socialIcon: {
        marginLeft: 20,
        marginRight: 20
      },
      socialRow: {
          marginTop: 10,
        flexDirection: 'row',
      },
});

