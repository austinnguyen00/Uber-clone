import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
	const dispatch = useDispatch();

	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: 'contain',
					}}
					source={{
						uri: 'https://links.papareact.com/gzs',
					}}
				/>
				{/* Google Autocomplete in Search Bar */}
				<GooglePlacesAutocomplete
					placeholder='Where form?'
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					nearbyPlacesAPI='GooglePlacesSearch'
					debounce={400}
					minLength={2}
					enablePoweredByContainer={false}
					fetchDetails={true}
					onPress={(data, details) => {
						// console.log(data);
						// console.log(details);

						// Dispatch the location and description of the origin
						// to the store
						// `dispatch()` take a reducer function as an argument and
						// `setOrigin()` is a reducer function that takes a payload
						// as an argument and update the state in the store
						// with new payload
						dispatch(
							setOrigin({
								location: details?.geometry.location,
								description: data.description,
							})
						);
					}}
					query={{
						key: GOOGLE_MAPS_APIKEY,
						language: 'en',
					}}
				/>
				<NavOptions />
				<NavFavourites />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
