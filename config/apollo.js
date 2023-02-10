import { ApolloClient, InMemoryCache } from "@apollo/client"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createHttpLink, HttpLink } from "apollo-link-http"
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "http://192.168.1.40:4000/graphql/"
})

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("token")

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})

export default client