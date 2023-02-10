import { ToastAndroid } from 'react-native'
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client'
import { Form } from '../components/login';

const NEW_ACCOUNT = gql`
  mutation createUser($input: userInput) {
    createUser(input: $input)
  }
`

const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const Register = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const goToLogin = () => navigation.navigate('Login')

  const [createUser, { loading  }] = useMutation(NEW_ACCOUNT)

  const inputs = [
    {
      placeholder: "Name",
      onChangeText: text => setName(text)
    },
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

  const onRegisterSubmit = async () => {
    const validInputs = !name || !email || !password
    if (validInputs) return ToastAndroid.show("All fields are required", ToastAndroid.LONG)
    if (password.length < 6) return ToastAndroid.show("Password must have at least 6 characters", ToastAndroid.LONG)
    if (!validEmail.test(email)) return ToastAndroid.show("Email must be a valid one", ToastAndroid.LONG)

    try {
      const { data } = await createUser({
        variables: {
          input: {
            name,
            email,
            password
          }
        }
      })
      ToastAndroid.show(data?.createUser, ToastAndroid.LONG)
      goToLogin()
    } catch (error) {
      console.log("Error on onRegisterSubmit: ", error.message)
      ToastAndroid.show(error.message, ToastAndroid.LONG)
    }
  }

  return (
    <Form
      title="Create your account"
      redirectText="Already have an account? Log in here"
      redirect={goToLogin}
      submit={onRegisterSubmit}
      submitText="Create and log in"
      inputs={inputs}
      loading={loading}
    />
  )
}