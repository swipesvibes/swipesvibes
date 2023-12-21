import { Text, VStack } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

const OnboardingStep1 = ({ username = 'John Doe', control }: any) => {
  return (
    <VStack flex={1} pt={64} justifyContent="center" alignItems="center">
      <Text p={56} textAlign="center" bold>
        Hello “{username}” ! Let use know when is your special day 🎂
      </Text>
      <Controller
        defaultValue={new Date()}
        name="dateOfBirth"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <DateTimePicker
            testID="datePicker"
            value={value}
            mode="date"
            display="default"
            onChange={(_, selectedDate) => {
              const date = selectedDate ? new Date(selectedDate) : new Date();
              date.setHours(0);
              date.setMinutes(0);
              date.setSeconds(0);
              date.setMilliseconds(0);

              onChange(date);
            }}
          />
        )}
      />
    </VStack>
  );
};

export default OnboardingStep1;
