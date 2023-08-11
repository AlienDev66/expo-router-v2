import { Button } from "@/components/Button";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 44, fontWeight: "700" }}>Home</Text>
      <Link href="/product/5" asChild>
        <Button title="Configurações" />
      </Link>
    </View>
  );
}
