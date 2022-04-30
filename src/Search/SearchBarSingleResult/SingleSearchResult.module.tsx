import * as React from "react";
import "./SingleSearchResult.scss";
import classnames from "classnames";
import { SearchResult } from "../../types";
const SingleSearchResult = (props: {
  key: number;
  result: SearchResult;
  input: string;
  onClickHandler?: (data: SearchResult) => void;
}) => {
  const { img, subTitle, title } = props.result;
  return (
    <div
      className={classnames({
        MainSingleResultDiv: props.input.length > 0,
        MainSingleResultDivUnmounting: props.input.length < 1,
      })}
      onClick={() =>
        props.onClickHandler ? props.onClickHandler(props.result) : null
      }
    >
      <div className="SingleResultImage">
        {img && (
          <img
            src={img}
            // src="https://firebasestorage.googleapis.com/v0/b/green-b3fdd.appspot.com/o/images%2FVAJA.JPG?alt=media&token=f8764540-f9f6-4970-9c45-304387980543"
            alt="CompanyName"
          />
        )}
      </div>
      <div className="SingleResultNameAndStatusDiv">
        <h4 className="SingleResultStatus">{title}</h4>
        <p className="SingleResultName">{subTitle}</p>
      </div>
    </div>
  );
};

export default SingleSearchResult;
