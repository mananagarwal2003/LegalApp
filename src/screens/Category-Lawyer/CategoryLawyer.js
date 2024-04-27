import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet ,Pressable} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { api } from "../../api/api";
import axios from "axios";
const CategoryLawyer = ({navigation}) => {
  const [Category1, setCategory] = useState([]);
  const[lawyers,setLawyers]=useState("");
  const route = useRoute();
  const [data, setData] = useState(null);

 const receivedData = route.params?.data;
  console.log(receivedData)

  const CategoryData = {
    Category:receivedData,
  };
  const fetchData = async () => {
    try {
      const response = await axios.post(
        `${api}/Category-Lawyer`,
        CategoryData
      );
      setCategory(response.data.data);
      
    } catch (error) {
      console.log(error);
    }  
  };
  useEffect(() => {
    fetchData();
  },[]);

console.log(Category1)
      return (
    <View style={styles.container}>
       <TouchableOpacity
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back-outline' size={30} color="black" />
        <Text style={{ fontSize: 25, fontWeight: 'bold' ,paddingBottom:20}}> {receivedData}</Text>
      </TouchableOpacity>
      {/*<FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> navigation.push('business-detail',{ personDetails:item })}>
            <View style={styles.itemContainer}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={{fontWeight:'bold'}}>{item.task}</Text>
                <Text style={{paddingTop:8}}>
                  <Ionicons name='location-sharp' size={15}   />{item.address}

                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      /> */}

        <View style={{ marginHorizontal: 12,gap:10}}>
          {Category1.map((item,index) => {
            
            return(
              <Pressable
              onPress={()=> navigation.push('LawyerDetails',{ personDetails:item })}
              key={index}
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: "#4b6cb7",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>
                  {item?.name?.charAt(0)}
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item?.name}
                </Text>
                <Text style={{ marginTop: 5, color: "grey" }}>
                  {item?.LawyerCat}({item?.LawyerID})
                </Text>
              </View>
            </Pressable>
            )
          })}
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: 'Grey',
  },
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 20, 
    paddingTop:10,
    borderRadius:20
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 30,
    marginLeft:10 ,
    borderRadius:10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    marginBottom: 5, // Add margin bottom to separate name from other text
  },
});
export default CategoryLawyer




