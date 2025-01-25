import { StyleSheet, Dimensions, View } from "react-native";
import { Image, type ImageSource } from "expo-image";

const screenWidth = Dimensions.get("window").width;

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
  onImageLayout?: (width: number, height: number) => void; // 添加这个回调
};

export default function ImageViewer({
  imgSource,
  selectedImage,
  onImageLayout,
}: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  return (
    <View style={styles.container}>
      <Image
        source={imageSource}
        style={styles.image}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          onImageLayout?.(width, height);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    aspectRatio: 1,
    borderRadius: 18,

    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
