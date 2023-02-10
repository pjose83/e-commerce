import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { StyledText, colors, boxRadius } from '../theme'

export const Details = ({ route }) => {
  console.log(route.params)
  const { title, description, image, price } = route.params

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: image }} style={styles.productImg} />
      </View>
      <View>
        <View>
          <StyledText
            latoRegular
            regular
            color={colors.tertiary}
          >
            {title}
          </StyledText>
          <StyledText
            koulenRegular
            color={colors.primary}
            extraStyles={{ fontSize: 22 }}
          >
            ${price}
          </StyledText>
        </View>
        <View>
          <StyledText
            latoBold
            big
            color={colors.tertiary}
          >
            Details
          </StyledText>
          <StyledText
            latoRegular
            regular
            color={colors.tertiary}
          >
            {description}
          </StyledText>
          <StyledText
            latoBold
            big
            color={colors.tertiary}
          >
            Quantity: ""
          </StyledText>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20
  },
  imgContainer: {
    width: "100%",
    height: 300,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center"
  },
  productImg: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    ...boxRadius
  }
})