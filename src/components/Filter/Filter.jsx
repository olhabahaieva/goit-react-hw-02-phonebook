import React from 'react';
import css from './Filter.module.css'

const Filter = () => {
  return (
    <div className={css.filter}>
    <label className={css.label} htmlFor="search">Find contacts by name</label>
    <input type="search" />
    </div>
  )
}

export default Filter;
