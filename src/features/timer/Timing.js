import React from "react";
import { View, StyleSheet } from "react-native";

import { RoundedButton } from "../../components/RoundedButton";

export const Timing = ({ changeTime }) => (
  <>
    <View style={styles.timingButton}>
      <RoundedButton size={50} title="1" onPress={changeTime(1)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={50} title="5" onPress={changeTime(5)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={50} title="10" onPress={changeTime(10)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={50} title="15" onPress={changeTime(15)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={50} title="20" onPress={changeTime(20)} />
    </View>
  </>
);

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});
