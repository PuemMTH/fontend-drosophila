import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

export const nameSlice = createSlice({
    name: 'user',
    initialState: {
        value: []
    },
    reducers: {
        increase: (state) => {
            state.value.push(
                {
                    id: state.value.length,
                    name: 'name' + state.value.length
                }
            );
        },
        decrease: (state) => {
            state.value.pop();
        },
        setState: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { increase, decrease, setState } = nameSlice.actions;
export default nameSlice.reducer;