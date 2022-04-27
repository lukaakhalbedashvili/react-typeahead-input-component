import * as React from "react";
import "./SingleSearchResult.scss";
import classnames from "classnames";
export interface SearchResult {
  img: string;
  title: string;
  subTitle: string;
  redirectUrl: string;
}
const SingleSearchResult = (props: {
  key: number;
  result: SearchResult;
  input: string;
}) => {
  const { redirectUrl, img, subTitle, title } = props.result;
  console.log(redirectUrl, img, subTitle, title, "title");
  return (
    <div
      className={classnames({
        MainSingleResultDiv: props.input.length > 0,
        MainSingleResultDivUnmounting: props.input.length < 1,
      })}
    >
      <div className="SingleResultImage">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/green-b3fdd.appspot.com/o/images%2FVAJA.JPG?alt=media&token=f8764540-f9f6-4970-9c45-304387980543"
          alt="CompanyName"
        />
      </div>
      <div className="SingleResultNameAndStatusDiv">
        <h4 className="SingleResultStatus">Luarsab Tatqaridze</h4>
        <p className="SingleResultName">saxeli</p>
      </div>
    </div>
  );
};

export default SingleSearchResult;
