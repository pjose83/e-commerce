import { StyleSheet, Text, View } from 'react-native'

export const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})