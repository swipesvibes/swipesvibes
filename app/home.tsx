import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  AddIcon,
  Box,
  Text,
} from '@gluestack-ui/themed';
import { Link, router } from 'expo-router';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { View } from '../components/Themed';
import { TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

export type PredictionType = {
  description: string;
  place_id: string;
  reference: string;
  matched_substrings: any[];
  tructured_formatting: Object;
  terms: Object[];
  types: string[];
};

export default function Home() {
  const [showActionsheet, setShowActionsheet] = useState(false);

  const [search, setSearch] = useState('');
  const [predictions, setPredictions] = useState<PredictionType[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<PredictionType | null>(
    null
  );

  const handleClose = () => setShowActionsheet(!showActionsheet);

  const initialRegion = {
    latitude: 13.7563, // Bangkok's latitude
    longitude: 100.5018, // Bangkok's longitude
    latitudeDelta: 0.5, // Adjust the zoom level as needed
    longitudeDelta: 0.5, // Adjust the zoom level as needed
  };

  const markerCoordinates = useMemo(
    () => ({
      latitude: selectedPlace ? initialRegion.latitude : 13.7563,
      longitude: selectedPlace ? initialRegion.longitude : 100.5018,
    }),
    [selectedPlace]
  );

  console.log(predictions);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`
      );
      if (response.data) {
        setPredictions(response.data.results);
      }
    } catch (error) {
      console.error('Error searching places:', error);
    }
  };

  const handlePredictionSelect = async (placeId: string) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`
      );
      if (response.data) {
        setSelectedPlace(response.data.result);
        setPredictions([]);
        setSearch('');
      }
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  };

  // const onPredictionTapped = async (placeId: string, description: string) => {
  //   const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/details/json?key=${env.GOOGLE_API_KEY}&place_id=${placeId}`;
  //   try {
  //     const result = await axios.request({
  //       method: 'post',
  //       url: apiUrl,
  //     });
  //     if (result) {
  //       const {
  //         data: {
  //           result: {
  //             geometry: { location },
  //           },
  //         },
  //       } = result;
  //       const { lat, lng } = location;
  //       setShowPredictions(false);
  //       setSearch({ term: description });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <View style={{ flex: 1 }}>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent maxHeight="100%" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem
            onPress={() => {
              setShowActionsheet(!showActionsheet);
              router.push('/create-post');
            }}
          >
            <ActionsheetItemText>Create post</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
      <Box>
        <Text>Home</Text>
        <Link href="..">Go back to home</Link>
      </Box>
      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={(text) => setSearch(text)}
        onSubmitEditing={handleSearch}
      />
      {predictions?.map((prediction) => (
        <TouchableOpacity
          key={prediction?.place_id}
          onPress={() => handlePredictionSelect(prediction?.place_id)}
        >
          <Text>{prediction?.description}</Text>
        </TouchableOpacity>
      ))}
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
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
        onPress={() => setShowActionsheet(!showActionsheet)}
      >
        <AddIcon color="white" />
      </TouchableOpacity>
    </View>
  );
}
