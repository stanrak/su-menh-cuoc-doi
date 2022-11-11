import { Text, Center } from "@chakra-ui/react";

interface Props {
  content: string;
}
const BannerShape = (props: Props) => {
  return (
    <>
      <Center my="50px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 117.29 317.11 82.54"
          width="320px"
        >
          <g>
            <polygon points="291.927,136.019 291.927,181.092 317.113,181.092 306.509,157.293 317.113,136.019  "></polygon>{" "}
            <polygon points="262.484,187.999 286.624,187.999 286.624,181.092 286.624,136.019 286.624,129.111 262.484,129.111  "></polygon>{" "}
            <polygon points="25.187,181.092 25.187,136.019 0,136.019 10.604,157.956 0,181.092  "></polygon>{" "}
            <polygon points="30.489,181.092 30.489,187.999 54.629,187.999 54.629,129.111 30.489,129.111 30.489,136.019  "></polygon>{" "}
            <polygon points="59.932,123.809 59.932,126.46 59.932,129.111 59.932,187.999 59.932,190.65 59.932,193.302 59.932,199.826    257.182,199.826 257.182,193.302 257.182,190.65 257.182,187.999 257.182,129.111 257.182,126.46 257.182,123.809 257.182,117.287    59.932,117.287  "></polygon>
          </g>
        </svg>
        <Text
          position="absolute"
          color="white"
          fontWeight="bold"
          textAlign="center"
        >
          {props.content}
        </Text>
      </Center>
    </>
  );
};

export default BannerShape;
