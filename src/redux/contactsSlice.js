import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";

const initialState = {
  items: [],
};

console.log("InitialState in contactSlice:", initialState);

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => state.contact?.items || [];
export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
// export const selectContacts = createSelector(
//   (state) => state.contact.items,
//   (contacts) => contacts // Мемоизация, если contacts не изменились, результат будет кэширован
// );
console.log("state.contact.items:", selectContacts);

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
