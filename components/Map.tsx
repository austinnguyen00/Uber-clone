import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const Map = () => {
	// `useSelector` is a react-redux hook to access
	// the redux store's state
	// This hook take a selector function as a argument
	const origin = useSelector(selectOrigin);

	return (
		<MapView
			style={tw`flex-1`}
			mapType='mutedStandard'
			initialRegion={{
				latitude: origin?.location.lat || 0,
				longitude: origin?.location.lng || 0,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			}}
		/>
	);
};

export default Map;

const styles = StyleSheet.create({});
