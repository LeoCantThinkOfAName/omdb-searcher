import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    flex: 1,
  },
  text: {
    fontFamily: "sans-serif",
    color: "#fff",
  },
  splash: {
    color: "#333",
    fontSize: 100,
    fontWeight: "bold",
    padding: 10,
    lineHeight: 90,
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
  logo: {
    color: "#f20024",
    fontWeight: "bold",
    fontSize: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  caption: {
    fontSize: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#ff3653",
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: deviceWidth,
  },
  row: {
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    paddingRight: 15,
  },
  listText: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  thumbnail: {
    height: 120,
    width: 80,
    marginRight: 15,
  },
  detail: {
    padding: 10,
  },
  detailMain: {
    flexDirection: "row",
    width: deviceWidth - 200 - 20 - 15,
  },
  detailScroll: {
    flex: 1,
    flexWrap: "wrap",
    position: "relative",
  },
  detailScrollContent: {
    paddingVertical: 20,
  },
  maskBot: {
    height: 30,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: deviceWidth,
  },
  maskTop: {
    height: 30,
    position: "absolute",
    top: 0,
    left: 0,
    width: deviceWidth,
  },
  poster: {
    height: 300,
    marginRight: 15,
    width: 200,
  },
  genres: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  label: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    color: "#333",
    fontSize: 12,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginHorizontal: 3,
  },
  actors: {
    flex: 1,
    flexDirection: "row",
  },
  track: {
    backgroundColor: "#555",
    height: 18,
    marginVertical: 8,
    width: deviceWidth - 20,
  },
  scoreBar: {
    backgroundColor: "#f20024",
    height: 18,
    position: "absolute",
    top: 0,
    left: 0,
  },
  score: {
    position: "absolute",
    right: 5,
    top: -1,
  },
  similarsWrapper: {
    marginVertical: 20,
  },
  similars: {
    flex: 1,
    flexDirection: "row",
  },
  listFooter: {
    alignItems: "center",
    flexDirection: "row",
    height: 80,
    justifyContent: "center",
  },
  noMovies: {
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  spinner: {
    backgroundColor: "#f20024",
    borderRadius: 5,
    height: 10,
    marginHorizontal: 5,
    width: 10,
  },
});

export default styles;
