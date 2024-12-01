import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectContacts = (state) => state.contacts;
export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;

// Функція добавлення нового контакту до списку
// const addContact = (newContact) => {
//   setContact((prevContacts) => [...prevContacts, newContact]);
// };

// Функція видалення контакту
// const deleteContact = (id) => {
//   setContact((prevContacts) =>
//     prevContacts.filter((contact) => contact.id !== id)
//   );
// };
