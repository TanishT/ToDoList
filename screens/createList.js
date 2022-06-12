import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Button,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import firebase from "firebase";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/yo.ttf")
};

export default class CreateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      light_theme: true,
      dropdownHeight: 40
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();

  }

  async addList() {
    if (
      this.state.title &&

      this.state.title1&&

      this.state.title2&&

      this.state.title3&&

      this.state.title4&&

      this.state.title5&&

      this.state.title6&&

      this.state.title7&&

      this.state.title8&&

      this.state.title9

    ){
      let listData = {
        title: this.state.title,

        title1 : this.state.title1,

        title2 : this.state.title2,

        title3 : this.state.title3,

        title4 : this.state.title4,

        title5 : this.state.title5,

        title6 : this.state.title6,

        title7 : this.state.title7,

        title8 : this.state.title8,
  
        title9 : this.state.title9,

      };
      await firebase
        .database()
        .ref(
          "/lists/" +
            Math.random()
              .toString(36)
              .slice(2)
        )
        .set(listData)
        .then(function(snapshot) {});
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("List", {listData: this.state.listData});
    } else {
      Alert.alert(
        "Error",
        "All fields are required!",
        [{ text: "OK", onPress: () => Alert.alert("Ok") }],
        { cancelable: false }
      );
    }
  }



  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View
          style={
            styles.container
          }
        >
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
 
            <View style={styles.appTitleTextContainer}>
              <Text
                style={
                  this.state.light_theme
                    ? styles.appTitleTextLight
                    : styles.appTitleText
                }
              >
                New Lists
              </Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <ScrollView>
  

             
              <View style={{ marginHorizontal: RFValue(10) }}>
                <TextInput
                  style={

                    styles.inputFontLight

                  }
                  onChangeText={title => this.setState({ title })}
                  placeholder={"List Item 1"}
                  placeholderTextColor="white"
                  
                />
              
              </View>
              
              <View style={{ marginHorizontal: RFValue(10) }}>
               <TextInput
                  style={

                       styles.inputFontLight

                  }
                  onChangeText={title1 => this.setState({ title1 })}
                  placeholder={"List Item 2"}
                  placeholderTextColor="white"
                  
                />

              </View>
              <View style={{ marginHorizontal: RFValue(10) }}>
               <TextInput
                  style={
             styles.inputFontLight
        
                  }
                  onChangeText={title2 => this.setState({ title2 })}
                  placeholder={"List Item 3"}
                  placeholderTextColor="white"
                  
                />
              </View>
              <View style={{ marginHorizontal: RFValue(10) }}>
               <TextInput
                  style={
               styles.inputFontLight
          
                  }
                  onChangeText={title3 => this.setState({ title3 })}
                  placeholder={"List Item 4"}
                  placeholderTextColor= "white"
                  
                />
              </View>
              <View style={{ marginHorizontal: RFValue(10) }}>
               <TextInput
                  style={
                    this.state.light_theme
                      ? styles.inputFontLight
                      : styles.inputFont
                  }
                  onChangeText={title4 => this.setState({ title4 })}
                  placeholder={"List Item 5"}
                  placeholderTextColor=
                    "white"
                  
                />
              </View>
              <View style={{ marginHorizontal: RFValue(10) }}>
               <TextInput
                  style={
                    this.state.light_theme
                      ? styles.inputFontLight
                      : styles.inputFont
                  }
                  onChangeText={title5 => this.setState({ title5 })}
                  placeholder={"List Item 6"}
                  placeholderTextColor="white"
                  
                />
              </View>
              <View style={{ marginHorizontal: RFValue(10) }}>
               <TextInput
                  style={
                    this.state.light_theme
                      ? styles.inputFontLight
                      : styles.inputFont
                  }
                  onChangeText={title6 => this.setState({ title6 })}
                  placeholder={"List Item 7"}
                  placeholderTextColor="white"
                  
                />
              </View>
              <View style={{ marginHorizontal: RFValue(10) }}>
               <TextInput
                  style={
                    this.state.light_theme
                      ? styles.inputFontLight
                      : styles.inputFont
                  }
                  onChangeText={title7 => this.setState({ title7 })}
                  placeholder={"List Item 8"}
                  placeholderTextColor="white"
                  
                />
              </View>
              <View style={{ marginHorizontal: RFValue(10) }}>
               <TextInput
                  style={
                    this.state.light_theme
                      ? styles.inputFontLight
                      : styles.inputFont
                  }
                  onChangeText={title8 => this.setState({ title8 })}
                  placeholder={"List Item 9"}
                  placeholderTextColor="white"
                  
                />
              </View>
              <View style={{ marginHorizontal: RFValue(10) }}>
               <TextInput
                  style={
                    this.state.light_theme
                      ? styles.inputFontLight
                      : styles.inputFont
                  }
                  onChangeText={title9 => this.setState({ title9 })}
                  placeholder={"List Item 10"}
                  placeholderTextColor="white"

                />
              </View>
              <View style={styles.submitButton}>
                <Button style = {styles.btntxt}
                  onPress={() => this.addList()}
                  title = "Submit"
                  color = "black"
                />
              </View>
            </ScrollView>
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    fontFamily: "Bubblegum-Sans"
  },
  containerLight: {
    flex: 1,
    backgroundColor: "black"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
    color : "white",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },

  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  appTitleTextLight: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },

  inputFontLight: {
    height: RFValue(40),
    paddingLeft: RFValue(10),
    fontFamily: "Bubblegum-Sans",
    marginTop : RFValue(5),
    borderWidth : 2,
    borderRadius : 10,
    borderColor : "white",
    color : "white",
  },
  dropdownLabel: {
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  dropdownLabelLight: {
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
    color : "white",
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center",
    borderWidth : 2,
    borderColor : "white",
    borderRadius : 10,
    marginHorizontal: RFValue(10),
    fontFamily: "Bubblegum-Sans",

  },
  btntxt : {
    fontFamily: "Bubblegum-Sans"
  }
});
