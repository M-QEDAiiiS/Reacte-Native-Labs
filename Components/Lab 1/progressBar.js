


import { View, Text, StyleSheet } from "react-native";

const ProgressBar = ({ label, progress }) => {
  return (
    <View style={styles.progressBarContainer}>
      <Text style={styles.progressBarLabel}>{label}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress * 100}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    marginVertical: 5,
  },
  progressBarLabel: {
    fontSize: 14,
    color: "#FFF",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#333",
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 2,
  },
  progress: {
    height: "100%",
    backgroundColor: "#FFD700",
  },
});
export default ProgressBar;
