import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// A "Slice" is a colection of Redux reducer logic and actions for
// a single feature in your app

// Define types of the slice state
interface navState {
	origin: string | null;
	destination: string | null;
	travelTimeInformation: number | null;
}

// Initial state of our slice
const initialState: navState = {
	origin: null,
	destination: null,
	travelTimeInformation: null,
};

// createSlice is a function that accepts
// 1. initialState
// 2. object of reducer functions
// 3. a "slice name"
// and automatically generates action creators and action types
// that correspond to the reducers and state
export const navSlice = createSlice({
	name: 'nav',
	initialState,
	// Reducers are functions that take current state and action as arguments
	// and return a new state result
	reducers: {
		setOrigin: (state, action) => {
			state.origin = action.payload;
		},
		setDestination: (state, action) => {
			state.destination = action.payload;
		},
		setTravelTimeInformation: (state, action) => {
			state.travelTimeInformation = action.payload;
		},
	},
});

// Object destructuring
// Export actions of the navSlice
export const { setOrigin, setDestination, setTravelTimeInformation } =
	navSlice.actions;

// SELECTORS - Used to deriving(pulling) data
// A "selector function" is any function that
// accepts the Redux store state (or part of the state) as an argument,
// and returns data that is based on that state.
export const selectOrigin = (state: RootState) => state.nav.origin;

export default navSlice.reducer;
