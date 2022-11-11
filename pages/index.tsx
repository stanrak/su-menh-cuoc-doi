import {
  chakra,
  Flex,
  Text,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  Center,
  Divider,
  Link,
  Heading,
  HStack,
  useToast,
  Container,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { options } from "../src/assets/places";
import studybg from "../src/assets/studybg.svg";
import { themeColors } from "../src/assets/themeColors";
import BannerShape from "../src/components/elements/bannerShape";
import StarShape from "../src/components/elements/starShape";
import DateFormat from "../src/components/elements/dateFormat";
import { getNextMonday } from "../src/utils/getNextMonday";
import Head from "next/head";

const CountDownTimer = dynamic(import("../src/components/CountDownTimer"), {
  ssr: false,
});

const Underline = ({ children }: { children: React.ReactElement | string }) => (
  <chakra.span
    bgImage="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
    bgRepeat="no-repeat"
    bgSize="100% 0.2em"
    bgPosition="0 88%"
    transition="background-size 0.25s ease-in"
    _hover={{
      bgSize: "100% 88%",
    }}
  >
    {children}
  </chakra.span>
);

const Home: NextPage = () => {
  const toast = useToast();
  const router = useRouter();
  const ref = router.query.ref;

  const scrollToView = () => {
    window?.document?.getElementById("registration")?.scrollIntoView();
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      phone: { value: number };
      age: { value: number };
      occupation: { value: string };
      place: { value: number };
      time: { value: number };
    };

    const { name, phone, age, occupation, place, time } = target;

    toast({
      position: "top",
      title: `Xin chúc mừng ${name.value}`,
      description:
        "Bạn đã đăng ký thành công ! Hẹn gặp lại bạn vào buổi chia sẻ.",
      status: "success",
      duration: 7000,
      isClosable: true,
    });

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        phone: phone.value,
        age: age.value,
        occupation: occupation.value,
        place: place.value,
        time: time.value,
        day: getNextMonday().toISOString(),
        ref_id: ref || 0,
      }),
    });

    // @ts-ignore
    e.target.reset();
  };

  return (
    <>
      <Head>
        <title>Sứ mệnh cuộc đời</title>
        <meta property="og:title" content="Sứ mệnh cuộc đời" />
        <meta
          property="og:description"
          content="Gieo hạt miễn phí. Thấu hiểu bản thân, hiểu biết mục đích sống thực sự. Khai giảng ..."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sumenhcuocdoi.quest" />
        <meta property="og:image" content="/sumenhcuocdoi.png" />
      </Head>
      <Container w={[350, 478, 766, 990]}>
        <Flex
          justifyContent="end"
          mr="12px"
          pt="12px"
          color={themeColors.grapes}
        >
          <HStack spacing="12px">
            <Link href="#registration">
              <Underline>Giá trị</Underline>
            </Link>
            <Link href="#registration">
              <Underline>Đăng ký</Underline>
            </Link>
          </HStack>
        </Flex>
        <BannerShape content="GIEO HẠT MIỄN PHÍ" />
        <Box mt="2rem">
          <Heading
            as="h1"
            size="xl"
            color={themeColors.grapes}
            fontWeight="extrabold"
            textAlign="center"
            lineHeight="1.5"
          >
            TRUY TÌM
            <br />
            <chakra.span color={themeColors.wine}>SỨ MỆNH CUỘC ĐỜI</chakra.span>
          </Heading>
        </Box>
        <Text
          color={themeColors.grapes}
          fontWeight="normal"
          textAlign="center"
          fontStyle="italic"
        >
          Thấu hiểu bản thân, hiểu biết mục đích sống thực sự
        </Text>
        <Center my="3rem">
          <Box
            bg={themeColors.grapes}
            w="18rem"
            p="1.2rem"
            color="white"
            borderRadius="1rem"
          >
            <Text fontWeight="bold">
              &diams;&nbsp;&nbsp;Khai giảng ngày:{" "}
              <chakra.span fontWeight="bold">
                <DateFormat />
              </chakra.span>
            </Text>
            <Text>
              &diams;&nbsp;&nbsp;Thời gian:{" "}
              <chakra.span fontWeight="bold">20h30</chakra.span>
            </Text>
            <Text>&diams;&nbsp;&nbsp;Địa điểm: Online qua zoom</Text>
            <Text>
              &diams;&nbsp;&nbsp;Học phí:{" "}
              <chakra.span fontWeight="bold">Miễn phí 100%</chakra.span>
            </Text>
          </Box>
        </Center>
        <Center my="30px">
          <Link
            px="1.5rem"
            py="0.75rem"
            color="white"
            fontWeight="bold"
            bg={themeColors.wine}
            borderRadius="2xl"
            boxShadow="dark-lg"
            onClick={scrollToView}
          >
            ĐĂNG KÝ NGAY
          </Link>
        </Center>
        <Center my="4rem">
          <Box w="24rem">
            <Image src={studybg} alt="bg" />
          </Box>
        </Center>
        <Divider
          orientation="horizontal"
          borderColor={themeColors.wine}
          my="4rem"
        />
        <Box
          bg={themeColors.grapes}
          w="18rem"
          p="1rem"
          color="white"
          fontWeight="bold"
          textAlign="center"
          m="4rem auto"
        >
          BẠN SẼ NHẬN ĐƯỢC GÌ?
        </Box>
        <Box px="2rem" color={themeColors.grapes}>
          <Box my="2rem">
            <Text fontWeight="extrabold" textDecor={"underline"}>
              1. LÀM CHỦ TƯ DUY - BÍ MẬT CỦA SỰ KHÔN NGOAN
            </Text>
            <Text fontSize={"18px"} fontWeight="bold">
              Vì sao bạn cố gắng mãi mà không thành công?
            </Text>
            <Text fontSize={"18px"}>
              &quot;Có ai như một người khôn ngoan chăng?
              <br />
              Có ai có tri thức để có thể giải nghĩa những sự việc ở đời chăng?
              <br />
              Sự khôn ngoan làm nét mặt của người khôn ngời sáng, và vẻ cứng rắn
              trên gương mặt của người ấy cũng dịu đi&quot;
              <br />
            </Text>
            <Text textAlign="end" fontSize={"18px"}>
              - Châm ngôn -
            </Text>
          </Box>
          <Box my="2rem">
            <Text fontWeight="extrabold" textDecor={"underline"}>
              2. ĐÁNH THỨC Ý NGHĨA CUỘC ĐỜI
            </Text>
            <Text fontSize={"18px"}>
              Bí mật của sự bình an, hạnh phúc giữa thời kỳ đầy sóng gió
            </Text>
          </Box>
          <Box my="2rem">
            <Text fontWeight="extrabold" textDecor={"underline"}>
              3. GIẢI ĐÁP NHỮNG CÂU HỎI LỚN VÀ KINH ĐIỂN VỀ TÂM LINH
            </Text>
            <Text fontSize={"18px"}>
              Đi tìm lẽ thật TÔI LÀ AI? TÔI TỪ ĐÂU ĐẾN VÀ ĐI ĐÂU VỀ ĐÂU?
            </Text>
          </Box>
          <Box my="2rem">
            <Text fontWeight="extrabold" textDecor={"underline"}>
              4. KHÁM PHÁ SỨ MỆNH CUỘC ĐỜI ĐÃ BỊ ẨN GIẤU NHIỀU NĂM QUA
            </Text>
            <Text fontSize={"18px"}>
              Một khóa học trọn vẹn mà không phải mất thời gian đi từ phương
              Đông hay phương Tây tìm kiếm nữa.
            </Text>
          </Box>
        </Box>
        <StarShape content='"CUỘC SỐNG LUÔN ĐONG ĐẦY NHỮNG ĐIỀU TỐT ĐẸP, TRONG ĐÓ CÓ CẢ BẠN."' />
        <Divider
          orientation="horizontal"
          borderColor={themeColors.wine}
          my="50px"
        />
        <Box
          bg={themeColors.grapes}
          w="18rem"
          p="1rem"
          color="white"
          fontWeight="bold"
          textAlign="center"
          m="2.5rem auto"
        >
          ĐĂNG KÝ THAM GIA
        </Box>

        <CountDownTimer />
        <form id="registration" onSubmit={handleSubmit}>
          <Box
            mt="50px"
            py="24px"
            px="24px"
            bg={themeColors.grapes}
            justifyContent="center"
            borderWidth="1px"
            borderRadius="12px"
          >
            <FormControl>
              <FormLabel htmlFor="name" color="white">
                Họ tên:{" "}
              </FormLabel>
              <Input
                id="name"
                placeholder="Tên của bạn"
                bg="white"
                color={themeColors.grapes}
                type="text"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel color="white" htmlFor="phone" mt="3">
                Số điện thoại:{" "}
              </FormLabel>
              <Input
                id="phone"
                placeholder="Số điện thoại của bạn"
                bg="white"
                color={themeColors.grapes}
                type="number"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel color="white" htmlFor="age" mt="3">
                Tuổi:{" "}
              </FormLabel>
              <Input
                id="age"
                placeholder="Tuổi của bạn"
                bg="white"
                color={themeColors.grapes}
                type="number"
                min={10}
                max={100}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel color="white" htmlFor="occupation" mt="3">
                Nghề nghiệp:{" "}
              </FormLabel>
              <Input
                id="occupation"
                placeholder="Nghề nghiệp của bạn"
                bg="white"
                color={themeColors.grapes}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel color="white" htmlFor="place" mt="3">
                Nơi sống:{" "}
              </FormLabel>
              <Select
                id="place"
                placeholder="Tỉnh thành"
                bg="white"
                color={themeColors.grapes}
                required
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel color="white" htmlFor="time" mt="3">
                Thời gian:{" "}
              </FormLabel>
              <Select id="time" bg="white" color={themeColors.grapes} required>
                <option value="20:30">20:30</option>
              </Select>
            </FormControl>
          </Box>
          <Center mb="32px" mt="16px">
            <Button
              px="24px"
              py="12px"
              color="white"
              fontSize="18px"
              fontWeight="bold"
              bg={themeColors.wine}
              borderRadius="xl"
              boxShadow="dark-lg"
              type="submit"
            >
              GỬI ĐĂNG KÝ
            </Button>
          </Center>
        </form>
      </Container>
    </>
  );
};

export default Home;
