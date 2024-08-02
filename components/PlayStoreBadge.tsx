import { Button, Stack, Text, Image } from "@chakra-ui/react";

export default function PlayStoreBadge() {
  return (
    <Button
      leftIcon={
        <Image src={"/assets/icons/play_store.svg"} alt={"Google Play Store"} />
      }
      bg={"black"}
      color={"white"}
      py={8}
      w={"200px"}
      _hover={{ bg: "gray.800" }}
    >
      <Stack spacing={0} align={"start"} ml={2}>
        <Text fontSize={"sm"}>GET IT ON</Text>
        <Text fontSize={"xl"}>Google Play</Text>
      </Stack>
    </Button>
  );
}
