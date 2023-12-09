import { Text, VStack } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

const OnboardingStep1 = ({ username = 'John Doe' }: any) => {
  const [date, setDate] = useState(new Date());
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  return (
    <VStack flex={1} pt={64} justifyContent="center" alignItems="center">
      <Text p={56} textAlign="center" bold>
        Hello “{username}” ! Let use know when is your special day 🎂
      </Text>
      <DateTimePicker
        testID="datePicker"
        value={date}
        mode="date"
        display="default"
        onChange={onChange}
      />
    </VStack>
  );
};

export default OnboardingStep1;
