import { Text, VStack } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';

type OnboardingStep2Props = {
  callback: (data: any) => void;
};

const OnboardingStep2 = ({ callback }: OnboardingStep2Props) => {
  return (
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
          borderRadius: 200,
        }}
        onPress={() => callback('male')}
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
          borderRadius: 200,
        }}
        onPress={() => callback('lgbtq')}
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
          borderRadius: 200,
        }}
        onPress={() => callback('female')}
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
  );
};

export default OnboardingStep2;
