import * as React from 'react'
import './SearchBar.scss'
import { CircularProgress } from '@mui/material'
import { IoIosSearch } from 'react-icons/io'
import SearchResults from '../SearchResults/SearchResults'
import classnames from 'classnames'

const SearchBar = () => {
  const [input, setInput] = React.useState('')
  console.log(setInput, 'SHEN GAIXARE')

  return (
    <div className="MainSearchDiv">
      <div className="SearchBarDiv">
        {input.length > 0 && (
          <p className={'SearchIcon'}>
            <CircularProgress color="inherit" size={18} />
          </p>
        )}
        {input.length < 1 && <IoIosSearch className="SearchIcon" size={30} />}
        <input
          className={classnames({
            SearchBarInputFull: input.length > 0,
            SearchBarInput: input.length < 1,
          })}
          spellCheck={false}
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Searching is easier "
          role="search"
          name="search"
        />
        {input.length > 0 && <p className="SearchBarClearLabel">Clear</p>}
      </div>
      <div
        className={classnames({
          SearchResults: input.length < 1,
          SearchResultsFull: input.length > 0,
        })}
      >
        <SearchResults input={input} />
      </div>
    </div>
  )
}
export default SearchBar
