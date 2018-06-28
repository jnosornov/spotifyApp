var axios = require('axios');

// axios.get('https://accounts.spotify.com/authorize', {
//     params: {
//         client_id: '4ebf54a90c4645958bb33f2737e82775',
//         response_type: 'token',
//         redirect_uri: 'http://localhost:3000/followers'
//     }
// }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

var accessToken = 'BQB30DbZNPvv9S8zgurtll4gyOOxJTPn2h4ciZ_TKvs9WV8aW4Ae1Nj1YkYCOxGoH4DeFU8mL3GwY6tv2NvTBDldDMkCLh7cK5rjLwOa3oL1hpEnTGvlJt0Yh6K_B_BdseNd6WOLUGxg1AsGb_abTIxhnSvvPs0T';
axios.get ('https://api.spotify.com/v1/me/following?type=artist',{
    headers: {
        'Authorization': 'Bearer ' + accessToken
    }
}).then((res) => {
    // > console.log('GET request response', res);
    console.log('Followed artist: ', res.data.artists.items[0]);
}).catch((err) => {
    console.log(err);
});