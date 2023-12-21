import {
  CheckIcon,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  VStack,
} from '@gluestack-ui/themed';
import * as React from 'react';
import { Controller } from 'react-hook-form';
import { Text } from 'react-native';

const OnboardingStep3 = ({ control }: any) => {
  return (
    <VStack flex={1} justifyContent="center" alignItems="center" space="2xl">
      <VStack justifyContent="center" alignItems="center">
        <Text>What are your preferences! 👀</Text>
      </VStack>

      <VStack justifyContent="center" alignItems="center" space="2xl">
        <Controller
          defaultValue={[]}
          name="preferences"
          control={control}
          render={({ field: { onChange, value } }) => (
            <CheckboxGroup
              value={value}
              onChange={(keys) => {
                onChange(keys);
              }}
            >
              <VStack space="3xl">
                <Checkbox value="fine_dining" aria-label="fine_dining">
                  <CheckboxIndicator mr="$2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Fine dining</CheckboxLabel>
                </Checkbox>
                <Checkbox value="japanese_dish" aria-label="japanese_dish">
                  <CheckboxIndicator mr="$2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Japanese dish</CheckboxLabel>
                </Checkbox>
                <Checkbox value="bar" aria-label="bar">
                  <CheckboxIndicator mr="$2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Bar</CheckboxLabel>
                </Checkbox>
                <Checkbox value="crafting" aria-label="crafting">
                  <CheckboxIndicator mr="$2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Crafting</CheckboxLabel>
                </Checkbox>
                <Checkbox value="breakfast" aria-label="breakfast">
                  <CheckboxIndicator mr="$2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Breakfast & Brunch</CheckboxLabel>
                </Checkbox>
                <Checkbox value="cafe" aria-label="cafe">
                  <CheckboxIndicator mr="$2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Cafe</CheckboxLabel>
                </Checkbox>
                <Checkbox value="sports" aria-label="sports">
                  <CheckboxIndicator mr="$2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Sports & activities</CheckboxLabel>
                </Checkbox>
                <Checkbox value="spa" aria-label="spa">
                  <CheckboxIndicator mr="$2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Spa & therapy</CheckboxLabel>
                </Checkbox>
              </VStack>
            </CheckboxGroup>
          )}
        />
      </VStack>
    </VStack>
  );
};

export default OnboardingStep3;
