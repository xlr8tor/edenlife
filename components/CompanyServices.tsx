"use client";
import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Image,
  Container,
  Stack,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

const Services = () => {
  return (
    <Box bg="white">
      <Container maxW={"7xl"} py={{ base: 16, md: 20 }}>
        <Stack
          align={{ base: "center", lg: "start" }}
          spacing={3}
          mb={12}
          display={{ base: "flex", lg: "none" }}
        >
          <Heading fontFamily={"PT Serif"}>Team Perks</Heading>
          <Text textAlign={{ base: "center" }} maxW={"xs"} lineHeight={2}>
            A happy team is a productive team!
          </Text>
        </Stack>
        <Grid
          templateRows={{
            base: "repeat(4, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1.5fr 1fr 1fr" }}
          gap={8}
        >
          <GridItem
            rowSpan={{ base: 1, lg: 2 }}
            colSpan={{ base: 1, md: 2, lg: 1 }}
            bg="white"
            display={{ base: "none", lg: "flex" }}
          >
            <Stack align={{ base: "center", md: "start" }}>
              <Heading fontFamily={"PT Serif"}>Team Perks</Heading>
              <Text fontSize={"lg"} maxW={"s"}>
                A happy team is a productive team!
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Center>
              <Box
                maxW="xs"
                rounded={"md"}
                overflow={"hidden"}
                bg="brand.550"
                border={"1px"}
                borderColor="brand.130"
                boxShadow={useColorModeValue(
                  "6px 6px 0 #A0B0FE",
                  "6px 6px 0 cyan"
                )}
              >
                <Box h={"200px"} borderBottom={"1px"} borderColor="black">
                  <Img
                    src={"/assets/images/laundry.png"}
                    roundedTop={"sm"}
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={"Black Eden Life branded laundry bag"}
                  />
                </Box>
                <Box p={4}>
                  <Heading
                    color={"black"}
                    fontSize={"2xl"}
                    noOfLines={1}
                    mb={3}
                  >
                    Laundry
                  </Heading>
                  <Text noOfLines={2}>
                    Your clothes, picked up, laundered and delivered to you in
                    48 hours or less.
                  </Text>
                </Box>
                <HStack borderTop={"1px"} color="brand.130">
                  <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={"space-between"}
                    roundedBottom={"sm"}
                    cursor={"pointer"}
                    w="full"
                  >
                    <Text
                      fontSize={"md"}
                      fontWeight={"semibold"}
                      color={"black"}
                    >
                      Explore
                    </Text>
                    <BsArrowUpRight />
                  </Flex>
                  <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={"space-between"}
                    roundedBottom={"sm"}
                    borderLeft={"1px"}
                    cursor="pointer"
                  >
                    <Text role="presentation">🎽</Text>
                  </Flex>
                </HStack>
              </Box>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Box
                maxW="xs"
                rounded={"md"}
                overflow={"hidden"}
                bg="brand.450"
                border={"1px"}
                borderColor="brand.120"
                boxShadow={useColorModeValue(
                  "6px 6px 0 #A2F0C5",
                  "6px 6px 0 cyan"
                )}
              >
                <Box h={"200px"} borderBottom={"1px"} borderColor="black">
                  <Img
                    src={"/assets/images/food.png"}
                    roundedTop={"sm"}
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={
                      "A plate of fried rice with 2 pieces of chicken and a glass of wine"
                    }
                  />
                </Box>
                <Box p={4}>
                  <Heading
                    color={"black"}
                    fontSize={"2xl"}
                    noOfLines={1}
                    mb={3}
                  >
                    Food
                  </Heading>
                  <Text noOfLines={2}>
                    Your chef-cooked meals, delivered to you. Daily or weekly.
                  </Text>
                </Box>
                <HStack borderTop={"1px"} color="brand.120">
                  <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={"space-between"}
                    roundedBottom={"sm"}
                    cursor={"pointer"}
                    w="full"
                  >
                    <Text
                      fontSize={"md"}
                      fontWeight={"semibold"}
                      color={"black"}
                    >
                      Explore
                    </Text>
                    <BsArrowUpRight />
                  </Flex>
                  <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={"space-between"}
                    roundedBottom={"sm"}
                    borderLeft={"1px"}
                    cursor="pointer"
                  >
                    <Text role="presentation">🥘</Text>
                  </Flex>
                </HStack>
              </Box>
            </Center>
          </GridItem>
          <GridItem>
            {" "}
            <Center>
              <Box
                maxW="xs"
                rounded={"md"}
                overflow={"hidden"}
                bg="brand.750"
                border={"1px"}
                borderColor="brand.110"
                boxShadow={useColorModeValue(
                  "6px 6px 0 #FFAC76",
                  "6px 6px 0 cyan"
                )}
              >
                <Box h={"200px"} borderBottom={"1px"} borderColor="black">
                  <Img
                    src={"/assets/images/kitchen.png"}
                    roundedTop={"sm"}
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={"Kitchen countertop showing sink and cutlery rack"}
                  />
                </Box>
                <Box p={4}>
                  <Heading
                    color={"black"}
                    fontSize={"2xl"}
                    noOfLines={1}
                    mb={3}
                  >
                    Home Cleaning
                  </Heading>
                  <Text noOfLines={2}>
                    Professional cleaning at your doorstep. Up to thrice a week.
                  </Text>
                </Box>
                <HStack borderTop={"1px"} color="brand.110">
                  <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={"space-between"}
                    roundedBottom={"sm"}
                    cursor={"pointer"}
                    w="full"
                  >
                    <Text
                      fontSize={"md"}
                      fontWeight={"semibold"}
                      color={"black"}
                    >
                      Explore
                    </Text>
                    <BsArrowUpRight />
                  </Flex>
                  <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={"space-between"}
                    roundedBottom={"sm"}
                    borderLeft={"1px"}
                    cursor="pointer"
                  >
                    <Text role="presentation">🏠</Text>
                  </Flex>
                </HStack>
              </Box>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Box
                maxW="xs"
                rounded={"md"}
                overflow={"hidden"}
                bg="brand.850"
                border={"1px"}
                borderColor="brand.140"
                boxShadow={useColorModeValue(
                  "6px 6px 0 #7DDBF0",
                  "6px 6px 0 cyan"
                )}
              >
                <Box h={"200px"} borderBottom={"1px"} borderColor="black">
                  <Img
                    src={"/assets/images/gift.png"}
                    roundedTop={"sm"}
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={"three Gift baskets wrapped with red ribbons"}
                  />
                </Box>
                <Box p={4}>
                  <Heading
                    color={"black"}
                    fontSize={"2xl"}
                    noOfLines={1}
                    mb={3}
                  >
                    Gifting
                  </Heading>
                  <Text noOfLines={2}>
                    Gift cards and gift boxes for every occasion, right at your
                    fingertips.
                  </Text>
                </Box>
                <HStack borderTop={"1px"} color="brand.140">
                  <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={"space-between"}
                    roundedBottom={"sm"}
                    cursor={"pointer"}
                    w="full"
                  >
                    <Text
                      fontSize={"md"}
                      fontWeight={"semibold"}
                      color={"black"}
                    >
                      Explore
                    </Text>
                    <BsArrowUpRight />
                  </Flex>
                  <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={"space-between"}
                    roundedBottom={"sm"}
                    borderLeft={"1px"}
                    cursor="pointer"
                  >
                    <Text role="presentation">🎁</Text>
                  </Flex>
                </HStack>
              </Box>
            </Center>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
