import { Stack } from 'expo-router'

export default function CommandesLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index"/>
        {/* <Stack.Screen name="[id]" /> */}
    </Stack>
  )
}