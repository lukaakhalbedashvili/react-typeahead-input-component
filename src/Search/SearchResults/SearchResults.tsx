import * as React from 'react'
import classnames from 'classnames'
import SingleSearchResult from '../SearchBarSingleResult/SingleSearchResult.module'
import './SearchResults.scss'
const SearchResults = ({ input }: { input: string }) => {
  const test = [1, 2]

  return (
    <div
      className={classnames({
        SearchResults: input.length < 1,
        SearchResultsFull: input.length > 0,
      })}
    >
      {test.map((item) => (
        <SingleSearchResult input={input} key={item} />
      ))}
    </div>
  )
}
export default SearchResults
