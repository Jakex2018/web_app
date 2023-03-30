export const exerciseOptions = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
	},
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key':  'f66f7dd356msh24f5ade773ac3aep1ff08fjsn6c82633c030e',
  },
};


export const fetchData = async (url,options) => {
  const res= await fetch(url, options);
  const data= await res.json();

  return data;
};
