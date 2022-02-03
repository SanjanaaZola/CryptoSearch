import './SearchBar.css'

const SearchBar = ({ ...rest }) => {
  return (
    <div className='coin-search'>
      <input className='coin-input' {...rest} />
    </div>
  )
}

export default SearchBar
