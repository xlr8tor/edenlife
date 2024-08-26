"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Container,
  Stack,
  Text,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  VisuallyHidden,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { ChevronDownIcon, InfoOutlineIcon } from "@chakra-ui/icons";

const Form2 = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    firstNameRef.current?.focus();
  }, [firstNameRef]);

  return (
    <>
      <Flex direction={{ base: "column", md: "row" }}>
        <FormControl mr="5%">
          <FormLabel
            htmlFor="first-name"
            fontWeight={"normal"}
            mb={1}
            fontSize={"sm"}
          >
            Contact Person&apos;s First Name
            <Text as="span" color="brand.260">
              *
            </Text>
          </FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            ref={firstNameRef}
            py={6}
            required
            autoComplete="on"
          />
        </FormControl>

        <FormControl mt={{ base: "3%", md: "0" }}>
          <FormLabel
            htmlFor="last-name"
            fontWeight={"normal"}
            mb={1}
            fontSize={"sm"}
          >
            Contact Person&apos;s Last Name
            <Text as="span" color="brand.260">
              *
            </Text>
          </FormLabel>
          <Input
            id="last-name"
            placeholder="Last name"
            py={6}
            required
            autoComplete="on"
          />
        </FormControl>
      </Flex>
      <FormControl mt="3%">
        <FormLabel htmlFor="email" fontWeight={"normal"} mb={1} fontSize={"sm"}>
          Contact Person&apos;s Email address
          <Text as="span" color="brand.260">
            *
          </Text>
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          py={6}
          required
          autoComplete="on"
        />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>
      <FormControl mt="3%">
        <FormLabel
          htmlFor="job-role"
          fontWeight={"normal"}
          mb={1}
          fontSize={"sm"}
        >
          Contact Person&apos;s Job Role
          <Text as="span" color="brand.260">
            *
          </Text>
        </FormLabel>
        <Input
          id="job-role"
          placeholder="Enter job role"
          py={6}
          required
          autoComplete="on"
        />
      </FormControl>
      <FormControl mt="3%">
        <FormLabel
          htmlFor="phone-number"
          fontWeight={"normal"}
          mb={1}
          fontSize={"sm"}
        >
          Contact Person&apos;s Phone Number
          <Text as="span" color="brand.260">
            *
          </Text>
        </FormLabel>
        <Input
          id="phone-number"
          placeholder="+441234567889"
          py={6}
          required
          autoComplete="on"
        />
      </FormControl>
      <FormControl mt="3%">
        <FormLabel
          htmlFor="phone-number"
          fontWeight={"normal"}
          mb={1}
          fontSize={"sm"}
        >
          Anything else you&apos;d like us to know?
        </FormLabel>
        <Text
          as={"textarea"}
          placeholder="Type here"
          rows={5}
          w={"full"}
          p={3}
          border={"1px solid"}
          borderColor={"gray.200"}
          borderRadius={"lg"}
        />
      </FormControl>
    </>
  );
};

