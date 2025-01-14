import { StyleSheet, View, Text } from "react-native";
import { Media } from "../media";
import Bg from "./bg,";
import Logo from "./logo";
import Texts from "./text";

export default function Footer(props) {
  return (
    <View nativeID="footer">
      <Media at="sm">
        <View style={styles.container}>
          <Bg />
          <View style={styles.box2}>
            <View style={styles.wrapper2}>
              <Logo source="/Frame 33.png" />
              <Logo source="/Group 65.png" />
            </View>
            <View style={styles.wrapper2}>
              <Logo source="/Group 64.png" />
              <Logo source="/Group 63.png" />
            </View>
          </View>
          <Texts />
        </View>
      </Media>
      <Media greaterThan="sm">
        <View style={styles.container}>
          <Bg />

          <View style={styles.wrapper}>
            <Logo source="/Frame 33.png" />
            <Logo source="/Group 65.png" />
            <Logo source="/Group 64.png" />
            <Logo source="/Group 63.png" />
          </View>
          <Texts />
        </View>
      </Media>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 100,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 300,
    marginBottom: -80,
    marginLeft: 60,
  },
  wrapper2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 90,
    height: 50,
    // marginBottom: -100,
    // marginLeft: 0,
  },
  box2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: 30,
  },
});
