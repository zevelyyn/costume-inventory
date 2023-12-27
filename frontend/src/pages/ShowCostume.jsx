import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowCostume = () => {
  const [costume, setCostumes] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/costumes/${id}`)
      .then((response) => {
        console.log('show:', response);
        setCostumes(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Costume</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{costume._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Dance</span>
            <span>{costume.dance}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Style</span>
            <span>{costume.style}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Quantity</span>
            <span>{costume.quantity}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Color</span>
            <span>{costume.color}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Location</span>
            <span>{costume.location}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(costume.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(costume.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCostume