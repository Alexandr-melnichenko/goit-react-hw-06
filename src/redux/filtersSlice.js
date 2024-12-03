import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const searchValue = action.payload
        ? action.payload.toString().toLowerCase()
        : "";

      if (state.filters && state.filters.name !== undefined) {
        state.filters.name = searchValue;
      } else {
        console.error(
          "Ошибка: структура состояния нарушена. Проверьте инициализацию Redux state."
        );
      }
    },
  },
});

export const filtersReducer = slice.reducer;
export const selectNameFilter = (state) => state.filters?.name || "";
export const { changeFilter } = slice.actions;
