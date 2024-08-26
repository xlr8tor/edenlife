"use client";

import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Image,
  Heading,
  VisuallyHidden,
  Text,
} from "@chakra-ui/react";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    name: "Scot",
    handle: "@Scothinks",
    text: "Eden is becoming the best part of my Saturdays. Fresh food!",
    avatar: "/assets/images/image1.png",
  },
  {
    name: "Ahmad Mukoshy",
    handle: "@mukoshy",
    text: "One use of @ouredenlife and there will be no going back. This service is top-notch and sincerely stress relieving. Eden is a blessing!",
    avatar: "/assets/images/image2.png",
  },
  {
    name: "Skai Kru",
    handle: "@TheOnlyIbukun",
    text: "Omo I thank God for @ouredenlife oh. Is this how I would have been dragging Jumia Food on the TL everyday?",
    avatar: "/assets/images/image3.png",
  },
  {
    name: "Eyitemi Egbejule",
    handle: "@eeyitemi",
    text: "With all the chaos that is Lagos, @ouredenlife helps to improve your life expectancy and reduce your stress levels. \n 💯 Recommend",
    avatar: "/assets/images/image4.png",
  },
  {
    name: "Sola",
    handle: "@akindolu",
    text: "@ouredenlife is it if you don't stress in this life. Thank you @nadayar, @unicodeveloper and the team!",
    avatar: "/assets/images/image5.png",
  },
  {
    name: "Ifeoma Chukwuogo",
    handle: "@FizzyThatcher",
    text: "Thankful for @ouredenlife giving me one less thing to worry about in these pandemic times 💚",
    avatar: "/assets/images/image6.png",
  },
  {
    name: "Jinchūriki of the Spirit.",
    handle: "@ms_nicelegs",
    text: "Working on projects while @ouredenlife does the chores, talk about maximum productivity >>>>>>>>>>>>>>>>\n\nPlease I'm not lazy I just don't like stress besides it's called delegating for a reason 😁",
    avatar: "/assets/images/image7.png",
  },

  {
    name: "Nengi Adoki",
    handle: "@TheNengers",
    text: "So this is an @ouredenlife STAN ACCOUNT!!!\n\nI haven't experienced ANY business in Lagos that fixed a problem so quickly. My face wash that was spilled while they did the weekly cleaning was ordered & replaced in less than 24 hrs. More like 12. Talk about customer service 🙌🏽🤍💚",
    avatar: "/assets/images/image8.png",
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
              <Text textAlign={{ md: "left" }}>
                The Wall of <VisuallyHidden>Love</VisuallyHidden>{" "}
                <Text as="span" role="presentation">
                  💚
                </Text>
              </Text>
            </Box>
            <Box flex={1}>
              <SimpleGrid
                columns={3}
                spacing={{ base: 3, md: 8 }}
                aria-label="Corporate Partners"
                alignItems={"center"}
              >
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
        </Flex>
      </Container>
    </Box>
  );
}
