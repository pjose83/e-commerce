import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Cart, Favorites, Store, UserProfile } from "../views";
import { colors } from "../theme";

const { height } = Dimensions.get("window")

const Tab = createBottomTabNavigator();

const routes = [
  { name: "Store", component: Store, icon: "store" },
  { name: "Favorites", component: Favorites, icon: "heart" },
  { name: "Cart", component: Cart, icon: "shopping-cart" },
  { name: "UserProfile", component: UserProfile, icon: "user" }
]

export const TabNavigator = () => {
  const { Navigator, Screen } = Tab

  return (
    <Navigator
      initialRouteName="Store"
      screenOptions={{
        tabBarStyle: styles.navBar,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#8EC1E3",
        headerShown: false
      }}
    >
      {routes.map(({ name, component, icon }) => (
        <Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => <FontAwesome5 name={icon} size={30} color={color} />,
          }}
          // listeners={{
          //   tabPress: name === "Posts" ? goTop : null
          // }}
        />
      ))}
    </Navigator>
  )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: colors.light,
    paddingHorizontal: 10,
    height: height * .08,
    borderTopColor: colors.primary,
    borderTopWidth: 2
  }
})