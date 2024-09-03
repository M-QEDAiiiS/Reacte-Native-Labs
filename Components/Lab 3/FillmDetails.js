import { useRoute } from "@react-navigation/native";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";

let myKey = `4854f9003ce6ea9ced3120ed010e4b43`;
let imgUrl = `https://image.tmdb.org/t/p/original`;
let detailsUrl = `https://api.themoviedb.org/3/movie/`;

export default function FillmDetails() {
  const [films, setFilms] = useState({});
  const { params } = useRoute();
  // console.log(params.id);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=4854f9003ce6ea9ced3120ed010e4b43`
      );
      const data = await res.json();
      console.log(data);
      setFilms({ ...data });
    };
    fetchMovie();
  }, []);

  return (
    <View style={filmStyle.main}>
      <View>
        <Image
          style={filmStyle.img}
          source={{ uri: `${imgUrl}${films.poster_path}` }}
        />
        <Text style={filmStyle.title}>{films.title}</Text>
        <Text style={filmStyle.overview}>{films.overview}</Text>
        <Text style={filmStyle.release}>
          Release Date: {films.release_date}
        </Text>
        <Text style={filmStyle.vote}>Rating: {films.vote_average}</Text>
      </View>
    </View>
  );
}

const filmStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#0d2118",
    padding: 20,
  },

  filmCard: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: 400,
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
    color: "white",
    paddingVertical: 4,
    textAlign: "center",
  },
  overview: {
    fontSize: 12,
    color: "#cccfda",
    paddingVertical: 4,
    textAlign: "center",
  },
  release: {
    fontSize: 15,
    color: "#dbdeea",
    paddingVertical: 4,
    textAlign: "center",
  },
  vote: {
    fontSize: 15,
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
