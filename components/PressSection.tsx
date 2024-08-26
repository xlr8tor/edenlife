"use client";
import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";

const PressSection = () => {
  return (
    <Box bg={"brand.900"}>
      <Container maxW={"7xl"} py={{ base: 24, md: 32 }}>
        <Text fontSize={"4xl"} fontWeight={"bold"} textAlign={"center"} mb={14}>
          Check us out in the press
        </Text>
        <SimpleGrid
          maxW={"5xl"}
          spacing={8}
          minChildWidth="120px"
          alignItems={"center"}
          justifyItems={"center"}
          m={"0 auto"}
        >
          <Image
            boxSize={"120px"}
            src={"/assets/icons/future-africa.svg"}
            alt="Partner: Future africa publishing"
            loading="lazy"
          />
          <Image
            boxSize={"120px"}
            src={"/assets/icons/techpoint.svg"}
            alt="Partner: Techpoint Africa"
            loading="lazy"
          />
          <Image
            boxSize={"60px"}
            src={"/assets/icons/datadog.svg"}
            alt="Partner: Datadog"
            loading="lazy"
          />
          <Image
            boxSize={"120px"}
            src={"/assets/icons/techcabal.svg"}
            alt="Partner: Techcabal Nigeria"
            loading="lazy"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PressSection;
