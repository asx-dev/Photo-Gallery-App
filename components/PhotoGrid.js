import { FlatList, Image, Dimensions } from "react-native";
import { formatImage } from "../api/picsum";

const PhotoGrid = ({ photos, numColumns, onEndReached }) => {
  const windowWidth = Dimensions.get("window").width;
  const imageSize = numColumns / windowWidth;
  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => (
        <Image
          source={{
            uri: formatImage(item.id, imageSize),
            width: imageSize,
            height: imageSize,
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReached}
    />
  );
};

export default PhotoGrid;
