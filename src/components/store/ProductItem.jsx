import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { boxRadius, colors, StyledText } from '../../theme'

const { width, height } = Dimensions.get("window")

export const ProductItem = ({ image, title, price }) => {
  return (
    <TouchableOpacity activeOpacity={.4} style={styles.productCard}>
      <Image
        style={styles.productImg}
        source={{ uri: image }}
      />
      <StyledText
        numberOfLines={2}
        latoRegular
        color={colors.tertiary}
        regular
      >
        {title}
      </StyledText>
      <StyledText
        koulenRegular
        big
        color={colors.primary}
      >
        ${price}
      </StyledText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  productCard: {
    width: width * .4,
    height: height * .28,
    backgroundColor: colors.fourth,
    padding: 10,
    justifyContent: "space-between",
    ...boxRadius
  },
  productImg: {
    width: "100%",
    height: height * .16,
    resizeMode: "contain",
    alignSelf: "center",
    ...boxRadius
  }
})