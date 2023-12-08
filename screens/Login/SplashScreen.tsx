import React from 'react';
import {
  Box,
  VStack,
  Button,
  Image,
  Center,
  ButtonText,
  Text,
} from '@gluestack-ui/themed';

import GuestLayout from '../../layouts/GuestLayout';
import StyledExpoRouterLink from '../../components/StyledExpoRouterLink';

import { styled } from '@gluestack-style/react';

import { Link } from 'expo-router';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const StyledImage = styled(Image, {
  '@sm': {
    props: {
      style: {
        height: 40,
        width: 320,
      },
    },
  },
  '@md': {
    props: {
      style: {
        height: 141,
        width: 275,
      },
    },
  },
});

// to render login and sign up buttons
function ActionButtons() {
  return (
    <VStack
      space="xs"
      mt="$10"
      sx={{
        '@md': {
          mt: '$12',
        },
      }}
    >
      <Button
        sx={{
          ':hover': {
            bg: '$backgroundLight100',
          },
        }}
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        backgroundColor="$backgroundLight0"
      >
        <StyledExpoRouterLink href="/login">
          <ButtonText
            fontWeight="$bold"
            textDecorationLine="none"
            color="$primary500"
          >
            LOGIN
          </ButtonText>
        </StyledExpoRouterLink>
      </Button>

      <Button
        sx={{
          ':hover': {
            bg: '$backgroundLight0',
            _text: {
              color: '$primary500',
            },
          },
        }}
        my="$4"
        size="md"
        variant="outline"
        borderColor="$borderLight0"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <StyledExpoRouterLink href="/signup">
          <ButtonText textDecorationLine="none" color="$textLight50">
            SIGN UP
          </ButtonText>
        </StyledExpoRouterLink>
      </Button>
    </VStack>
  );
}

function HeaderLogo() {
  return (
    <Box alignItems="center" justifyContent="center">
      <StyledImage
        alt="gluestack-ui Pro"
        resizeMode="contain"
        source={require('./assets/images/gluestackUiProLogo_web_light.svg')}
        sx={{
          '@md': {
            display: 'flex',
          },
        }}
        display="none"
      />

      <StyledImage
        sx={{
          '@md': {
            display: 'none',
          },
        }}
        alt="gluestack-ui Pro"
        display="flex"
        source={require('./assets/images/gluestackUiProLogo_mobile.png')}
      />
    </Box>
  );
}

export default function SplashScreen() {
  return (
    // Wrapper component includes the <GluestackUIProvider></GluestackUIProvider>
    // place GluestackUIProvider in your app root accordingly
    // remove Wrapper tag from here in your codebase

    <Center w="$full" flex={1}>
      <Box
        maxWidth="$508"
        w="$full"
        minHeight="$authcard"
        sx={{
          '@md': {
            // h: '$authcard',
            px: '$8',
          },
        }}
        px="$4"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* <Image
          alt="swipesvibes"
          source={{
            uri: './assets/images/logo.png',
          }}
        /> */}

        <Box my={24}>
          <Center>
            <Text size="5xl" fontWeight="700">
              Swipe
            </Text>
            <Text size="xl">“Share your vibes with swipe”</Text>
          </Center>
        </Box>

        <Link href="/login" asChild>
          <Button size="xl">
            <Text color="$white">Start! 🌟</Text>
          </Button>
        </Link>
      </Box>
    </Center>
  );
}
