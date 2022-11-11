import { Flex, Spacer, Text } from "@chakra-ui/react";
import { themeColors } from "../assets/themeColors";
import { useCountdown } from "../hooks/useCountdown";
import CountDownShape from "./elements/countDownShape";
import { getNextMonday } from "../utils/getNextMonday";

const monday = getNextMonday();

export default function CountDownTimer() {
  const [days, hours, minutes, seconds] = useCountdown(monday);

  return (
    <>
      <Flex w="70%" justifyContent="center" m="auto">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CountDownShape number={days} />
          <Text fontWeight="bold" color={themeColors.grapes}>
            Ngày
          </Text>
        </Flex>
        <Spacer />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CountDownShape number={hours} />
          <Text fontWeight="bold" color={themeColors.grapes}>
            Giờ
          </Text>
        </Flex>
        <Spacer />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CountDownShape number={minutes} />
          <Text fontWeight="bold" color={themeColors.grapes}>
            Phút
          </Text>
        </Flex>
        <Spacer />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CountDownShape number={seconds} />
          <Text fontWeight="bold" color={themeColors.grapes}>
            Giây
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
