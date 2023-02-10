import { NativeBaseProvider } from 'native-base'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { AppContext } from './src/context/store'
import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'
import { StackNavigator } from './src/routes'


export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppContext>
        <NativeBaseProvider>
          <SafeAreaView style={styles.safeAreaView}>
            <StatusBar hidden={false} translucent={true} />
            <StackNavigator />
          </SafeAreaView>
        </NativeBaseProvider>
      </AppContext>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
		flex: 1,
		marginTop: StatusBar.currentHeight
	}
})
