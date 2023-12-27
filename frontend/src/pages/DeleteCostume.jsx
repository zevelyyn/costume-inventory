import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { SnackbarProvider, useSnackbar } from 'notistack'

const DeleteCostume = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteCostume = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/costumes/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Costume deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Costume</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this costume?</h3>

        <button
          className='bg-red-600 p-4 hover:bg-cyan-600 m-8'
          onClick={handleDeleteCostume}
        >
          Yes, delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteCostume