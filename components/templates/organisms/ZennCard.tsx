import { memo, VFC } from "react";
import { Box, Flex, HStack, Icon, Image, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiTwotoneHeart } from "react-icons/ai";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  likedCount: string;
  slug: string;
  user: {
    username: string;
  }
  emoji: string;
};

type Tags = {
  name: string;
}

// eslint-disable-next-line react/display-name
export const ZennCard: VFC<Props> = memo(props => {
  // const { id, albumId, title, url, thumbnailUrl } = props;
  const { id, title, imageUrl, publishedAt, likedCount, slug, user, emoji } = props;

  const Data = (e: any, format: string) => {
    format = format.replace(/YYYY/, e.getFullYear());
    format = format.replace(/MM/, e.getMonth() + 1);
    format = format.replace(/DD/, e.getDate());

    return format;
  }
  return (
    <Link href={`https://zenn.dev/${user.username}/articles/${slug}`} replace>
      <Box
        w="100%"
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
            {emoji}{title}
          </Text>
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
              {likedCount}
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
