import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://67138fc96c5f5ced6626dac3.mockapi.io',
});

export const getContactsApi = async () => {
  const { data } = await axiosInstance.get('/contacts');
  return data;
};

export const addContactApi = async contact => {
  const { data } = await axiosInstance.post('/contacts', contact);
  return data;
};

export const delContactApi = async id => {
  const { data } = await axiosInstance.delete(`/contacts/${id}`);
  return data;
};
