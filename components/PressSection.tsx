"use client";
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Wrap,
} from "@chakra-ui/react";

const PressSection = () => {
  return (
    <Box bg={"brand.900"}>
      <Container maxW={"7xl"} py={{ base: 24, md: 32 }}>
        <Heading size={{ base: "lg", md: "xl" }} textAlign={"center"} mb={14}>
          Check us out in the press
        </Heading>
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
            alt="future africa"
          />
          <Image
            boxSize={"120px"}
            src={"/assets/icons/techpoint.svg"}
            alt="techpoint"
          />
          <Image
            boxSize={"60px"}
            src={"/assets/icons/datadog.svg"}
            alt="datadog"
          />
          <Image
            boxSize={"120px"}
            src={"/assets/icons/techcabal.svg"}
            alt="techcabal"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PressSection;
