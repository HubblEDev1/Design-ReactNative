import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { MyStyle } from './src/screen/MyStyle';
import { Styles } from './src/theme/appTheme';

export const App = () => {
  return(
    <SafeAreaView style={Styles.principalScreen}>
      <MyStyle/>
    </SafeAreaView>
  )
}