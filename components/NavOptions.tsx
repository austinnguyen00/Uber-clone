import {
	FlatList,
	Text,
	SafeAreaView,
	View,
	Touchable,
	Image,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '../types/navigation';

const NavOptions = () => {
	// `useNavigation` is a hook which gives access to `navigation` object
	// Use this instead of passing `navigation` prop to nested child
	// `useNavigation()` returns the `navigation` prop of the screen it's inside
	const navigation = useNavigation<StackNavigationProp>();

	// Interface of Screen
	interface IScreen {
		id: string;
		title: string;
		image: string;
		screen: string;
	}

	const data: IScreen[] = [
		{
			id: '123',
			title: 'Get a ride',
			image: 'https://links.papareact.com/3pn',
			screen: 'MapScreen',
		},
		{
			id: '456',
			title: 'Order food',
			image: 'https://links.papareact.com/28w',
			screen: 'EatsScreen',
		},
	];

	return (
		<SafeAreaView>
			<FlatList
				data={data}
				horizontal
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
						onPress={() => {
							// `navigate` method allows us to navigate to another screen in the app
							navigation.navigate(
								item.screen === undefined ? 'HomeScreen' : item.screen
							);
						}}
					>
						<View>
							<Image
								style={{ width: 120, height: 120, resizeMode: 'contain' }}
								source={{ uri: item.image }}
							/>
							<Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
							<Icon
								style={tw`p-2 bg-black rounded-full w-10 mt-4`}
								type='antdesign'
								name='arrowright'
								color='white'
							></Icon>
							{/* <Icon
								color='#0CC'
								containerStyle={{}}
								disabledStyle={{}}
								iconProps={{}}
								iconStyle={{}}
								name='devices'
								onLongPress={() => console.log('onLongPress()')}
								onPress={() => console.log('onPress()')}
								size={40}
								type='material'
							/> */}
						</View>
					</TouchableOpacity>
				)}
			/>
		</SafeAreaView>
	);
};

export default NavOptions;
