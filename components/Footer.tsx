"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Flex,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  Image,
  useColorModeValue,
  Heading,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import AppStoreBadge from "./AppStoreBadge";
import PlayStoreBadge from "./PlayStoreBadge";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"7xl"} py={10} spacing={28}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          px={{ base: 4, md: 16, lg: 28 }}
          h={{ base: "625px", md: "initial" }}
          direction={{ base: "column-reverse", md: "row" }}
          bg={"brand.700"}
          borderRadius={"2xl"}
        >
          <Stack flex={1} spacing={3} align={{ base: "center", md: "start" }}>
            <Text
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              color={"brand.150"}
            >
              Get the app!
            </Text>
            <Text
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "lg", md: "2xl" }}
              lineHeight={2}
              color={"brand.150"}
            >
              Sign Up on the Eden Life app. Be happy.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={6}
              mt={{ base: 8, md: 4 }}
            >
              <AppStoreBadge />
              <PlayStoreBadge />
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Image
              src="/assets/images/hero-phone-2.png"
              alt=""
              position={"absolute"}
              display={{ base: "none", md: "block" }}
            />
            <Image
              src="/assets/images/hero-phone-2-mobile.png"
              alt=""
              display={{ base: "block", md: "none" }}
              position={"absolute"}
              bottom="0px"
            />
          </Flex>
        </Stack>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image src={"/assets/logo/eden-logo.svg"} alt={"Logo"} />
            </Box>
            <Box as={Stack} display={{ base: "none", md: "flex" }} spacing={4}>
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={"LinkedIn"} href={"#"}>
                  <FaLinkedin />
                </SocialButton>
              </Stack>
              <Text fontSize={"sm"}>
                © 2025 Eden Life Inc. All rights reserved.
              </Text>
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"/about"}>
              About us
            </Box>
            <Box as="a" href={"/companies"}>
              Companies
            </Box>
            <Box as="a" href={"/pricing"}>
              Pricing
            </Box>
            <Box as="a" href={"/careers"}>
              Careers
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Services</ListHeader>
            <Box as="a" href={"/services/food"}>
              Food
            </Box>
            <Box as="a" href={"/services/cleaning"}>
              Cleaning
            </Box>
            <Box as="a" href={"/services/laundry"}>
              Laundry
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Others</ListHeader>
            <Box as="a" href={"/faq"}>
              FAQs
            </Box>
            <Box as="a" href={"/blogs"}>
              Blogs
            </Box>
            <Box as="a" href={"/contact-us"}>
              Contact Us
            </Box>
            <Box as="a" href={"/terms"}>
              Terms & Conditions
            </Box>
            <Box as="a" href={"/policies"}>
              Privacy Policy
            </Box>
          </Stack>
          <Stack display={{ base: "flex", md: "none" }} spacing={4}>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"LinkedIn"} href={"#"}>
                <FaLinkedin />
              </SocialButton>
            </Stack>
            <Text fontSize={"sm"}>
              © 2025 Eden Life Inc. All rights reserved.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
