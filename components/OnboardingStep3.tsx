import {
  Avatar,
  AvatarFallbackText,
  CheckIcon,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  VStack,
} from '@gluestack-ui/themed';
import * as React from 'react';
import { Text, View } from 'react-native';

const OnboardingStep3 = () => {
  const username = 'John Doe';
  const [values, setValues] = React.useState([]);

  return (
    <VStack flex={1} justifyContent="center" alignItems="center" space="2xl">
      <VStack justifyContent="center" alignItems="center">
        <Text>What are your preferences! 👀</Text>
      </VStack>

      <VStack justifyContent="center" alignItems="center" space="2xl">
        <CheckboxGroup
          value={values}
          onChange={(keys) => {
            setValues(keys);
          }}
        >
          <VStack space="3xl">
            <Checkbox value="fine_dining">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Fine dining</CheckboxLabel>
            </Checkbox>
            <Checkbox value="japanese_dish">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Japanese dish</CheckboxLabel>
            </Checkbox>
            <Checkbox value="bar">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Bar</CheckboxLabel>
            </Checkbox>
            <Checkbox value="crafting">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Crafting</CheckboxLabel>
            </Checkbox>
            <Checkbox value="breakfast">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Breakfast & Brunch</CheckboxLabel>
            </Checkbox>
            <Checkbox value="cafe">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Cafe</CheckboxLabel>
            </Checkbox>
            <Checkbox value="sports">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Sports & activities</CheckboxLabel>
            </Checkbox>
            <Checkbox value="spa">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Spa & therapy</CheckboxLabel>
            </Checkbox>
          </VStack>
        </CheckboxGroup>
      </VStack>
    </VStack>
  );
};

export default OnboardingStep3;
