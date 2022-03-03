const appData = {
    appQuote: 'Find Music that Matches your Mood',
    homeScreen: {
        onlinemusic: {
            label: 'Online Music',
            id: '#online-music',
            isActive: true,
            items: [
                {
                    label: 'Trending',
                    key: 'jazz',
                    bgImage:''
                },
                {
                    label: 'WorkOut',
                    key: 'rock',
                    bgImage: ''
                },
                {
                    label: 'Good Time',
                    key: 'goodtime',
                    bgImage: ''
                },
                {
                    label: 'Evergreen',
                    bgImage: '',
                    key: 'cinematic'
                },
                {
                    label: 'Unplugged',
                    bgImage: '',
                    key: 'unplugged'
                },
                {
                    label: 'Chillax',
                    key: 'accoustic',
                    bgImage: ''
                }
            ]
        },
        genre: {
            label: 'Genre',
            id: '#genre',
            isActive: false,
            items: [
                {
                    label: 'POP',
                    key: 'pop',
                    bgImage: ''
                },
                {
                    label: 'Urban',
                    key: 'urban',
                    bgImage: ''
                },
                {
                    label: 'Hip Hop',
                    key: 'hiphop',
                    bgImage: ''
                },
                
                {
                    label: 'Cloud Rap',
                    key: 'cloudrap',
                    bgImage: ''
                },
                
                {
                    label: 'Electronica',
                    key: 'electronica',
                    bgImage: ''
                },
                {
                    label: 'Others',
                    key: 'others',
                    bgImage: ''
                },
            ]
        }
        
    }
}

module.exports = {
    appData
}