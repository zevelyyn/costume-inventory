import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';

const Search = ({ destination = '/' }) => {
  const [searchResult, setSearchResult] = useState([])
  const[key, setKey] = useState("")

  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearchResult([])
          return
        }
        const res = await axios.get("http://localhost:5555/api/")
      }
      catch (error) {
        console.log('Error:', error);
      }
    }
  })

  return (
    <div className='relative'>
      <button className='absolute right-0 w-12 bg-green-400 leading-normal h-full border-none'>
        <BsSearch />
      </button>
      <div>
        <input type='text' className='p-3 text-lg'></input>
      </div>
    </div>
  );
};

export default Search;