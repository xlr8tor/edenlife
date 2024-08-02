"use client";
import {
  Container,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Stepper,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
  Progress,
  keyframes,
} from "@chakra-ui/react";
import React from "react";

const steps = [
  { id: "0", description: "Fill the form on this page" },
  { id: "1", description: "Enter your discount code" },
  { id: "2", description: "You get an Eden plan for your team" },
  { id: "3", description: "We'll set up your team's accounts" },
  { id: "4", description: "Every team member gets personalized service" },
  {
    id: "5",
    description: "You monitor/evaluate team satisfaction. (Coming soon)",
  },
];

const activeColor = "green.500";
const inactiveColor = "gray.400";
const ringScaleMin = 0.33;
const ringScaleMax = 0.66;

const pulseRing = keyframes`
    0% {
      transform: scale(${ringScaleMin});
    }
    30% {
      transform: scale(${ringScaleMax});
    }
    40%, 50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
	`;

const pulseDot = keyframes`
	0% {
    transform: scale(0.9);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.9);
  }
	`;

const HowItWorks = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 3,
    count: steps.length,
  });

  const activeStepText = steps[activeStep].description;

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;
  return (
    <Box bg="brand.800">
      <Container maxW="7xl" py={{ base: 16, md: 20 }}>
        <Heading
          fontFamily={"PT Serif"}
          textAlign={{ base: "center", md: "left" }}
        >
          How it works
        </Heading>
        <Stack display={{ base: "flex", lg: "none" }} gap={6} mt={12}>
          <Box as={Flex} justify={"center"}>
            <Image
              alt={"2 space gray Iphone 13's side by side"}
              fit={"cover"}
              align={"center"}
              src={"/assets/images/half-phone-2.png"}
            />
          </Box>
          <Stack flex={2} spacing={{ base: 5, md: 10 }} position="relative">
            <Stepper
              size="sm"
              index={activeStep}
              gap="0"
              height="50px"
              zIndex={3}
              overflow={"hidden"}
            >
              {steps.map((_, index) => (
                <Step key={index}>
                  <StepIndicator
                    as={Box}
                    sx={{
                      "[data-status=complete] &": {
                        background: "brand.100",
                        border: "none",
                        transform: "scale(0.5)",
                      },
                      "[data-status=active] &": {
                        background: "brand.100",
                        border: "none",
                        transform: "scale(0.5)",
                        position: "relative",
                        bgColor: { activeColor },
                        borderRadius: "50%",
                        _before: {
                          content: "''",
                          position: "absolute",
                          display: "block",
                          width: "400%",
                          height: "400%",
                          boxSizing: "border-box",
                          borderRadius: "50%",
                          bgColor: activeColor,
                          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                        },
                        _after: {
                          animation: `2.25s ${pulseDot} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                        },
                      },
                      "[data-status=incomplete] &": {
                        background: "gray.100",
                        border: "none",
                        transform: "scale(0.5)",
                      },
                    }}
                  ></StepIndicator>
                </Step>
              ))}
            </Stepper>
            <Progress
              value={progressPercent}
              position="absolute"
              height="3px"
              w="96%"
              zIndex={1}
              bottom={23}
              left={3}
              colorScheme={"green"}
            />
          </Stack>
          <Heading
            as="h3"
            size="lg"
            fontFamily={"PT Serif"}
            textAlign={"center"}
          >
            We&apos;ll set up your team&apos;s accounts
          </Heading>
          <Button
            size={"lg"}
            fontWeight={"semibold"}
            p={7}
            colorScheme={"green"}
            bg={"brand.100"}
            _hover={{ bg: "brand.200" }}
            w={"fit-content"}
            alignSelf={"center"}
          >
            Get Eden
          </Button>
        </Stack>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 16 }}
          direction={{ base: "column", md: "row" }}
          position={"relative"}
          margin={"auto"}
          maxW={"6xl"}
          display={{ base: "none", lg: "flex" }}
        >
          <Stack flex={2} spacing={{ base: 5, md: 10 }} position="relative">
            <Stepper
              size="sm"
              index={activeStep}
              gap="0"
              orientation="vertical"
              height="420px"
              zIndex={3}
              overflow={"hidden"}
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator
                    as={Box}
                    sx={{
                      "[data-status=complete] &": {
                        background: "brand.100",
                        border: "none",
                        transform: "scale(0.5)",
                      },
                      "[data-status=active] &": {
                        background: "brand.100",
                        mb: "1.99em",
                        border: "none",
                        transform: "scale(0.5)",
                        position: "relative",
                        bgColor: { activeColor },
                        borderRadius: "50%",
                        _before: {
                          content: "''",
                          position: "absolute",
                          display: "block",
                          width: "400%",
                          height: "400%",
                          boxSizing: "border-box",
                          borderRadius: "50%",
                          bgColor: activeColor,
                          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                        },
                        _after: {
                          animation: `2.25s ${pulseDot} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                        },
                      },
                      "[data-status=incomplete] &": {
                        background: "gray.100",
                        border: "none",
                        transform: "scale(0.5)",
                      },
                    }}
                  ></StepIndicator>
                  <Box flexShrink="5" fontFamily={"PT Serif"}>
                    <StepDescription
                      as={Text}
                      fontSize={"xl"}
                      fontWeight={step.id === "3" ? "semibold" : "medium"}
                    >
                      {step.description}
                    </StepDescription>
                  </Box>
                </Step>
              ))}
            </Stepper>
            <Progress
              value={progressPercent}
              position="absolute"
              height="3px"
              width="388px"
              transform={"rotate(90deg) translateX(-50%)"}
              zIndex={1}
              bottom={4}
              left={-182}
              colorScheme={"green"}
            />
          </Stack>
          <Box position={"absolute"} right={0} bottom={"-80px"}>
            <Image
              alt={"2 space gray Iphone 13's side by side"}
              fit={"cover"}
              align={"center"}
              src={"/assets/images/half-phone.png"}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HowItWorks;
