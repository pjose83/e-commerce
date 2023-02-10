import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header } from '../components/header/Header'
import { Login, Register } from '../views'
import { TabNavigator } from './TabNavigator'

const Stack = createNativeStackNavigator()

const { Navigator, Screen } = Stack

export const StackNavigator = () => (
  <NavigationContainer>
    <Navigator initialRouteName='Login' screenOptions={{ header: () => <Header />}}>
      <Screen name="TabNavigator" component={TabNavigator} />
      <Screen name="Login" component={Login} options={{ headerShown: false }}  />
      <Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Navigator>
  </NavigationContainer>
)
