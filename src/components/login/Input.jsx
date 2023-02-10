import { Input as NativeInput, Stack } from 'native-base';
import { StyleSheet } from 'react-native'
import { colors } from '../../theme';

export const Input = ({ inputList }) => (
  <Stack style={styles.inputWrapper}>
    {inputList?.map(({ placeholder, secureText, onChangeText }) => (
      <NativeInput
        style={styles.input}
        key={placeholder}
        size="lg"
        placeholder={placeholder}
        secureTextEntry={secureText}
        variant="underlined"
        isRequired
        focusOutlineColor={colors.fourth}
        placeholderTextColor={colors.tertiary}
        onChangeText={onChangeText}
      />
    ))}
  </Stack>
)

const styles = StyleSheet.create({
  input: {
    marginTop: 20
  },
  inputWrapper: {
    marginBottom: 50
  }
})