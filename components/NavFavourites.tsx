import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { Icon } from '@rneui/themed';
import React from 'react';
import tw from 'twrnc';

const data = [
	{
		id: '123',
		icon: 'home',
		location: 'Home',
		destination: 'Gillon st, Perth, AUS',
	},
	{
		id: '456',
		icon: 'briefcase',
		location: 'Work',
		destination: 'Hay st, Perth, AUS',
	},
];

const NavFavourites = () => {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={() => (
				<View style={[tw`bg-gray-400`, { height: 0.5 }]} />
			)}
			renderItem={({ item: { icon, location, destination } }) => (
				<TouchableOpacity style={tw`flex-row items-center p-5`}>
					<Icon
						style={tw`mr-4 rounded-full bg-gray-300 p-3`}
						name={icon}
						type='ionicon'
						color='white'
						size={18}
					/>
					<View>
						<Text style={tw`font-semibold text-lg`}>{location}</Text>
						<Text style={tw`text-gray-500`}>{destination}</Text>
					</View>
				</TouchableOpacity>
			)}
		></FlatList>
	);
};

export default NavFavourites;

const styles = StyleSheet.create({});
