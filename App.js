import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useReducer, useEffect, useCallback } from "react";
import { initialState, actionsCreator, reducer } from "./reducers/photos";
import Loading from "./components/Loading";
import Error from "./components/Error";
import PhotoGrid from "./components/PhotoGrid";
import { getImages } from "./api/picsum";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, nextPage, failure, photos } = state;

  const fetchImages = useCallback(async () => {
    dispatch(actionsCreator.loading());
    try {
      const nextPhotos = await getImages(nextPage);
      dispatch(actionsCreator.success(nextPhotos, nextPage));
    } catch (error) {
      console.log(error);
      dispatch(actionsCreator.failure());
    }
  }, [nextPage]);

  useEffect(() => {
    fetchImages();
  }, []);

  if (photos.length === 0) {
    if (loading) {
      return <Loading />;
    }

    if (failure) {
      return <Error />;
    }
  }

  return (
    <View style={styles.container}>
      <PhotoGrid photos={photos} numColumns={3} onEndReached={fetchImages} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
