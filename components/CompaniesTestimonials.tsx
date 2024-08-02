"use client";
import React from "react";

import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Image,
  Heading,
  VisuallyHidden,
  Text,
  Button,
} from "@chakra-ui/react";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    name: "Oyechukwu",
    handle: "@_Oyeyinka",
    text: "It's amazing how @ouredenlife delivered the careboxes to everyone at Cowrywise, at different locations, around the same time, so efficient! Cowrywise, thank you! Thank you 😇🙌 @cowrywise God bless you 😚",
    avatar: "/assets/images/image9.png",
  },
  {
    name: "Tech Bro",
    handle: "@OdunEweniyi",
    text: "Someone can’t even sneeze in that Piggyvest office, we’ve already sent them an @ouredenlife carebox. That box has everything 😂😂",
    avatar: "/assets/images/image13.png",
  },
  {
    name: "Timi Ajiboye",
    handle: "@timigod",
    text: "Thanks to @ouredenlife, we're now delivering our (free) work lunch to all BuyCoins employees' homes during this period.",
    avatar: "/assets/images/image10.png",
  },
  {
    name: "Tejumáde",
    handle: "@TejuAdeyinka",
    text: "@ouredenlife meals >>>> Eden meals funded by @buycoins_africa >>>>>>>>>>>",
    avatar: "/assets/images/image12.png",
  },
  {
    name: "Michael Awonowo",
    handle: "@MAwonowo",
    text: "@ouredenlife is probably the most reliable vendor we worked with in 2020 @MicdeeDesigns. One of the few companies that my people didn’t come back to complain about their service. And we work with a lot of vendors. They really have something good going and I’m rooting for them.",
    avatar: "/assets/images/image11.png",
  },
];

export default function Testimonials() {
  return (
    <Box bg="brand.160">
      <Container maxW={"7xl"} py={{ base: 16, md: 20 }}>
        <Flex
          textAlign={"center"}
          py={10}
          justifyContent={"center"}
          direction={"column"}
          width={"full"}
          overflow={"hidden"}
          gap={20}
        >
          <Flex
            justify={"space-between"}
            direction={{ base: "column", md: "row" }}
            gap={8}
          >
            <Box flex={1}>
              <Heading textAlign={{ md: "left" }}>
                Companies <VisuallyHidden>Love</VisuallyHidden>{" "}
                <Text as="span" role="presentation">
                  💚
                </Text>{" "}
                Us
              </Heading>
            </Box>
            <Box flex={1}>
              <SimpleGrid
                columns={4}
                spacing={{ base: 3, md: 8 }}
                aria-label="Corporate Partners"
                alignItems={"center"}
              >
                <Image src="/assets/icons/microsoft.svg" alt="Microsoft" />
                <Image
                  src="/assets/icons/cocreatehub.svg"
                  alt="Co-creation Hub"
                />
                <Image src="/assets/icons/cowrywise.svg" alt="Cowrywise" />
                <Image src="/assets/icons/flutterwave.svg" alt="Flutterwave" />
                <Image src="/assets/icons/paystack.svg" alt="Paystack" />
                <Image src="/assets/icons/kuda.svg" alt="Kuda Bank" />
                <Image src="/assets/icons/buycoins.svg" alt="BuyCoins" />
                <Image src="/assets/icons/piggyvest.svg" alt="Piggyvest" />
              </SimpleGrid>
            </Box>
          </Flex>
          <Box
            sx={{
              columnCount: { base: 1, md: 2, lg: 3 },
              columnGap: "16px",
            }}
          >
            {testimonials.map((item, id) => (
              <Box
                key={id}
                sx={{
                  breakInside: "avoid",
                }}
                mb="16px"
                color="black"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <TestimonialCard {...item} index={id} />
              </Box>
            ))}
          </Box>
          <Button
            size={"lg"}
            fontWeight={"semibold"}
            p={8}
            colorScheme={"green"}
            bg={"brand.100"}
            _hover={{ bg: "brand.200" }}
            w={"fit-content"}
            alignSelf={"center"}
          >
            Get Eden
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
