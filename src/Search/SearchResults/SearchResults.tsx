import * as React from "react";
import classnames from "classnames";
import SingleSearchResult from "../SearchBarSingleResult/SingleSearchResult.module";
import "./SearchResults.scss";
import { Results } from "./../../types";

const SearchResults = ({ results, input, onClickHandler }: Results) => {
  return (
    <div
      className={classnames({
        SearchResults: input.length < 1,
        SearchResultsFull: input.length > 0,
      })}
    >
      {results &&
        results.map((item, index) => (
          <SingleSearchResult
            key={index}
            result={item}
            input={input}
            onClickHandler={onClickHandler}
          />
        ))}
    </div>
  );
};
export default SearchResults;
