import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

const renderResults = results => {
  return results.map(fi => (
    <li className='ui middle aligned divided list' key={fi.fiID}>
      <Link className='list-item item' to={`/fi/${fi.fiID}`}>
        {fi.fiName}
      </Link>
    </li>
  ));
};

const SearchResults = ({ results = [] }) => {
  return <ul className=''>{renderResults(results)}</ul>;
};

export default SearchResults;
