import { color } from "framer-motion";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-36px)",
};

const components = {
  Form: {
    variants: {
      floating: {
        container: {
          _focusWithin: {
            label: {
              ...activeLabelStyles,
            },
          },
          "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
            {
              ...activeLabelStyles,
            },
          label: {
            top: 0,
            left: 0,
            zIndex: 2,
            position: "absolute",
            backgroundColor: "#F6FFFA",
            pointerEvents: "none",
            mx: 3,
            px: 1,
            my: 4,
            transformOrigin: "left top",
          },
        },
      },
    },
    baseStyle: { requiredIndicator: { color: "#AB1717" } },
  },
};

export default components;
