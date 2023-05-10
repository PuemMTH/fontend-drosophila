import { configureStore } from '@reduxjs/toolkit';
import conterSlice from './feature/counter';
import userSlice from './feature/user';

const store = configureStore({
    reducer: {
        counter: conterSlice,
        user: userSlice
    }
})
export default store;