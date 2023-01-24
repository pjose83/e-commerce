import { StyleSheet, Text } from 'react-native'
import { useFonts, Lato_300Light, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato'
import { Koulen_400Regular } from '@expo-google-fonts/koulen'
import { colors } from './globalStyles'

export const StyledText = ({
  children,
  latoLight,
  latoRegular,
  latoBold,
  koulenRegular,
  color = colors.tertiary,
  extraStyles,
  small,
  regular,
  big,
  center,
  capitalize,
  numberOfLines=0
}) => {
  const [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_900Black,
    Koulen_400Regular
  })

  if (!fontsLoaded) return <></>

  const textStyles = [
    latoLight && styles.latoLight,
    latoRegular && styles.latoRegular,
    latoBold && styles.latoBold,
    koulenRegular && styles.koulenRegular,
    small && styles.small,
    regular && styles.regular,
    big && styles.big,
    center && styles.center,
    capitalize && styles.capitalize,
    extraStyles,
    { color }
  ]

  return <Text numberOfLines={numberOfLines} style={textStyles}>{children}</Text>
}

const styles = StyleSheet.create({
  latoLight: { fontFamily: "Lato_300Light" },
  latoRegular: { fontFamily: "Lato_400Regular" },
  latoBold: { fontFamily: "Lato_900Black" },
  koulenRegular: { fontFamily: "Koulen_400Regular" },
  small: { fontSize: 14 },
  regular: { fontSize: 16 },
  big: { fontSize: 18 },
  center: { textAlign: "center" },
  capitalize: { textTransform: 'capitalize' }
})