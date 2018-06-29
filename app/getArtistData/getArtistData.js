import axios from 'axios';

const url = 'https://api.spotify.com/v1/me/following?type=artist';
const requestOptions = {
    headers: {
        'Authorization': 'Bearer ' + accessToken
    }
};

axios.get (url, requestOptions).then((response) => {

    var artistData = response.data.artists.items.map((item, index) => ({
        name: item.name,
        genres: item.genres,
        followers: item.followers.total,
        images: item.images,
        id: index
    }));
    
    console.log('Artist data', artistData);
    this.setState({ artists : artistData});            

}).catch((err) => {
    console.log(`Error message: ${err.message}`);
});