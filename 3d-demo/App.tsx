import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Model } from "./components/Model";
import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import useControls from "r3f-native-orbitcontrols";

export default function App() {
  const [OrbitControls, event] = useControls();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modelContainer} {...event}>
        <Canvas>
          <OrbitControls enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={["white", 5]} />
          <directionalLight position={[-1, 0, 0]} args={["white", 5]} />
          <directionalLight position={[0, 1, 0]} args={["white", 5]} />
          <directionalLight position={[0, -1, 0]} args={["white", 5]} />
          <directionalLight position={[0, 0, 1]} args={["white", 5]} />
          <directionalLight position={[0, 0, -1]} args={["white", 5]} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Block A</Text>
          <Text style={styles.textPrice}>$800 / Month</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mattis maximus eros, eu ullamcorper ante ullamcorper a. Phasellus
            turpis tellus, tempus at feugiat at, facilisis ac sem.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => console.log("Buy Now")}
          >
            <Text style={styles.textButton}>Rent Now</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  modelContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "space-between",
  },
  textContainer: {
    margin: 20,
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 28,
    color: "#051E47",
    fontWeight: "bold",
  },
  textPrice: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3F6900",
  },
  text: {
    color: "black",
    fontSize: 16,
    textAlign: "justify",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#3F6900",
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginHorizontal: 20,
  },
});
