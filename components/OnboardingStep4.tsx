import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  Text,
  VStack,
} from '@gluestack-ui/themed';

const Onboardingstep4 = () => {
  const username = 'John Doe';
  return (
    <VStack flex={1} justifyContent="center" alignItems="center" space="2xl">
      <VStack justifyContent="center" alignItems="center">
        <Text>Here is a warm welcome you to “SWIPE”!🌈</Text>
        <Text>Be yourself and go share your vibes!🌟</Text>
      </VStack>

      <VStack justifyContent="center" alignItems="center" space="2xl">
        <Avatar size="xl">
          <AvatarFallbackText>{username}</AvatarFallbackText>
        </Avatar>
        <Text>{username}</Text>
      </VStack>
    </VStack>
  );
};

export default Onboardingstep4;
