var artists = [
    {
        id: '1', 
        name: 'Eminem', 
        followers: 28, 
        genres: 'Hip Hop, Comedy Rap', 
        imageUrl: 'https://c.saavncdn.com/artists/Eminem.jpg'
    },
    {
        id: '2',
        name: 'Dr. Dre',
        followers: 10, 
        genres: 'Hip Hop, G-funk, Gangsta Rap', 
        imageUrl: 'https://c.saavncdn.com/artists/Dr_Dre.jpg'
    },
    {
        id: '3',
        name: 'David Guetta',
        followers: 40,
        genres: 'Dance, Progressive House, Dance pop, Electro House',
        imageUrl: 'https://c.saavncdn.com/artists/David_Guetta.jpg'
    },
    {
        id: '4',
        name: 'Jay-Z',
        followers: 50,
        genres: 'Hip Hop',
        imageUrl: 'https://c.saavncdn.com/artists/JAY_Z.jpg'
    }
]

var artistJSON = JSON.stringify(artists, undefined, 2);
console.log(`JSON seed data = ${artistJSON}`);

var artistObject = JSON.parse(artistJSON);
console.log('Object seed data = ', artistObject);