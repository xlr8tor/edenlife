"use client";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  ButtonGroup,
  VisuallyHidden,
} from "@chakra-ui/react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const FAQs: { question: string; answer: string }[] = [
  {
    question: "What is Eden?",
    answer:
      "Easy. We're bringing the convenience of room service to homes across Africa – but starting with Lagos. Home tasks are routine activities that should be outsourced, so you can focus on the things with the most impact in your life. It could be making time for work that matters, or for enjoyment. You deserve to live well without the extra effort. Some people call us the Concierge of Comfort – they're correct.",
  },
  {
    question: "A laundry service, cleaning service or food service? ",
    answer:
      "Easy. We're bringing the convenience of room service to homes across Africa – but starting with Lagos. Home tasks are routine activities that should be outsourced, so you can focus on the things with the most impact in your life. It could be making time for work that matters, or for enjoyment. You deserve to live well without the extra effort. Some people call us the Concierge of Comfort – they're correct.",
  },
  {
    question: "How does it work?",
    answer:
      "Easy. We're bringing the convenience of room service to homes across Africa – but starting with Lagos. Home tasks are routine activities that should be outsourced, so you can focus on the things with the most impact in your life. It could be making time for work that matters, or for enjoyment. You deserve to live well without the extra effort. Some people call us the Concierge of Comfort – they're correct.",
  },
  {
    question: "Who are Gardeners? ",
    answer:
      "Easy. We're bringing the convenience of room service to homes across Africa – but starting with Lagos. Home tasks are routine activities that should be outsourced, so you can focus on the things with the most impact in your life. It could be making time for work that matters, or for enjoyment. You deserve to live well without the extra effort. Some people call us the Concierge of Comfort – they're correct.",
  },
  {
    question: "How much are they good for?",
    answer:
      "Easy. We're bringing the convenience of room service to homes across Africa – but starting with Lagos. Home tasks are routine activities that should be outsourced, so you can focus on the things with the most impact in your life. It could be making time for work that matters, or for enjoyment. You deserve to live well without the extra effort. Some people call us the Concierge of Comfort – they're correct.",
  },
  {
    question: "Does my Gardener service me alone?",
    answer:
      "Easy. We're bringing the convenience of room service to homes across Africa – but starting with Lagos. Home tasks are routine activities that should be outsourced, so you can focus on the things with the most impact in your life. It could be making time for work that matters, or for enjoyment. You deserve to live well without the extra effort. Some people call us the Concierge of Comfort – they're correct.",
  },
];

const SimpleAccordion = () => {
  return (
    <Accordion allowMultiple flex={1} maxW={"2xl"} rounded="lg">
      {FAQs.map(({ question, answer }, id) => (
        <AccordionItem key={id}>
          {({ isExpanded }) => (
            <>
              <Text size="lg">
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                    fontSize={"lg"}
                  >
                    {question}
                  </Box>
                  {isExpanded ? (
                    <CiCircleMinus size={"30"} />
                  ) : (
                    <CiCirclePlus size={"30"} />
                  )}
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4}>{answer}</AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const FAQ = () => {
  return (
    <Box as="section" bg={"brand.800"}>
      <Container maxW={"7xl"} py={{ base: 24, md: 32 }}>
        <Stack
          align={"start"}
          justify={"space-between"}
          spacing={{ base: 12, md: 10 }}
          direction={{ base: "column", md: "row-reverse" }}
        >
          <Text
            fontSize={"4xl"}
            fontWeight={"bold"}
            textAlign={"center"}
            display={{ base: "block", md: "none" }}
          >
            You have questions? We have answers.
          </Text>
          <SimpleAccordion />
          <Flex
            flex={1}
            w={"full"}
            maxW={{ md: "sm" }}
            direction={"column"}
            align={"space-between"}
            gap={6}
            mt={{ base: 6, md: 0 }}
          >
            <Text
              textAlign={"center"}
              display={{ base: "none", md: "block" }}
              mb={10}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              You have questions? We have answers.
            </Text>
            <Stack align={"center"}>
              <Text fontSize={"lg"} fontWeight={"semibold"}>
                Not in Lagos?
              </Text>
              <Text textAlign={"center"}>
                We&apos;re coming to your city. Be the first to know when we
                touch down.
              </Text>
            </Stack>
            <ButtonGroup
              as={Flex}
              direction="column"
              justify={"center"}
              spacing={0}
            >
              <FormControl variant="floating" id="email" isRequired>
                <Input
                  p={7}
                  placeholder=" "
                  type="email"
                  name="email"
                  autoComplete={"on"}
                />
                {/* It is important that the Label comes after the Control due to css selectors */}
                <FormLabel htmlFor="email">First Name</FormLabel>
                {/* <FormErrorMessage>Your First name is invalid</FormErrorMessage> */}
              </FormControl>
              <FormControl isRequired>
                <VisuallyHidden>
                  <FormLabel htmlFor="city">Select your city</FormLabel>
                </VisuallyHidden>
                <Select
                  placeholder="Select your city"
                  fontSize={"md"}
                  fontWeight={"medium"}
                  size={"lg"}
                  h={"56px"}
                  mt={3}
                  id="city"
                  name="city"
                >
                  <option value="option1">Abuja</option>
                  <option value="option2">Lagos</option>
                  <option value="option3">Borno</option>
                </Select>
              </FormControl>
            </ButtonGroup>

            <Button
              size={"lg"}
              fontWeight={"semibold"}
              p={7}
              colorScheme={"green"}
              bg={"brand.100"}
              _hover={{ bg: "brand.200" }}
            >
              Send Message
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default FAQ;
