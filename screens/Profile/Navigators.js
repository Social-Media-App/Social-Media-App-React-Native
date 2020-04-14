import React from 'react';
import { Animated, View, StyleSheet, Dimensions,Text, Button } from 'react-native';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'red' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = {color: 'red', fontSize: 5,  width: Dimensions.get('window').width};

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  //will add set routes when implement follow functionality
  const [routes] = React.useState([
    { key: '0', title: 'Posts', count: '10'},
    { key: '1', title: 'following', count: '20'},
    { key: '2', title: 'followers', count: '500'},

  ]);

  //set screen for eachtab
  const renderScene = SceneMap({
    //will add followers and following screeens
    0: FirstRoute,
    1: FirstRoute,
    2: FirstRoute,
  });
 
  const _renderLabel = props => ({ route, focused }) => {
    const color = (index == route.key) ? 'black': 'grey'; // set selected tab color to black
        
    return (
      <View>
        <Animated.Text style={[styles.tabLabelText, { color }]}>
          {route.count}
        </Animated.Text>
        <Animated.Text style={[styles.tabLabelNumber, { color }]}>
          {route.title}
        </Animated.Text>
      </View>
    )
  }

  //customise bar
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'transparent' }} // make indicator down bar unvisible
      style={styles.test}
      pressOpacity={0.8}
      renderLabel={_renderLabel(props)}
    />
  );

  return (
    <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}        
    />
  );
}

const styles = StyleSheet.create({
    tabLabelNumber: {
        color: 'gray',
        fontSize: 12.5,
        textAlign: 'center',
      },
      tabLabelText: {
        color: 'black',
        fontSize: 15.5,
        fontWeight: '600',
        textAlign: 'center',
      },
  scene: {
    flex: 1,
  },
  test: {
      backgroundColor: '#c7c7c7',
  },
  
});