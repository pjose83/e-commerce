import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { TabNavigator } from './src';
import { AppContext } from './src/context/store';

const Stack = createNativeStackNavigator();

export default function App() {
  const { Navigator, Screen } = Stack
  return (
    <AppContext>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar hidden={false} backgroundColor="#000" translucent={true} />
        <NavigationContainer>
          <Navigator>
            <Screen name="TabNavigator" component={TabNavigator} />
          </Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppContext>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
		flex: 1,
		marginTop: StatusBar.currentHeight
	}
})
