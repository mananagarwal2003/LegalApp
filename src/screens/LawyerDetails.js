import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BusinessDetailScreen() {
  const { personDetails } = useRoute().params;
  const navigation = useNavigation();
  const { name, task, address, image, about } = personDetails;
  const [isReadMore, setReadMore] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.heading}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ flexDirection: "row", gap: 10 }}
            >
              <Ionicons name="arrow-back-outline" size={30} color="black" />
              <Text>Personal Details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.details}>
            <Text style={styles.task}>{task}</Text>
            <Text style={styles.name}>{name} 👩</Text>
            <Text style={styles.address}>
              <Ionicons name="location-sharp" size={15} /> {address}
            </Text>
            <View style={styles.aboutContainer}>
              <Text style={styles.aboutHeading}>About Me</Text>
              <ScrollView>
                <Text
                  style={styles.aboutText}
                  numberOfLines={isReadMore ? 20 : 5}
                >
                  {about}
                </Text>
                <TouchableOpacity onPress={() => setReadMore(!isReadMore)}>
                  <Text style={styles.readMore}>
                    {isReadMore ? "Read less" : "Read more"}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text style={[styles.buttonText]}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    paddingBottom: 30,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginTop: -20,
  },
  details: {
    paddingTop: 20,
    borderRadius: 20,
    marginTop: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    alignItems: "flex-start",
  },
  task: {
    fontSize: 25,
    fontWeight: "bold",
  },
  name: {
    fontSize: 17,
    color: "black",
    marginTop: 8,
  },
  address: {
    fontSize: 17,
    marginTop: 9,
    borderRadius: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  aboutContainer: {
    borderTopWidth: 2,
    marginTop: 20,
  },
  aboutHeading: {
    marginTop: 18,
    fontWeight: "600",
    fontSize: 18,
  },
  aboutText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
  },
  readMore: {
    color: "black",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
