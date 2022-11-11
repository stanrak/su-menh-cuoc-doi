import { Text, Center } from "@chakra-ui/react";

interface Props {
  content: string;
}

const DiamondShape = (props: Props) => {
  return (
    <>
      <Center>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50%"
          height="50%"
          preserveAspectRatio="none"
          viewBox="0 0 378.41 72.06"
          fill="rgba(4, 38, 56, 1.0)"
        >
          <polygon points="362.56 72.06 15.85 72.06 0 36.45 15.85 0 362.56 0 378.41 36.45 362.56 72.06"></polygon>
        </svg>
        <Text position="absolute" color="white" fontWeight="bold">
          {props.content}
        </Text>
      </Center>
    </>
  );
};

export default DiamondShape;
