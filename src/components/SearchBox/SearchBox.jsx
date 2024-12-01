import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  // const handleChange = (evt) => {
  //   setSearchValue(evt.target.value);
  // };
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.searchBox}>
      <label>Find contacts by name</label>
      <input
        className={s.searchInput}
        type="text"
        value={searchValue}
        onChange={dispatch(changeFilter())}
      />
    </div>
  );
};

export default SearchBox;
