import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
};

// eslint-disable-next-line react/display-name
export const PhotoCard: VFC<Props> = memo(props => {
  // const { id, albumId, title, url, thumbnailUrl } = props;
  const { id, title, imageUrl, publishedAt } = props;

  return (
    <Link href={`/blog/${id}`}>
      <Box
        w="400px"
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
            boxSize="160px"
            src={imageUrl}
            m="auto"
            objectFit="cover"
          />
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
          <Text>
            { }
          </Text>
        </Stack>
      </Box>
    </Link>
  );
});
