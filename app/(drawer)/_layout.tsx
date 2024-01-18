import { Ionicons } from "@expo/vector-icons"
import { colorTokens } from "@tamagui/themes"
import Drawer from "expo-router/drawer"

const Layout = () => {
    return (
        <Drawer
            screenOptions={{
                headerShown: true,
                drawerHideStatusBarOnOpen: true,
                drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
                drawerActiveTintColor: "#fff",
                drawerLabelStyle: { marginLeft: -20 }
            }}
        >
            <Drawer.Screen
                name="home"
                options={{
                    title: "Kino yulduz",
                    headerShown: false,
                    drawerIcon: ({ color }) =>
                        <Ionicons
                            name="ios-home"
                            size={22}
                            color={color}
                        />
                }}
            />
            <Drawer.Screen
                name="favorites"
                options={{
                    title: "Sevimlilar",
                    headerShown: false,
                    drawerIcon: ({ color }) =>
                        <Ionicons
                            name="star-outline"
                            size={22}
                            color={color}
                        />
                }}
            />
        </Drawer>
    )
}

export default Layout

