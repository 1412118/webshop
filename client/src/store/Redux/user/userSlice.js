import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import coreAPI from '~/components/Core/coreAPI';

const initialState = {
    current: {},
    settings: {},
};

export const login = createAsyncThunk('user/login', async (payload) => {
    //call API to register
    const data = await coreAPI.login(payload);

    //save data to local storage
    localStorage.setItem('jwt', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));
    //return user data
    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    },
});

const { reducer } = userSlice;
export default reducer;
