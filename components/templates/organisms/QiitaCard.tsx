import { memo, VFC } from "react";
import { Box, Flex, HStack, Icon, Image, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiTwotoneHeart } from "react-icons/ai";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  tags: [];
  likeCount: string;
};

type Tags = {
  name: string;
}

// eslint-disable-next-line react/display-name
export const QiitaCard: VFC<Props> = memo(props => {
  // const { id, albumId, title, url, thumbnailUrl } = props;
  const { id, title, imageUrl, publishedAt, tags, likeCount } = props;

  const Data = (e: any, format: string) => {
    format = format.replace(/YYYY/, e.getFullYear());
    format = format.replace(/MM/, e.getMonth() + 1);
    format = format.replace(/DD/, e.getDate());

    return format;
  }
  return (
    <Link href={`/qiita/${id}`}>
      <Box
        w={{ base: "70vw", md: "100%" }}
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.6 }}
        mb="30px"
        transition="0.3s"
        position={"relative"}
      >
        <Stack textAlign="center">
          <Text fontSize="lg" fontWeight="bold" textAlign="left">
            {title}
          </Text>
          <HStack spacing={4}>
            {tags.map((tag: Tags) => (
              <Tag size="sm" key="sm" variant='solid' colorScheme='blue'>
                {tag.name}
              </Tag>
            ))
            }
          </HStack>
          {/* <Image
            borderRadius="full"
            src={imageUrl}
            m="auto"
            objectFit="cover"
            w="60px"
            height="60px"
            borderRight={"8px"}
            position="absolute"
          /> */}
          <Flex justify="space-between">
            <Flex align={"center"}>
              <Icon as={AiTwotoneHeart} mr={"4px"} />
              {likeCount}
            </Flex>
            <Text fontSize="small" textAlign="end">
              {Data(new Date(publishedAt), 'YYYY年MM月DD日')}
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Link >
  );
});
