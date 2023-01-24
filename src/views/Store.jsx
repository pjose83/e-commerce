import { StyleSheet, Text, View } from 'react-native'
import { ProductFilters, Products, Searcher } from '../components/store'
import { colors, StyledText } from '../theme'

export const Store = () => {
  return (
    <View style={styles.container}>
      <StyledText
        big
        color={colors.primary}
        koulenRegular
      >
        FIND THE BEST PRODUCT FOR YOU
      </StyledText>
      <Searcher />
      <ProductFilters />
      <Products />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-evenly",
    backgroundColor: colors.light
    // alignItems: "center",
  }
})