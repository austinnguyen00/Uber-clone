import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';
import { Icon } from '@rneui/themed/dist/Icon';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '../types/navigation';
import { Image } from '@rneui/themed/dist/Image';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

interface Car {
	id: string;
	title: string;
	multiplier: number;
	image: string;
}

const data: Car[] = [
	{
		id: 'Uber-X-123',
		title: 'UberX',
		multiplier: 1,
		image: 'https://links.papareact.com/3pn',
	},
	{
		id: 'Uber-XL-456',
		title: 'Uber XL',
		multiplier: 1.2,
		image: 'https://links.papareact.com/5w8',
	},
	{
		id: 'Uber-LUX-789',
		title: 'Uber LUX',
		multiplier: 1.75,
		image: 'https://links.papareact.com/7pf',
	},
];

// A variable for price calculation formula
const SURGE_CHARGE_RATE = 1.4;

const RideOptionsCard = () => {
	const navigation = useNavigation<StackNavigationProp>();
	const [selected, setSelected] = useState<Car>();
	const travelTimeInformation = useSelector(selectTravelTimeInformation);

	return (
		<SafeAreaView style={tailwind`bg-white flex-shrink`}>
			<View>
				<TouchableOpacity
					style={tailwind`absolute top-3 left-5 p-3 z-50 rounded-full`}
					onPress={() => navigation.navigate('NavigateCard')}
				>
					<Icon
						name='chevron-left'
						type='font-awesome'
					></Icon>
				</TouchableOpacity>
				<Text style={tailwind`text-center py-5 text-xl`}>
					Select a Ride - {travelTimeInformation?.distance?.text}
				</Text>
			</View>

			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={tailwind`flex-row items-center justify-between px-10 ${
							item.id === selected?.id ? 'bg-gray-200' : ''
						}`}
						onPress={() => setSelected(item)}
					>
						<Image
							style={{ width: 100, height: 100, resizeMode: 'contain' }}
							source={{ uri: item.image }}
						></Image>
						<View style={tailwind`-ml-6`}>
							<Text style={tailwind`text-xl font-semibold`}>{item.title}</Text>
							<Text>{travelTimeInformation?.duration?.text} travel time</Text>
						</View>
						<Text style={tailwind`text-xl`}>
							{/* Intl.NumberFormat object enables language-sensitive number formatting. */}
							{new Intl.NumberFormat('en', {
								style: 'currency',
								currency: 'AUD',
							}).format(
								// Simple algorithm to calculate the travel price
								(travelTimeInformation?.duration
									? travelTimeInformation.duration.value *
									  SURGE_CHARGE_RATE *
									  item.multiplier
									: 0) / 100
							)}
						</Text>
					</TouchableOpacity>
				)}
			></FlatList>

			<View style={tailwind`mt-auto border-t border-gray-200`}>
				<TouchableOpacity
					style={tailwind`bg-black py-3 m-3 ${!selected ? 'bg-gray-300' : ''}`}
				>
					<Text style={tailwind`text-center text-white text-xl`}>
						Choose {selected?.title}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
