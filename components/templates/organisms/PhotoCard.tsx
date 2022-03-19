import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
};

function sampleDate(date, format) {

  format = format.replace(/YYYY/, date.getFullYear());
  format = format.replace(/MM/, date.getMonth() + 1);
  format = format.replace(/DD/, date.getDate());

  return format;
}

console.log(sampleDate(new Date(), 'YYYY年MM月DD日'));

// eslint-disable-next-line react/display-name
export const PhotoCard: VFC<Props> = memo(props => {
  // const { id, albumId, title, url, thumbnailUrl } = props;
  const { id, title, imageUrl, publishedAt } = props;

  const Data = (e, format) => {
    format = format.replace(/YYYY/, e.getFullYear());
    format = format.replace(/MM/, e.getMonth() + 1);
    format = format.replace(/DD/, e.getDate());

    return format;
  }
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
            {Data(new Date(publishedAt), 'YYYY年MM月DD日')}
          </Text>
        </Stack>
      </Box>
    </Link>
  );
});