const Form1 = () => {
  const services = [
    "Team Lunch",
    "Team Laundry",
    "Team Home Cleaning",
    "Team Careboxes",
  ] as const;
  type ServicesType = (typeof services)[number];
  const [selectedOptions, setSelectedOptions] = useState<ServicesType[]>([]);

  const handleCheckboxChange = (e: React.MouseEvent, value: ServicesType) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <FormControl mr="5%">
        <FormLabel
          htmlFor="company-name"
          fontWeight={"normal"}
          mb={1}
          fontSize={"sm"}
        >
          Company Name
          <Text as="span" color="brand.260">
            *
          </Text>
        </FormLabel>
        <Input
          id="company-name"
          placeholder="Enter company name"
          py={6}
          required
          autoComplete="on"
        />
      </FormControl>
      <FormControl mt="3%">
        <FormLabel
          htmlFor="employee-count"
          fontWeight={"normal"}
          mb={1}
          fontSize={"sm"}
        >
          Number of Employees
          <Text as="span" color="brand.260">
            *
          </Text>
        </FormLabel>
        <NumberInput>
          <NumberInputField
            placeholder="Enter number"
            id="employee-count"
            py={6}
            required
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl id="dropdown-checkbox" mt="3%">
        <FormLabel
          htmlFor="services"
          mb={1}
          fontWeight={"normal"}
          fontSize={"sm"}
        >
          What plans will you like for your team?
          <Text as="span" color="brand.260">
            *
          </Text>
        </FormLabel>
        <input type="hidden" id="services" />
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            w={"full"}
            textAlign={"left"}
            py={6}
            fontWeight={"normal"}
          >
            Select services
          </MenuButton>
          <MenuList>
            <MenuGroup>
              {services.map((option, id) => (
                <MenuItem
                  key={option}
                  onClick={(e) => handleCheckboxChange(e, option)}
                >
                  <VisuallyHidden>
                    <label htmlFor={"option" + id}>Option: </label>
                  </VisuallyHidden>
                  <Checkbox
                    id={"option" + id}
                    isChecked={selectedOptions.includes(option)}
                  >
                    {option}
                  </Checkbox>
                </MenuItem>
              ))}
            </MenuGroup>
          </MenuList>
        </Menu>
      </FormControl>

      <FormControl mt="3%">
        <FormLabel
          htmlFor="discount-code"
          fontWeight={"normal"}
          mb={1}
          fontSize={"sm"}
        >
          Discount Code (if any)
        </FormLabel>
        <Input id="discount-code" py={6} />
      </FormControl>
      <Box bg="brand.230" mt={"3%"}>
        <Flex
          border={"1px solid"}
          borderColor={"brand.220"}
          p={4}
          borderRadius={"lg"}
          gap={4}
        >
          <InfoOutlineIcon color={"brand.240"} mt={1} />
          <Text>
            Enjoy a <em>15% discount</em> on all our services when you use the
            code <em>WORKERSDAY</em> to sign up for your team. <br />
            This offer lasts until the <em>8th of May 2024</em>
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);

  return (
    <Box bg="brand.250">
      <Container maxW="7xl" py={{ base: 20, md: 20 }}>
        <Box
          borderWidth="1px"
          rounded="lg"
          maxWidth={800}
          px={{ base: 3, md: 24 }}
          py={{ base: 10, md: 16 }}
          m="auto"
          as="form"
          bg="white"
        >
          <Stack textAlign={"center"} align={"center"} spacing={4}>
            <Heading fontFamily={"PT Serif"} fontSize={"3xl"}>
              Get Eden Life for employee benefits that go the{" "}
              <Text as="span" color="brand.100">
                extra mile
              </Text>
              .
            </Heading>
            <Text maxW={"md"}>
              Hi! We need the following details to reach out to you about the
              next steps. Let&apos;s get started!
            </Text>
          </Stack>
          <Progress
            hasStripe
            value={progress}
            my="5%"
            mx="5%"
            isAnimated
            borderRadius={"full"}
            colorScheme="cyan"
          ></Progress>

          {step === 1 ? <Form1 /> : <Form2 />}
          <ButtonGroup mt="5%" w="100%">
            <Flex
              w="full"
              justifyContent="space-between"
              direction={"column-reverse"}
              gap={3}
            >
              <Flex w="full" gap={3}>
                {!(step == 1) && (
                  <Button
                    onClick={() => {
                      setStep(step - 1);
                      setProgress(progress - 50);
                    }}
                    isDisabled={step === 1}
                    colorScheme="teal"
                    variant="solid"
                    w="full"
                    fontWeight={"semibold"}
                    p={7}
                  >
                    Go Back
                  </Button>
                )}
                {step == 1 && (
                  <Button
                    w="full"
                    fontWeight={"semibold"}
                    p={7}
                    colorScheme={"green"}
                    bg={"brand.100"}
                    _hover={{ bg: "brand.200" }}
                    onClick={() => {
                      setStep(step + 1);
                      setProgress(100);
                    }}
                  >
                    Next
                  </Button>
                )}
              </Flex>
              {step === 2 ? (
                <Button
                  w="full"
                  fontWeight={"semibold"}
                  p={7}
                  colorScheme={"green"}
                  bg={"brand.100"}
                  onClick={() => {
                    toast({
                      title: "Account created.",
                      description: "We've created your account for you.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Get Started!
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
      </Container>
    </Box>
  );
}
