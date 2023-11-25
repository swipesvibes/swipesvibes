import {
  ArrowRightIcon,
  Avatar,
  AvatarFallbackText,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Checkbox,
  ChevronRightIcon,
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
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';

export default function Page() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [steps, setSteps] = useState(0);
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

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
            <TouchableOpacity onPress={pickImage}>
              <Avatar size="2xl">
                <AvatarFallbackText>Swipes Vibes</AvatarFallbackText>
              </Avatar>
            </TouchableOpacity>
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
            <DateTimePicker value={date} is24Hour={true} onChange={onChange} />
          </>
        )}

        {steps === 2 && (
          <>
            <Text>Gender</Text>
          </>
        )}

        <Button
          variant="link"
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
          }}
        >
          <ButtonText mr={6} onPress={() => setSteps(steps + 1)}>
            Next
          </ButtonText>
          <ButtonIcon>
            <ChevronRightIcon />
          </ButtonIcon>
        </Button>
      </VStack>
    </>
  );
}
