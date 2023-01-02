import { configureStore } from "@reduxjs/toolkit";
import { selectedDaySlice } from "./calendarSelectedDay";

export const store = configureStore({
	reducer: {
		// posts: postsReducer,
		// comments: commentsReducer,
		// users: usersReducer,
		selectedDayReducer: selectedDaySlice.reducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
