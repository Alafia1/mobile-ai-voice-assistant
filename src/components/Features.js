import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Features = () => {
  return (
    <View style={{ height: hp(60) }} className="space-y-4">
      <Text
        style={{ fontSize: wp(6.5) }}
        className="font-semibold text-gray-700"
      >
        Features
      </Text>
      <View className="bg-teal-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require("../../assets/images/chatgpt2.png")}
            style={{ height: hp(4), width: hp(4) }}
          />
          <Text
            style={{ fontSize: wp(4.8) }}
            className="font-semibold text-gray-700"
          >
            ChatGPT
          </Text>
        </View>
        <Text
          style={{ fontSize: wp(3.8) }}
          className="text-gray-700 font-medium"
        >
          ChatGPT can provide you with instant and knowledgeable responses,
          assit you with creative ideas on a wide range of topics
        </Text>
      </View>
      <View className="bg-amber-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require("../../assets/images/dalle.png")}
            style={{ height: hp(4), width: hp(4) }}
          />
          <Text
            style={{ fontSize: wp(4.8) }}
            className="font-semibold text-gray-700"
          >
            DALL-E
          </Text>
        </View>
        <Text
          style={{ fontSize: wp(3.8) }}
          className="text-gray-700 font-medium"
        >
          DALL-E can generate imaginative and diverse images from textual
          descriptions, expanding the boundaries of visual creativity
        </Text>
      </View>
      <View className="bg-lime-300 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require("../../assets/images/smartai.png")}
            style={{ height: hp(4), width: hp(4) }}
          />
          <Text
            style={{ fontSize: wp(4.8) }}
            className="font-semibold text-gray-700"
          >
            Smart AI
          </Text>
        </View>
        <Text
          style={{ fontSize: wp(3.8) }}
          className="text-gray-700 font-medium"
        >
          A powerful voice assistant with the abilities of ChatGPT and Dall-E,
          Providing you the best hands-on assistant.
        </Text>
      </View>
    </View>
  );
};

export default Features;
