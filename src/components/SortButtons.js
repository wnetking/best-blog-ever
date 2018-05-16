import React from 'react'
import FilterButton from '../containers/FilterButton'
import * as t from '../constants'

const SortButtons = () => (
  <div className='sort-btns'>
    <span>Sort by:</span>
    <FilterButton filter={t.filter.BYDATE}>
      Date
    </FilterButton>
    <FilterButton filter={t.filter.BYVIEW}>
      Views
    </FilterButton>
  </div>
)

export default SortButtons
