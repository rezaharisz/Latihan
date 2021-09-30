import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import LatihanComponent from './pages/LatihanComponent';
import Flexbox from './pages/Flexbox';
import Position from './pages/Position';
import StylingComponent from './pages/StylingComponent';
import StateDinamis from './pages/StateDinamis';
import PropsDinamis from './pages/PropsDinamis';
import Communication from './pages/Communication';
import BasicJavaScript from './pages/BasicJavaScript';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';
import Notification from './pages/Notification';
import {Provider} from 'react-redux';
import {store} from './redux';

function App() {
  const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 6000);
  // }, []);

  return (
    <Provider store={store}>
      <View>
        <ScrollView>
          {/* <LatihanComponent /> */}
          {/* <StylingComponent /> */}
          {/* {isShow && <Flexbox />} */}
          {/* <Position /> */}
          {/* <PropsDinamis /> */}
          {/* <StateDinamis /> */}
          {/* <Communication /> */}
          {/* <BasicJavaScript /> */}
          {/* <CallAPIVanilla /> */}
          {/* <CallAPIAxios /> */}
          <LocalAPI />
          {/* <Notification /> */}
        </ScrollView>
      </View>
    </Provider>
  );
}

export default App;
