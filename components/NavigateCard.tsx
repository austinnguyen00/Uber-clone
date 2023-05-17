import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '../types/navigation';
import NavFavourites from './NavFavourites';
import { Icon } from '@rneui/themed/dist/Icon';

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<StackNavigationProp>();

	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<Text style={tw`text-center py-5 text-xl`}>Good Morning, Austin</Text>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<View>
					<GooglePlacesAutocomplete
						placeholder='Where to?'
						styles={styles}
						fetchDetails={true}
						enablePoweredByContainer={false}
						minLength={2}
						nearbyPlacesAPI='GooglePlacesSearch'
						debounce={400}
						onPress={(data, details = null) => {
							dispatch(
								setDestination({
									location: details?.geometry.location,
									description: data.description,
								})
							);
							navigation.navigate('RideOptionsCard');
						}}
						query={{
							key: GOOGLE_MAPS_APIKEY,
							language: 'en',
						}}
					></GooglePlacesAutocomplete>
				</View>

				<NavFavourites />
			</View>
			<View
				style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
			>
				<TouchableOpacity
					style={tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`}
					onPress={() => {
						navigation.navigate('RideOptionsCard');
					}}
				>
					<Icon
						name='car'
						type='font-awesome'
						color='white'
						size={16}
					></Icon>
					<Text style={tw`text-white text-center`}>Rides</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
				>
					<Icon
						name='fast-food-outline'
						type='ionicon'
						color='black'
						size={16}
					></Icon>
					<Text style={tw`text-black text-center`}>Eats</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default NavigateCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingTop: 20,
		flex: 0,
	},
	textInput: {
		backgroundColor: '#dddddf',
		borderRadius: 0,
		fontSize: 18,
	},
	textInputContainer: {
		paddingHorizontal: 20,
		paddingBottom: 0,
	},
});
