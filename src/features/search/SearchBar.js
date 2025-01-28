import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectCompanies, searchAsync, selectLoading} from './searchSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query,setQuery] = useState('');
  const loading = useSelector(selectLoading);
  const results = useSelector(selectCompanies);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    dispatch(searchAsync(value));
  };
  
    // useEffect(() => {
    //   if (query.length > 0) {
    //     dispatch(searchAsync(query));
    //   }
    // }, [query, dispatch]);

  return (
    <div className="relative w-80 mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search companies..."
        className="w-full p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      {loading && <p className="mt-2 text-gray-500">Loading...</p>}
      {results.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 mt-1 max-h-48 overflow-y-auto z-10">
        {results.map((company, index) => (
          <li
          key={index}
          className="p-2 cursor-pointer hover:bg-gray-200"
          >
              {company}
              </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default SearchBar;
