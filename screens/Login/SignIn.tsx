import React, { useState } from 'react';
import {
  Center,
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
  Link,
  useToast,
  Toast,
  Box,
  CheckIcon,
  Checkbox,
  Icon,
  ToastTitle,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputIcon,
  FormControlHelper,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  ButtonText,
  ButtonIcon,
  Image,
  Divider,
  ArrowLeftIcon,
  Heading,
  LinkText,
  InputSlot,
} from '@gluestack-ui/themed';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Keyboard } from 'react-native';
import { AlertTriangle, EyeIcon, EyeOffIcon } from 'lucide-react-native';

import { GoogleIcon, FacebookIcon } from './assets/Icons/Social';

import GuestLayout from '../../layouts/GuestLayout';
import StyledExpoRouterLink from '../../components/StyledExpoRouterLink';

import { styled } from '@gluestack-style/react';
import supabase from '../../utils/supabase';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';

const StyledImage = styled(Image, {
  props: {
    style: {
      height: 40,
      width: 320,
    },
  },
});

const signInSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z
    .string()
    .min(6, 'Must be at least 8 characters in length')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character'
    ),
  rememberme: z.boolean().optional(),
});

type SignInSchemaType = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const toast = useToast();

  const onSubmit = (_data: SignInSchemaType) => {
    toast.show({
      placement: 'bottom right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <ToastTitle>Signed in successfully</ToastTitle>
          </Toast>
        );
      },
    });
    reset();
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  GoogleSignin.configure({
    iosClientId:
      '811144421713-lgup0q377lnvj9jul6apvc02a0s1io2v.apps.googleusercontent.com',
  });

  return (
    <VStack justifyContent="space-between">
      {/* <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            if (userInfo.idToken) {
              const { data } = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: userInfo.idToken,
              });
              if (data) {
                router.push('/onboarding');
              }
            } else {
              throw new Error('no ID token present!');
            }
          } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
          }
        }}
      /> */}
    </VStack>
  );
};

function SideContainerWeb() {
  return (
    <Center
      flex={1}
      bg="$primary500"
      sx={{
        _dark: { bg: '$primary500' },
      }}
    >
      <StyledImage
        w="$80"
        h="$10"
        alt="gluestack-ui Pro"
        resizeMode="contain"
        source={require('./assets/images/gluestackUiProLogo_web_light.svg')}
      />
    </Center>
  );
}

function MobileHeader() {
  return (
    <VStack px="$3" mt="$4.5" space="md">
      <HStack space="md" alignItems="center">
        <StyledExpoRouterLink href="..">
          <Icon
            as={ArrowLeftIcon}
            color="$textLight50"
            sx={{ _dark: { color: '$textDark50' } }}
          />
        </StyledExpoRouterLink>
        <Text
          color="$textLight50"
          sx={{ _dark: { color: '$textDark50' } }}
          fontSize="$lg"
        >
          Sign In
        </Text>
      </HStack>
      <VStack space="xs" ml="$1" my="$4">
        <Heading color="$textLight50" sx={{ _dark: { color: '$textDark50' } }}>
          Welcome back
        </Heading>
        <Text
          fontSize="$md"
          fontWeight="normal"
          color="$primary300"
          sx={{
            _dark: { color: '$textDark400' },
          }}
        >
          Sign in to continue
        </Text>
      </VStack>
    </VStack>
  );
}

const Main = () => {
  return (
    <>
      <Box px="$4" py="$8" flex={1}>
        <Heading display="none" mb="$8">
          Sign in to continue
        </Heading>
        <SignInForm />
      </Box>
    </>
  );
};

const SignIn = () => {
  return (
    <GuestLayout>
      <Box display="none" sx={{ '@md': { display: 'flex' } }} flex={1}>
        <SideContainerWeb />
      </Box>
      <Main />
    </GuestLayout>
  );
};

export default SignIn;
