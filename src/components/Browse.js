import React, { useEffect } from 'react'
import Head from './Head';
import { apiOptions } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchNowPlayingMvs();
  },[])


  const fetchNowPlayingMvs = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',apiOptions);
    const movies = await data.json();
    dispatch(addNowPlayingMovies(movies.results));
  }


  return (
    <div>
      <Head/>
    </div>
  )
}

export default Browse;