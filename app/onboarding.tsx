import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  ChevronRightIcon,
  Input,
  InputField,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity } from 'react-native';
import OnboardingStep3 from '../components/OnboardingStep3';
import Onboardingstep4 from '../components/OnboardingStep4';
import OnboardingStep2 from '../components/OnboardingStep2';
import OnboardingStep1 from '../components/OnBoardingStep1';
import { router } from 'expo-router';

export default function Page() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [steps, setSteps] = useState(0);
  const [date, setDate] = useState(new Date(1598051730000));
  const [gender, setGender] = useState();
  const [preferences, setPreferences] = useState([]);

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

  console.log(gender);

  return (
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
            Pick a username for your new account! You can always change it later
            🙌🏻
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

      {steps === 1 && <OnboardingStep1 />}

      {steps === 2 && <OnboardingStep2 callback={setGender} />}

      {steps === 3 && <OnboardingStep3 />}

      {steps === 4 && <Onboardingstep4 />}

      <Button
        variant="link"
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
        onPress={() => {
          if (steps !== 4) {
            setSteps(steps + 1);
          } else {
            setSteps(0);
            router.push('/home');
          }
        }}
      >
        <ButtonText mr={6}>Next</ButtonText>
        <ButtonIcon>
          <ChevronRightIcon />
        </ButtonIcon>
      </Button>
    </VStack>
  );
}
