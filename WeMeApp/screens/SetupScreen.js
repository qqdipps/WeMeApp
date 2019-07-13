import React, { Component } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import MyButton from "../components/MyButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Overlay } from "react-native-elements";

class SetupScreen extends Component {
  constructor() {
    super();
    this.state = {
      blurEffect: 0,
      showSetup: true,
      showOverlay: false
    };
  }

  blurBackground = () => {
    this.setState({ blurEffect: 25, showSetup: false, showOverlay: true });
  };

  hideOverlay = () => {
    this.setState({ showOverlay: false, blurEffect: 0 });
  };

  render() {
    const { blurEffect, showSetup, showOverlay } = this.state;
    return (
      <ImageBackground
        blurRadius={this.state.blurEffect}
        source={require("../images/astronaut-4106766_640.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.layout}>
          {showSetup && (
            <MyButton
              style={styles.myButton}
              callBack={this.blurBackground}
              text={"Let's Get Started!"}
            />
          )}

          {showOverlay && (
            <Overlay isVisible height={380} overlayBackgroundColor={"#FFf0e6"}>
              <View style={styles.layout}>
                <MyButton
                  style={styles.myButton}
                  callBack={this.hideOverlay}
                  text={"Submit"}
                />
                <Input
                  label="Enter your desired display name:"
                  placeholder="User 244"
                  leftIcon={<Icon name="user" size={40} color="black" />}
                  leftIconContainerStyle={{ marginRight: 5 }}
                  containerStyle={{ marginBottom: 10 }}
                />
              </View>
            </Overlay>
          )}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center"
  },
  myButton: {
    marginBottom: 200
  }
});

export default SetupScreen;
