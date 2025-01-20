import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Para la maayoria de casos de uso Stack es mejor, porque ya tiene cierta estructura
          predefinida para volver hacia atras, animaciones como las nativas, etc */}
      <Stack
        screenOptions={{
          headerTitle: "", // aca podria ir el titulo
          // headerLeft: () => <Logo />,
          // headerRight: () => {
          //   return (
          //     <Link asChild href="/info">
          //       <Pressable>
          //         <InfoIcon size={40} color="black" />
          //       </Pressable>
          //     </Link>
          //   );
          // },
        }}
      />
      {/* <Slot /> -> se usa para mayor personalizacion entre las transiciones y demas*/}
    </View>
  );
}
