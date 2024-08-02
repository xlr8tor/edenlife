import { Button, Stack, Text, Image } from "@chakra-ui/react";

export default function AppStoreBadge() {
  return (
    <Button
      leftIcon={<Image src={"/assets/icons/app_store.svg"} alt={"Apple Inc"} />}
      bg={"black"}
      color={"white"}
      py={8}
      w={"200px"}
      _hover={{ bg: "gray.800" }}
    >
      <Stack spacing={0} align={"start"} ml={2}>
        <Text fontSize={"sm"}>Download on the</Text>
        <Text fontSize={"xl"}>App Store</Text>
      </Stack>
    </Button>
  );
}
