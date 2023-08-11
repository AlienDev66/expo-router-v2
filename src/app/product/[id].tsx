import { Link, useGlobalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Product() {
  const { id } = useGlobalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 44, fontWeight: "700" }}>Produto:{id}</Text>
      <Link href="/" asChild>
        <Button title=" Voltar" />
      </Link>
    </View>
  );
}
