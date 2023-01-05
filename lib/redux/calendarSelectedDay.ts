import { createSlice, configureStore } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { startOfToday } from "date-fns";

// Define a type for the slice state
interface SelectedDayState {
	selectedDay: Date;
}

// Define the initial state using that type
const initialState = {
	selectedDay: startOfToday(),
} as SelectedDayState;

export const selectedDaySlice = createSlice({
	name: "selectedDay",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		changeSelectedDay: (state, action: PayloadAction<Date>) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.selectedDay = action.payload;
		},
	},
});

export const { changeSelectedDay } = selectedDaySlice.actions;

export const selectedDayValue = (state: RootState) =>
	state.selectedDayReducer.selectedDay;

// const store = configureStore({
// 	reducer: selectedDaySlice.reducer,
// });

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()));

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented());
// // {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// // {value: 1}
