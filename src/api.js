import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID PcQz1iMMtmX3pVX6CQF-7Ww-7wGxOCNfI5pbdAi2fd4'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;