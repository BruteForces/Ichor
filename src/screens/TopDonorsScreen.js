import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
  Pressable,
  ScrollView,
  linearGradient
} from "native-base";
import { Colors } from "../common/Design/Colors";
import { ArrowBack } from "../common/icons";
import { Profile } from "../common/components";
import { RankerCard } from "../common/components";

const Header = () => {
  return (
    <Box
      w="100%"
      h="7%"
      mt={10}
    >
      <VStack
        flex={1}
        justifyContent="center"
      >
        <HStack
          mx={3}
          flex={1}
          justifyContent="space-between"
        >
          <ArrowBack fill={Colors.PureWhite} />
          <Box pr={6}>
            <Text fontSize={"20"} fontWeight="bold" color={Colors.PureWhite}  >Top Donors</Text>
          </Box>
          <Box />
        </HStack>
      </VStack>
    </Box>
  );
}

const TopRankers = () => {
  return (
    <Box height="25%">
      <VStack pt={5} alignItems="center" >
        <HStack position="relative" h={"12"}>
          <Box zIndex="-1" left='3' marginTop="10" position="relative" >
            <Profile size={0} />
          </Box>
          <Box zIndex="0" >
            <Profile size={6.4} />
          </Box>
          <Box zIndex="-1" marginTop="10" position="relative" right={3}>
            <Profile size={-1} />
          </Box>
        </HStack>
      </VStack>
    </Box>
  )
}

const TopDonorsScreen = () => {
  const [Pressed, setPressed] = useState("monthly");

  const onClickHandler = (value) => {
    setPressed(value);
  }

  return (
    <View>
      <Box safeArea w="100%" h="100%" bg={Colors.PrimaryBg}>
        <Header />
        <Box height="5%">
          <VStack
            flex={1}
            justifyContent="center"
            alignItems="center"
          >
            <HStack
              justifyContent="center"
              space={10}
              height="90%"


            >


              <Box width="25%" rounded="2xl"
                bg={Pressed === "monthly" ? Colors.LinkBlue : Colors.LinkGray}
              >

                <VStack
                  flex={1}
                  justifyContent="center"
                >
                  <Text onPress={() => onClickHandler('monthly')} fontSize="15" fontWeight="hairline" color={Colors.PureWhite} textAlign="center">Monthly</Text>
                </VStack>
              </Box>


              <Box width="25%" rounded="2xl" bg={Pressed === "all time" ? Colors.LinkBlue : Colors.LinkGray}>
                <VStack
                  flex={1}
                  justifyContent="center"
                >
                  <Text onPress={() => onClickHandler('all time')} fontSize="15" fontWeight="hairline" color={Colors.PureWhite} textAlign="center">All Time</Text>
                </VStack>
              </Box>

            </HStack>
          </VStack>
        </Box>

        <TopRankers />

        <Box height="60%" pb={4} pt={5}>
          <ScrollView >
            <VStack alignItems="center" height="80%" space="8" >

              <RankerCard />
              <RankerCard />
              <RankerCard />
              <RankerCard />
              <RankerCard />
              <RankerCard />
              <RankerCard />
              <RankerCard />
              <RankerCard />
              <RankerCard />
              <RankerCard />
            </VStack>
          </ScrollView>
        </Box>

      </Box>
    </View >
  );
};

export { TopDonorsScreen };

const styles = StyleSheet.create({

});
