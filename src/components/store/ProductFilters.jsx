import { useContext, useState } from 'react'
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Pressable,
  View
} from 'react-native'
import { store } from '../../context/store'
import { colors, StyledText } from '../../theme'

const filterBy = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"]

export const ProductFilters = () => {
  const { effects : { setfilterBtn } } = useContext(store)
	const [filterActive, setFilterActive] = useState("all")

  const setSearcher = (item) => () => {
		setfilterBtn(item)
    setFilterActive(item)
  }

  const activeStyle = (item) => {
		return {
			...styles.filter,
			...(filterActive === item ? styles.activeFilter : {})
		}
	}

  const renderFilters = ({ item }) => (
		<Pressable
      style={styles.filterBtn}
			onPress={setSearcher(item)}
    >
			<StyledText
        latoRegular
        regular
        capitalize
        extraStyles={activeStyle(item)}
      >
				{item}
			</StyledText>
		</Pressable>
	)

  return (
    <View style={styles.filtersList}>
			<FlatList
				horizontal
				data={filterBy}
				renderItem={renderFilters}
				keyExtractor={item => item}
				showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ margin: 5 }} />}
			/>
		</View>
  )
}

const styles = StyleSheet.create({
  filtersList: {
		flexDirection: 'row'
	},
  activeFilter: {
    fontWeight: "bold",
    borderBottomColor: colors.tertiary,
    borderBottomWidth: 1
  }
})