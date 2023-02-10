import { Link } from 'native-base'
import { StyleSheet } from 'react-native'
import { colors, StyledText } from '../../theme'

export const RedirectLink = ({ onPress, text }) => {
  return (
    <Link
      style={styles.createAccount}
      onPress={onPress}
    >
      <StyledText
        latoRegular
        color={colors.primary}
        big
      >
        {text}
      </StyledText>
    </Link>
  )
}

const styles = StyleSheet.create({
  createAccount: {
    marginTop: 30,
    justifyContent: "center",
    alignSelf: "center"
  }
})
