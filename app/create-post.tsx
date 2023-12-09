import {
  Button,
  Text,
  Textarea,
  TextareaInput,
  VStack,
} from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

export default function CreatePostScreen() {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    // Handle posting logic here (e.g., send the postText to a server, store it locally, etc.)
    console.log('Posted:', postText);
    // Clear the input field after posting
    setPostText('');
  };

  return (
    <VStack flex={1} p="$10" space="md">
      <TextInput
        placeholder="What's on your mind?"
        multiline
        numberOfLines={4}
        value={postText}
        onChangeText={(text) => setPostText(text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
        }}
      />

      <Textarea
        size="md"
        isReadOnly={false}
        isInvalid={false}
        isDisabled={false}
        w="100%"
      >
        <TextareaInput placeholder="Your text goes here..." />
      </Textarea>

      <Button onPress={handlePost}>
        <Text color="white">Post</Text>
      </Button>
    </VStack>
  );
}
