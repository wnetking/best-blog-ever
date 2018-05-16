import React from 'react'
import Search from '../containers/Search'
import SortButtons from './SortButtons'
import FilteredPostsList from '../containers/FilteredPostsList'

const Home = () => (
  <React.Fragment>
    <div className='search-wrap'>
      <Search />
      <SortButtons />
    </div>
    <FilteredPostsList />
  </React.Fragment>
)

export default Home
