import './SearchBar.css'

const SearchBar = ({ ...rest }) => {
  return (
    <div className='coin-search' placeholder='Search your crypto here'>
      <input className='coin-input' {...rest} />
    </div>
  )
}

export default SearchBar
