"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCirclePlay } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <Box bg={"brand.160"} w={"full"}>
      <Container maxW="7xl">
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={2} spacing={{ base: 5, md: 10 }}>
            <Heading
              as={"h1"}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              fontFamily={"PT Serif"}
            >
              <Text as={"span"}>Employee benefits at its finest</Text>
              <br />
              <Text as={"span"}>- </Text>
              <Text
                as={"span"}
                color={"brand.130"}
                position={"relative"}
                zIndex={2}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "brand.210",
                  zIndex: -1,
                }}
              >
                Increasing Productivity
              </Text>
            </Heading>
            <Text fontSize={"lg"} maxW={"xl"}>
              Eden Life is the excellent choice for increased productivity. With
              office lunch, laundry and cleaning plans for employees, gift
              vouchers to reward performance, we become your company&apos;s
              Employee Perks Manager.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                size={"lg"}
                fontWeight={"semibold"}
                p={8}
                colorScheme={"green"}
                bg={"brand.100"}
                _hover={{ bg: "brand.200" }}
              >
                Get Eden
              </Button>
              <Button
                size={"lg"}
                fontWeight={"semibold"}
                p={8}
                bg={"none"}
                color={"brand.100"}
              >
                Request a demo
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
            display={{ base: "none", md: "flex" }}
          >
            <Box zIndex={2}>
              <Image
                alt={"2 space gray Iphone 13's side by side"}
                fit={"cover"}
                align={"center"}
                src={"/assets/images/phone-company-hero.png"}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
