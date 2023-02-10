import { Button } from 'native-base'
import { colors, StyledText } from '../../theme'

export const SubmitBtn = ({ onPress, loading, text }) => (
  <Button
    bgColor={colors.primary}
    onPress={onPress}
    _pressed={{ bgColor: "#4398D188" }}
    isLoading={loading}
    isDisabled={loading}
    _loading={{ bgColor: "#4398D188" }}
    _spinner={{ color: colors.primary, size: 25 }}

  >
    <StyledText
      color={colors.light}
      latoRegular
      big
    >
      {text}
    </StyledText>
  </Button>
)
