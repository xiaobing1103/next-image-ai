import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { StatusBar, Platform } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/(tabs)");
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#25292e");
      StatusBar.setTranslucent(false);
    }
  }, []);
  return (
    <Stack>
      <StatusBar barStyle="light-content" backgroundColor="#25292e" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
