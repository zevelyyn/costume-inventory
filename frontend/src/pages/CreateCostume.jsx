import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateCostume = () => {
  const [dance, setDance] = useState('');
  const [style, setStyle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [color, setColor] = useState('');
  const [location, setLocation] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveCostume = () => {
    const data = {
      dance,
      style,
      quantity,
      color,
      location
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/costumes', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Costume created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Costume</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Dance</label>
          <input
            type='text'
            value={dance}
            onChange={(e) => setDance(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Style</label>
          <input
            type='text'
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Quantity</label>
          <input
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Color</label>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Location</label>
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveCostume}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateCostume