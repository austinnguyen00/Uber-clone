import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectOrigin,
	selectDestination,
	setTravelTimeInformation,
} from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';

const Map = () => {
	// `useSelector` is a react-redux hook to access
	// the redux store's state
	// This hook take a selector function as a argument
	const origin = useSelector(selectOrigin);
	const destination = useSelector(selectDestination);
	const dispatch = useDispatch();

	// `useRef` returns a ref object with a single `current` property
	// initially set to the initial value you provided.
	const mapRef = useRef<MapView | null>(null);

	// Update the zoom distance of the map according to
	// the current origin and destination
	useEffect(() => {
		if (!origin || !destination) return;

		// Zoom & fit to markers
		mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
			edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
		});
	}, [origin, destination]);

	// Calculate the travel time
	useEffect(() => {
		if (!origin || !destination) return;
		const getDistnace = async () => {
			// Request the distance matrix API
			fetch(`https://maps.googleapis.com/maps/api/distancematrix/json
					?destinations=${destination.description}
					&origins=${origin.description}
					&key=${GOOGLE_MAPS_APIKEY}`)
				.then((res) => res.json())
				.then((data) => {
					// Get the travel time information from Distance Matrix API
					// console.log('Data', JSON.stringify(data.rows[0]));
					dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
				});
		};
		getDistnace();
	}, [origin, destination, GOOGLE_MAPS_APIKEY]);

	return (
		<MapView
			ref={mapRef}
			style={tw`flex-1`}
			mapType='mutedStandard'
			initialRegion={{
				latitude: origin?.location?.lat || 0,
				longitude: origin?.location?.lng || 0,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			}}
		>
			{/* Display Marker of origin location on the map if location exist */}
			{origin?.location && (
				<Marker
					coordinate={{
						latitude: origin.location?.lat || 0,
						longitude: origin.location?.lng || 0,
					}}
					title='Origin'
					description={origin.description}
					identifier='origin'
				/>
			)}
			{/* Display Marker of destination location on the map if location exist */}
			{destination?.location && (
				<Marker
					coordinate={{
						latitude: destination.location?.lat || 0,
						longitude: destination.location?.lng || 0,
					}}
					title='Destination'
					description={destination.description}
					identifier='destination'
				/>
			)}
			{/* Draw a route between two coordinates */}
			{origin && destination && (
				<MapViewDirections
					// origin and destination can take a string
					// that represents an address or a location
					origin={origin.description}
					destination={destination.description}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={3}
					strokeColor='black'
				/>
			)}
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({});
