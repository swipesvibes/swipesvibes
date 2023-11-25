import {
  Avatar,
  AvatarFallbackText,
  Box,
  Button,
  ButtonText,
  Checkbox,
  CircleIcon,
  EditIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabelText,
  Input,
  InputField,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Controller } from 'react-hook-form';

export default function Page() {
  const [avatar, setAvatar] = React.useState<string | null>(null);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [steps, setSteps] = React.useState(0);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <>
      <VStack
        flex={1}
        justifyContent="center"
        alignItems="center"
        height="$full"
        space="xl"
        p={16}
      >
        {steps === 0 && (
          <>
            <Avatar size="2xl" onPress={pickImage}>
              <AvatarFallbackText>CHAIWAT TRISUWAN</AvatarFallbackText>
            </Avatar>
            <Text textAlign="center">
              Pick a username for your new account! You can always change it
              later 🙌🏻
            </Text>
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Username" />
            </Input>
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Password" />
            </Input>
          </>
        )}

        {steps === 1 && (
          <>
            <Text textAlign="center">
              Hello <Text color="$purple">“Username”</Text> ! Let us know when
              is your special day 🎂
            </Text>
          </>
        )}

        {steps === 2 && (
          <>
            <Text>Gender</Text>
          </>
        )}
        <Button>
          <ButtonText onPress={() => setSteps(steps + 1)}>Next</ButtonText>
        </Button>
      </VStack>
    </>
  );
}
