import { memo, VFC } from "react";
import { Box, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  tags: [];
};

// eslint-disable-next-line react/display-name
export const QiitaCard: VFC<Props> = memo(props => {
  // const { id, albumId, title, url, thumbnailUrl } = props;
  const { id, title, imageUrl, publishedAt, tags } = props;

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
            {tags.map((tag) => (
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
          <Text fontSize="small" textAlign="end">
            {Data(new Date(publishedAt), 'YYYY年MM月DD日')}
          </Text>
        </Stack>
      </Box>
    </Link >
  );
});
