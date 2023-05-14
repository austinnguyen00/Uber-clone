import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';

// Store setup

// Redux store is created using `configureStore` function from Redux toolkit
// It requires that we pass in a `reudcer` argument
// We can pass in all of the different reducers that responsible for
// each of the app features

// navReducer is responsible for updating
// state.origin, state.destination, state.travelTimeInformation
// We refer navReducer as a "slice reducer" function
export const store = configureStore({
	reducer: {
		nav: navReducer,
	},
});

// Extract the `RootState` type and `Dispatch` type so that
// they can be referenced as needed in slice

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
