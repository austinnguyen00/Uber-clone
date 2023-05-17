import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  // Route that does not have any parameters being passed
  // is specified with `undefined`
  HomeScreen: undefined;
  MapScreen: undefined;
  NavigateCard: undefined;
  RideOptionsCard: undefined;
};

export type StackNavigationProp = NativeStackNavigationProp<StackParamList>