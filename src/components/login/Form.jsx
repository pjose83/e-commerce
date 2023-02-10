import { FormControl } from 'native-base'
import { StyleSheet, View } from 'react-native'
import { colors, StyledText } from '../../theme'
import { Input } from './Input'
import { RedirectLink } from './RedirectLink'
import { SubmitBtn } from './SubmitBtn'

export const Form = ({
  title,
  redirect,
  submit,
  inputs,
  loading,
  redirectText,
  submitText
}) => (
  <View style={ styles.form }>
    <StyledText
      big
      latoBold
      color={colors.primary}
      center
      extraStyles={styles.title}
    >
      {title}
    </StyledText>

    <FormControl>
      <Input inputList={inputs}/>
    </FormControl>

    <SubmitBtn
      loading={loading}
      text={submitText}
      onPress={submit}
    />

    <RedirectLink
      text={redirectText}
      onPress={redirect}
    />
  </View>
)

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 30,
    justifyContent: "center"
  },
  title: {
    fontSize: 32,
    marginBottom: 40
  }
})