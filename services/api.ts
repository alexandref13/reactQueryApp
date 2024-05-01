import axios from 'axios';

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjYwNGQyNWI4MDU0ZTUyYTRlZjI4YTlhMDBmZDVhNSIsInN1YiI6IjY2MzJiZWNmMDA2YjAxMDEyZDFkMzgzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_SIYz3_mJB93I39c8WODxKmN2a8w1Etf1wfs_CiVeE'
  }
})