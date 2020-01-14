/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, StatusBar, Alert} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {Button} from 'react-native-elements';

const AppThree = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>App3</Text>
        <Button title="Say hello" onPress={() => Alert.alert('hi!')}></Button>
      </SafeAreaView>
    </>
  );
};

export default AppThree;
