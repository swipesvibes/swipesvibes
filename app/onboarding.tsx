import {
  Avatar,
  AvatarFallbackText,
  Button,
  ButtonIcon,
  ButtonText,
  ChevronRightIcon,
  Input,
  InputField,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native';
import OnboardingStep3 from '../components/OnboardingStep3';
import Onboardingstep4 from '../components/OnboardingStep4';
import OnboardingStep2 from '../components/OnboardingStep2';
import OnboardingStep1 from '../components/OnBoardingStep1';
import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { authService, userService } from '../services';

export default function Page() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [steps, setSteps] = useState(0);
  const [gender, setGender] = useState('male');

  const { handleSubmit, control } = useForm();

  const onClickNext = async (data: any) => {
    let newStep = steps + 1;
    let error = false;
    if (steps === 0) {
      try {
        const { signup } = await authService.signup({
          email: data.email,
          password: data.password,
        });
        if (!signup) {
          // router.push('/home');
          // return;
        }
      } catch (error) {
        error = true;
      }
    } else if (steps >= 1 && steps <= 3) {
      if (steps === 3) {
        try {
          await userService.update({
            ...data,
            gender: (gender ?? '').toUpperCase(),
            preferences: data.preferences.map((i: string) => i.toUpperCase()),
          });
        } catch (error) {
          error = true;
        }
      }
    } else {
      newStep = 0;
      router.push('/home');
    }

    if (!error) {
      setSteps(newStep);
    }
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
          <Controller
            defaultValue=""
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant="outline"
                size="md"
                // isDisabled={false}
                // isInvalid={false}
                // isReadOnly={false}
              >
                <InputField
                  placeholder="Email"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              </Input>
            )}
          />
          <Controller
            defaultValue=""
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant="outline"
                size="md"
                // isDisabled={false}
                // isInvalid={false}
                // isReadOnly={false}
              >
                <InputField
                  placeholder="Password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  type="password"
                />
              </Input>
            )}
          />
        </>
      )}

      {steps === 1 && <OnboardingStep1 control={control} />}

      {steps === 2 && <OnboardingStep2 callback={setGender} />}

      {steps === 3 && <OnboardingStep3 control={control} />}

      {steps === 4 && <Onboardingstep4 />}

      <Button
        variant="link"
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
        onPress={handleSubmit(onClickNext)}
      >
        <ButtonText mr={6}>Next</ButtonText>
        <ButtonIcon>
          <ChevronRightIcon />
        </ButtonIcon>
      </Button>
    </VStack>
  );
}
