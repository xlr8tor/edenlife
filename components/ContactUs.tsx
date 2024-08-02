import {
  Box,
  Container,
  Flex,
  Stack,
  Image,
  Button,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import {
  RadioEmoji,
  TelephoneEmoji,
  HandshakeEmoji,
} from "./icons/CustomIcons";

const ContactUs = () => {
  return (
    <Box>
      <Container maxW={"7xl"} py={{ base: 32, md: 28 }}>
        <Flex direction={"column"}>
          <Stack spacing={4} align={"center"}>
            <Heading as="h1" size={"2xl"}>
              Contact Us
            </Heading>
            <Text
              textAlign={"center"}
              fontSize={"lg"}
              lineHeight={1.8}
              maxW={"xl"}
            >
              Got a special request, need more information or you simply want to
              talk? Reach out to us and we&apos;ll respond as soon as possible.
            </Text>
          </Stack>
          <SimpleGrid minChildWidth="220px" py={{ base: 24 }} gap={16}>
            <Flex
              direction={"column"}
              align={"center"}
              w="full"
              gap={2}
              borderRadius="md"
              transition="all 0.2s"
              _hover={{ boxShadow: "0px 10px 20px 2px #FFEBDE" }}
              p={{ base: 0, md: 7 }}
              cursor={"pointer"}
            >
              <Box bg={"brand.180"} p={2} borderRadius={"lg"} mb={4}>
                <Icon as={RadioEmoji} fontSize={"5xl"} />
              </Box>

              <Heading as="h2" size={"md"}>
                Press Enquire
              </Heading>
              <Text textAlign={"center"} lineHeight={1.8}>
                For press inquiries, send us an email via the email address
                below.
              </Text>
              <Text
                as="a"
                href="mailto:press@edenlife.ng"
                color="brand.200"
                mt={4}
                fontWeight={"semibold"}
              >
                press@edenlife.ng
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              align={"center"}
              w="full"
              gap={2}
              borderRadius="md"
              transition="all 0.2s"
              _hover={{ boxShadow: " 0px 10px 20px 2px #E5E9FC" }}
              p={{ base: 0, md: 7 }}
              cursor={"pointer"}
            >
              <Box bg={"brand.550"} p={2} borderRadius={"lg"} mb={4}>
                <Icon as={HandshakeEmoji} fontSize={"5xl"} />
              </Box>

              <Heading as="h2" size={"md"}>
                Partner Inquiries
              </Heading>
              <Text textAlign={"center"} lineHeight={1.8}>
                For partner inquiries, send us an email via the email address
                below.
              </Text>
              <Text
                as="a"
                href="mailto:partner@edenlife.ng"
                color="brand.200"
                mt={4}
                fontWeight={"semibold"}
              >
                partner@edenlife.ng
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              align={"center"}
              w="full"
              gap={2}
              borderRadius="md"
              transition="all 0.2s"
              _hover={{ boxShadow: " 0px 10px 20px 2px #FFE8E5" }}
              p={{ base: 0, md: 7 }}
              cursor={"pointer"}
            >
              <Box bg={"brand.190"} p={2} borderRadius={"lg"} mb={4}>
                <Icon as={TelephoneEmoji} fontSize={"5xl"} />
              </Box>

              <Heading as="h2" size={"md"}>
                Customer Support
              </Heading>
              <Text textAlign={"center"} lineHeight={1.8}>
                For customer support, log in to your Eden app to chat directly
                with your Gardener.
              </Text>
              <Text
                as="a"
                href="www.edenapp.com"
                color="brand.200"
                mt={4}
                fontWeight={"semibold"}
              >
                Download the Eden App
              </Text>
            </Flex>
          </SimpleGrid>
        </Flex>
        <Flex
          bg="brand.150"
          borderRadius={"lg"}
          maxW={"1008px"}
          m="auto"
          overflow={"hidden"}
          direction={{ base: "column-reverse", md: "row" }}
          boxShadow="6px 6px 0 #FFEBDE"
        >
          <Stack
            spacing={6}
            color="white"
            p={14}
            flex={1}
            align={{ base: "center", md: "start" }}
          >
            <Heading fontSize={"2xl"}>Eden Office</Heading>
            <Box as="address" textAlign={{ base: "center", md: "left" }}>
              Block D3 Flat 5, Jacob Mews Estate, <br />
              Adebisi Street, Yaba,
              <br />
              Lagos, Nigeria.
            </Box>
            <VStack alignItems={{ base: "center", md: "start" }} mt={2}>
              <Text as="a" href="mailto:support@edenlife.ng">
                Email: support@edenlife.ng
              </Text>
              <Text as="a" href="tel:+234701567570">
                Phone number: +234 701 567 5705
              </Text>
            </VStack>
            <Button
              variant={"outline"}
              color={"white"}
              p={7}
              mt={3}
              _hover={{ color: "brand.150", bg: "white" }}
              w={"full"}
            >
              View on Google Maps
            </Button>
          </Stack>
          <Box
            w={"full"}
            flex={{ md: 2 }}
            h={{ base: "200px", md: "initial" }}
            bgImage={"/assets/images/Team.png"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            bgPosition={"center"}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactUs;
