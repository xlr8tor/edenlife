"use client";
import {
  Avatar,
  chakra,
  Flex,
  Stack,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface TestimonialCardProps {
  name: string;
  handle: string;
  text: string;
  avatar: string;
  index: number;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, handle, text, avatar, index } = props;

  const parts = text.split(/(@ouredenlife)/);
  return (
    <Flex
      boxShadow={"lg"}
      maxW={"640px"}
      direction={"column"}
      width={"full"}
      rounded={"xl"}
      p={5}
      justifyContent={"space-between"}
      bg={"white"}
      gap={3}
    >
      <Flex gap={3}>
        <Avatar src={avatar} size="lg" name={name + " profile picture"} />
        <Stack align={"start"} justify={"center"} spacing={1}>
          <Text>{name}</Text>
          <Text fontSize={"sm"} color={"brand.200"} fontWeight={"bold"}>
            {handle}
          </Text>
        </Stack>
      </Flex>
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <Text>
          {parts.map((part, index) => (
            <Text
              as="span"
              key={index}
              color={part === "@ouredenlife" ? "brand.200" : "inherit"}
              fontWeight={part === "@ouredenlife" ? "medium" : "inherit"}
              fontSize={"sm"}
            >
              {part}
            </Text>
          ))}
        </Text>
      </Flex>
    </Flex>
  );
}

export default TestimonialCard;
