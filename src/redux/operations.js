import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65b92f2bb71048505a8a6156.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const res = await axios.get('contacts');
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
})

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    try {
        const res = await axios.post('contacts', {name: contact.name, phone: contact.phone})
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contact, thunkAPI) => {
    try {
        const res = await axios.delete(`contacts/${contact.id}`)
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})