import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' }, // Hide tab bar for quiz flow
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Quiz',
        }}
      />
    </Tabs>
  );
}