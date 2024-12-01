import { createSlice } from "@reduxjs/toolkit";
import searchValue from "../components/App";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters = state.filters.name
        .toLowerCase()
        .includes(searchValue.toLowerCase(action.payload));
    },
  },
});

export const filtersReducer = slice.reducer;
export const selectNameFilter = (state) => state.filters.name;
export const { changeFilter } = slice.actions;

//Фільтрований список контактів
// const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(searchValue.toLowerCase())
//   );

// const handleChange = (evt) => {
//     setSearchValue(evt.target.value);
//   };
