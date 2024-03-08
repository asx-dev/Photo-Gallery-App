import { FlatList, Image, Dimensions } from "react-native";
import { formatImage } from "../api/picsum";

const PhotoGrid = ({ photos, numColumns, onEndReached }) => {
  const windowWidth = Dimensions.get("window").width;
  const imageSize = windowWidth / numColumns;
  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <Image
          source={{
            uri: formatImage(item.id, imageSize),
            width: imageSize,
            height: imageSize,
          }}
        />
      )}
    />
  );
};

export default PhotoGrid;
