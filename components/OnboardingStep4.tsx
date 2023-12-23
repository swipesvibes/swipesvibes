import { Input } from '@gluestack-ui/themed';
import { InputField } from '@gluestack-ui/themed';
import { VStack } from '@gluestack-ui/themed';
import { Controller } from 'react-hook-form';

const Onboardingstep4 = ({ control }: any) => {
  return (
    <VStack flex={1} justifyContent="center" alignItems="center" space="2xl">
      <Controller
        defaultValue=""
        name="code"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input variant="outline" size="md">
            <InputField
              placeholder="Invite Code"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          </Input>
        )}
      />
    </VStack>
  );
};

export default Onboardingstep4;
