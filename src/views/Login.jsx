import { useState } from 'react';
import { ToastAndroid } from 'react-native'
import { gql, useMutation } from '@apollo/client'
import { Form } from '../components/login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_AUTH = gql`
  mutation authUser($input: authInput) {
    authUser(input: $input) {
      token
    }
  }
`
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const goToRegister = () => navigation.navigate("Register")
  const goToStore = () => navigation.navigate("TabNavigator")

  const [authUser, { loading }] = useMutation(USER_AUTH)

  const inputs = [
    {
      placeholder: "Email",
      onChangeText: text => setEmail(text)
    },
    {
      placeholder: "Password",
      secureText: true,
      onChangeText: text => setPassword(text)
    }
  ]

  const onLoginSubmit = async () => {
    const validInputs = !email || !password
    if (validInputs) return ToastAndroid.show("All fields are required", ToastAndroid.LONG)
    if (password.length < 6) return ToastAndroid.show("Password must have at least 6 characters", ToastAndroid.LONG)
    if (!validEmail.test(email)) return ToastAndroid.show("Email must be a valid one", ToastAndroid.LONG)

    try {
      const { data } = await authUser({
        variables: {
          input: {
            email,
            password
          }
        }
      })
      const { token } = data.authUser
      await AsyncStorage.setItem("token", token)
      ToastAndroid.show("Authenticated succesfully", ToastAndroid.LONG)
      goToStore()
    } catch (error) {
      console.log("Error on onLoginSubmit: ", error.message)
      ToastAndroid.show(error.message, ToastAndroid.LONG)
    }
  }

  return (
    <Form
      title="E-commerce"
      redirectText="Create account"
      redirect={goToRegister}
      submit={onLoginSubmit}
      submitText="Log in"
      inputs={inputs}
      loading={loading}
    />
  )
}