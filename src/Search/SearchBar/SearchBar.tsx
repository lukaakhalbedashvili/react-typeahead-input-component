import * as React from "react";
import "./SearchBar.scss";
import { CircularProgress } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import SearchResults from "../SearchResults/SearchResults";
import classnames from "classnames";
import { SearchBarProps } from "../../types";
const SearchBar = ({
  value,
  placeholder,
  loading,
  results,
  onClick,
}: SearchBarProps) => {
  const [input, setInput] = React.useState("");
  React.useEffect(() => {
    value && setInput(value);
  }, [value]);

  return (
    <div className="test">
      <div className="MainSearchDiv">
        <div className="SearchBarDiv">
          {loading && (
            <p className={"SearchIcon"}>
              <CircularProgress color="inherit" size={18} />
            </p>
          )}
          {!loading && <IoIosSearch className="SearchIcon" size={30} />}
          <input
            className={classnames({
              SearchBarInputFull: input.length > 0,
              SearchBarInput: input.length < 1,
            })}
            spellCheck={false}
            autoComplete="off"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder={placeholder ? placeholder : "Searching is easier"}
            role="search"
            name="search"
          />
          {input.length > 0 && (
            <p className="SearchBarClearLabel" onClick={() => setInput("")}>
              Clear
            </p>
          )}
        </div>
        <div
          className={classnames({
            SearchResults: input.length < 1,
            SearchResultsFull: input.length > 0,
          })}
        >
          <SearchResults
            results={results}
            input={input}
            onClickHandler={onClick}
          />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
