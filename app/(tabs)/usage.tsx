import { NativeModules } from 'react-native';

const { ScreenTimeModule } = NativeModules;

export const getUsage = async () => {
  try {
    const usage = await ScreenTimeModule.getUsage();
    console.log(usage);
    return usage;
  } catch (error) {
    console.error(error);
  }
};
