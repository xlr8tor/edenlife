import { AspectRatio, Box, Container, Text, Stack } from "@chakra-ui/react";

const AboutVideo = () => {
  return (
    <Box bg={"brand.250"}>
      <Container
        as={Stack}
        spacing={{ base: 12, md: 10 }}
        maxW={"7xl"}
        py={{ base: 16, md: 20 }}
      >
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          textAlign={{ base: "center", md: "left" }}
        >
          Why Eden?
        </Text>
        <Box borderRadius={"lg"} overflow="hidden">
          <AspectRatio ratio={{ base: 5 / 4, md: 16 / 9 }}>
            <iframe
              name="why eden"
              src="https://www.youtube.com/embed/orIW65OBXag?si=Ub46qf5Aueu_9Edy"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              width="100%"
              height="100%"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </AspectRatio>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutVideo;
