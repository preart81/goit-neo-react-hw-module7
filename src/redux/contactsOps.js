import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  delContactApi,
  getContactsApi,
} from '../api/contactsApi';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  getContactsApi()
);

export const addContact = createAsyncThunk('contacts/addContact', contact =>
  addContactApi(contact)
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', id =>
  delContactApi(id)
);
