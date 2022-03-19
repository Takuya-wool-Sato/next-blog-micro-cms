import { memo, VFC } from "react";
import { Box, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  tag: string;
};

// eslint-disable-next-line react/display-name
export const PhotoCard: VFC<Props> = memo(props => {
  // const { id, albumId, title, url, thumbnailUrl } = props;
  const { id, title, imageUrl, publishedAt, tag } = props;

  const Data = (e, format) => {
    format = format.replace(/YYYY/, e.getFullYear());
    format = format.replace(/MM/, e.getMonth() + 1);
    format = format.replace(/DD/, e.getDate());

    return format;
  }
  return (
    <Link href={`/blog/${id}`}>
      <Box
        w={{ base: "70vw", md: "400px" }}
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.6 }}
        mb="30px"
        transition="0.3s"
      >
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            src={imageUrl}
            m="auto"
            objectFit="cover"
            w="100%"
            height="160px"
          />
          <HStack spacing={4}>
            <Tag size="sm" key="sm" variant='solid' colorScheme='blue'>
              {tag}
            </Tag>
          </HStack>
          <Text fontSize="lg" fontWeight="bold" textAlign="left">
            {title}
          </Text>
          <Text fontSize="small" textAlign="end">
            {Data(new Date(publishedAt), 'YYYY年MM月DD日')}
          </Text>
        </Stack>
      </Box>
    </Link>
  );
});
