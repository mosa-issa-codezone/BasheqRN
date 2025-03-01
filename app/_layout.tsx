import StoreProvider from "@/store/StoreProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <StoreProvider>
      <Stack>
        <Stack.Screen name="index" />
        {/* <Stack.Screen name="home" /> */}
        {/* <Stack.Screen name="Screen2" /> */}

      </Stack>
    </StoreProvider>
  );
}
