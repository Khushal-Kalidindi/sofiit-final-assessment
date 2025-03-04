import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * WeekdayDisplay Component
 *
 * A static display of weekdays with selections as shown in the image
 *
 * @returns {React.ReactElement}
 */
const CalendarSample = ({ style }: { style?: object }) => {
  // Array of weekday labels
  const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

  // Which days are selected (based on the image)
  const selectedDays = [0, 1, 2]; // Monday, Tuesday, Wednesday

  // The day with the outline (Friday in the image)
  const outlinedDay = 4;

  return (
    <>
      <View style={[styles.container, style]}>
        {/* Days Display */}
        <View style={styles.arrowContainer}>
          <Text style={[styles.arrow, styles.leftArrow]}>‹</Text>
          <Text style={[styles.arrow, styles.rightArrow]}>›</Text>
        </View>
        <View style={styles.daysContainer}>
          {weekdays.map((day, index) => (
            <View key={index} style={styles.dayColumn}>
              <View
                style={[
                  styles.dayCircle,
                  {
                    backgroundColor: selectedDays.includes(index)
                      ? "#38143D"
                      : "#E5E5E5",
                    borderWidth: index === outlinedDay ? 2 : 0,
                    borderColor:
                      index === outlinedDay ? "#EB5B3C" : "transparent",
                  },
                ]}
              />
              <Text style={styles.dayText}>{day}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 32,
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    boxShadow: "1px 3px 12px 0px rgba(60, 60, 60, 0.10)",
    width: 312,
  },
  arrowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  arrow: {
    fontSize: 32,
    color: "#EB5B3C",
    fontWeight: "bold",
  },
  leftArrow: {
    marginRight: 8,
  },
  rightArrow: {
    marginLeft: 8,
  },
  daysContainer: {
    flexDirection: "row",
    flex: 1,
    gap: 14,
    justifyContent: "space-around",
  },
  dayColumn: {
    alignItems: "center",
  },
  dayCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginBottom: 8,
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CalendarSample;
