import * as React from 'react'
import './SingleSearchResult.scss'
import classnames from 'classnames'
const SingleSearchResult = ({ input }: { input: string }) => {
  return (
    <div
      className={classnames({
        MainSingleResultDiv: input.length > 0,
        MainSingleResultDivUnmounting: input.length < 1,
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
  )
}

export default SingleSearchResult
