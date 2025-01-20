import { StyleSheet, Text } from "react-native";
import { Screen } from "../Screen";

export function HomePage() {
  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>Hola este es el Home Page</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    width: "100%",
    textAlign: "center",
  },
});
