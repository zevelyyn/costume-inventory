import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [costumes, setCostumes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('dance'); // Default search field

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5555/costumes');
        console.log('Response:', response);
        setCostumes(response.data.data);
      } catch (error) {
        console.log('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter costumes based on the selected field
  const filteredCostumes = costumes.filter((costume) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const fieldToSearch = costume[searchField].toLowerCase();
    return fieldToSearch.includes(lowerCaseSearchTerm);
  });

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center gap-x-4'>
        <h1 className='text-3xl my-8'>Costumes List</h1>
        <Link to='/costumes/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>

      {/* Search bar and field selector */}
      <div className='flex mb-4'>
        <input
          type='text'
          placeholder={`Search by ${searchField}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='p-2 border border-gray-300 rounded'
        />
        <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          className='ml-2 p-2 border border-gray-300 rounded'
        >
          <option value='dance'>Dance</option>
          <option value='style'>Style</option>
          <option value='quantity'>Quantity</option>
          <option value='color'>Color</option>
          <option value='location'>Location</option>
        </select>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Dance</th>
              <th className='border border-slate-600 rounded-md'>Style</th>
              <th className='border border-slate-600 rounded-md'>Quantity</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>
                Color
              </th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>
                Location
              </th>
              <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {filteredCostumes.map((costume, index) => (
              <tr key={costume._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {costume.dance}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {costume.style}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {costume.quantity}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {costume.color}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {costume.location}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/costumes/details/${costume._id}`}>
                      <BsInfoCircle className='text-2xl text-green-800' />
                    </Link>
                    <Link to={`/costumes/edit/${costume._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/costumes/delete/${costume._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home