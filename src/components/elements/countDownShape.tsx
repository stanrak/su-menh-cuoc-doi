import { Circle } from "@chakra-ui/react";
import { themeColors } from "../../assets/themeColors";
//import { themeColors } from "../src/assets/themeColors";

interface Props {
  number: number | string;
}

const CountDownShape = (props: Props) => {
  return (
    <>
      <Circle
        size="3rem"
        bg={themeColors.wine}
        borderRadius="2.5rem/2.5rem"
        fontWeight="bold"
        fontSize="lg"
        color="white"
      >
        {props.number}
      </Circle>
    </>
  );
};

export default CountDownShape;
