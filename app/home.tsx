import { AddIcon, Box, Text } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { View } from '../components/Themed';
import { TextInput, TouchableOpacity } from 'react-native';

export default function Home() {
  const initialRegion = {
    latitude: 13.7563, // Bangkok's latitude
    longitude: 100.5018, // Bangkok's longitude
    latitudeDelta: 0.5, // Adjust the zoom level as needed
    longitudeDelta: 0.5, // Adjust the zoom level as needed
  };

  const markerCoordinates = {
    latitude: 13.7563,
    longitude: 100.5018,
  };

  return (
    <View style={{ flex: 1 }}>
      <Box>
        <Text>Home</Text>
        <Link href="..">Go back to home</Link>
      </Box>
      <TextInput
        placeholder="Search here..."
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          padding: 8,
          borderRadius: 5,
        }}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        style={{ flex: 1 }}
      >
        <Marker
          coordinate={markerCoordinates}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
        onPress={() => {
          // Handle FAB press
          console.log('FAB Pressed');
        }}
      >
        <AddIcon name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
