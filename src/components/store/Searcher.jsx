import { useContext } from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import { store } from '../../context/store'
import { boxRadius, colors } from '../../theme'
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window")

export const Searcher = () => {
  const { input, effects: { setInput, handleSearch, getProducts } } = useContext(store)

  const clearInput = () => {
    setInput("")
    getProducts()
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={text => setInput(text)}
        onSubmitEditing={() => handleSearch(input)}
        value={input}
        keyboardType="default"
        selectionColor={colors.primary}
      />
      {input
        ? <Feather name="x" size={20} color={colors.tertiary} onPress={clearInput} />
        : <></>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height * .05,
    backgroundColor: colors.fourth,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    ...boxRadius
  },
  input: {
    width: "90%",
    fontSize: 14,
    color: colors.tertiary
  }
})