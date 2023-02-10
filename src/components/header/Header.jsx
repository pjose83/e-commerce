import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors, StyledText } from "../../theme"
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import SwitchSelector from "react-native-switch-selector";

export const Header = () => {
  const navigation = useNavigation()
  const onLogout = () => navigation.navigate("Login")

  const options = [
    { label: "EN", value: "en" },
    { label: "ES", value: "es" },
  ]

  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
        <Feather
          name="log-out"
          size={24}
          color={colors.primary}
        />
        <StyledText
          big
          latoRegular
          color={colors.primary}
        >
          Log out
        </StyledText>
      </TouchableOpacity>
      <SwitchSelector
        options={options}
        style={styles.languageWrapper}
        buttonColor={colors.primary}
        textColor={colors.dark}
        selectedColor={colors.light}
        hasPadding
        backgroundColor={colors.secondary}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center"
  },
  languageWrapper: {
    // flexDirection: "row"
    // flex: 1,
    // backgroundColor: "red",
    width: 150
  },
})
