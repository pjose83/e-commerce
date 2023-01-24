import { StyleSheet, Text, View } from 'react-native'

export const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text>UserProfile</Text>
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