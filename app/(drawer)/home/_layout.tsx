import { DrawerToggleButton } from '@react-navigation/drawer'
import { Stack } from 'expo-router'
import { useTheme } from 'tamagui'

const Layout = () => {
  const theme = useTheme()

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.blue7.get()
        },
        headerTintColor: "#fff"
      }}
    >

      <Stack.Screen
        name='index'
        options={{
          title: "Kino yulduz",
          headerLeft: () =>
            <DrawerToggleButton tintColor="#fff" />
        }}
      />

      <Stack.Screen
        name='movie/[id]'
        options={{
          title: "",
          headerBackTitle: "Ortga"
        }}
      />

      <Stack.Screen
        name='tv/[id]'
        options={{
          title: "",
          headerBackTitle: "Ortga"
        }}
      />


    </Stack>
  )
}

export default Layout