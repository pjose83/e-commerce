import { useContext, useEffect } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  View
} from 'react-native'
import { store } from '../../context/store'
import { colors } from '../../theme'
import { ProductItem } from './ProductItem'

const { width, height } = Dimensions.get('window')

export const Products = () => {
  const { showSpinner, products, filterBtn, effects: { getProducts } } = useContext(store)

  useEffect(() => { getProducts() }, [filterBtn])

  const renderProducts = ({ item }) => {
    const { price, title, image, description } = item
    const intPrice = parseInt(price)

    return (
      <ProductItem
        image={image}
        title={title}
        price={intPrice}
        description={description}
      />
    )
  }

  return (
    <View style={styles.list}>
      {showSpinner
        ? <ActivityIndicator size="large" color={colors.primary} />
        : <FlatList
            horizontal
            refreshing
            data={products}
            renderItem={renderProducts}
            keyExtractor={({ id }) => id}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
          />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    width: "100%"
  },
})