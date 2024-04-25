import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { api } from "../../api/api";
import axios from "axios";

const CategoryLawyer = () => {
  const [Category, setCategory] = useState("");
  const route = useRoute();
  const receivedData = route.params?.data;
  console.log(receivedData)


  const CategoryData = {
    Category:receivedData,
  };
  useEffect(() => {
    // Function to fetch data from the API
    // console.log('hi')fetchData();
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${api}/Category-Lawyer`,
          CategoryData
        );
        console.log(response.data);
      } catch (error) {
        // If there's an error, set the error state
        console.log(error);
      }
      
    };
    fetchData();
  }, [CategoryData]);
  return (
    <View>
      <Text style={{alignSelf:'center',marginTop:100}}>{receivedData}</Text>
    </View>
  );
};

export default CategoryLawyer;

const styles = StyleSheet.create({});
