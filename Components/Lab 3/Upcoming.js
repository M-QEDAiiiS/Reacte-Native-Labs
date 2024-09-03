import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

let myKey = `4854f9003ce6ea9ced3120ed010e4b43`;
let imgUrl = `https://image.tmdb.org/t/p/original`;

export default function Upcoming({ navigation }) {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredFilms, setFilteredFilms] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${myKey}`)
      .then((data) => {
        return data.json();
      })
      .then(({ results }) => {
        setFilms(results);
      });
  }, []);
  useEffect(() => {
    const newfilteredFilms = films.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFilms(newfilteredFilms);
  }, [search, films]);

  return (
    <>
      <View style={filmStyle.inoutView}>
        <TextInput
          value={search}
          onChangeText={(value) => setSearch(value)}
          style={filmStyle.input}
          placeholder="Search"
          placeholderTextColor="grey"
        />
      </View>
      <FlatList
        data={filteredFilms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.FillmDetails, { id: item.id });
            }}
          >
            <View style={filmStyle.filmCard}>
              <Image
                style={filmStyle.img}
                source={{ uri: `${imgUrl}${item.poster_path}` }}
              />
              <Text style={filmStyle.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={filmStyle.main}
        numColumns={2}
      ></FlatList>
    </>
  );
}

const filmStyle = StyleSheet.create({
  main: {
    backgroundColor: "#0d2118",
    paddingLeft: 15,
  },

  filmCard: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    width: 140,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },

  title: {
    fontSize: 16,
    color: "white",
    paddingVertical: 4,
    textAlign: "center",
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    borderColor: "grey",
    borderRadius: 8,
    margin: 20,
    color: "#83b589",
    backgroundColor: "#214b38",
  },
  inoutView: {
    backgroundColor: "#0d2118",
  },
});
