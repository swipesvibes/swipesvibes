import {
  Avatar,
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
            <LinearGradient
              colors={['#FFDEE9', '#B5FFFC']}
              style={{
                width: 200,
                height: 200,
                backgroundColor: '#b3d9ff',
                borderRadius: 100, // Half of height to create an oval shape
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
                transform: [{ scaleX: 1.5 }],
              }}
            >
              <Text textAlign="center">
                Hello <Text color="$purple">“Username”</Text> ! Let us know when
                is your special day 🎂
              </Text>
            </LinearGradient>
            <DateTimePicker value={date} is24Hour={true} onChange={onChange} />
          </>
        )}

        {steps === 2 && (
          <>
            <VStack flex={1} pt={64}>
              <Text p={56} textAlign="center" bold>
                Let us know you better by your gender 🌟
              </Text>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  overflow: 'hidden',
                  bottom: 275,
                  right: -75,
                  width: 200,
                  height: 200,
                  borderRadius: '100%',
                }}
              >
                <LinearGradient
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#99eeff',
                  }}
                  colors={['#FFDEE9', '#B5FFFC']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  locations={[0.4, 0.9]}
                >
                  <Text size={16} bold color="$black">
                    Male
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  overflow: 'hidden',
                  left: -60,
                  bottom: 200,
                  width: 200,
                  height: 200,
                  borderRadius: '100%',
                }}
              >
                <LinearGradient
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFDEE9',
                  }}
                  colors={['#FFDEE9', '#B5FFFC']}
                >
                  <Text p={32} size={16} bold color="$black">
                    LGBTQ and LGBTQ+
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  overflow: 'hidden',
                  bottom: -75,
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                }}
              >
                <LinearGradient
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFDEE9',
                  }}
                  colors={['#FFDEE9', '#B5FFFC']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text size={16} bold color="$black">
                    Female
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </VStack>
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
