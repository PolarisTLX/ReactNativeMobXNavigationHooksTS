import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  excercise: string;
  repsAndWeight: string;
}

export const WorkoutCard: React.FC<Props> = ({excercise, repsAndWeight}) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text>{excercise}</Text>
        <Text>{repsAndWeight}</Text>
      </View>
      <View>
        <Text>Bottom</Text>
      </View>
    </View>
   );
}


const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topRowText: {
    fontSize: 16
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#8FB299"
  },
  whiteText: {
    color: "#fff"
  },
  circleText: {
    fontSize: 16,
    margin: "auto"
  },
  grayText: {
    color: "#655252"
  },
  fadedBackground: {
    backgroundColor: "#B2A1A1"
  }
});