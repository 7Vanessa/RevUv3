export default {
    id: '1',
    users: [{
        id: 'u1',
        name: 'Vanessa',
        imageUri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475457-Los-Angeles.jpg',
    }, {
        id: 'u2',
        name: 'Alex',
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6L6EGZ_xKg10PSwdivqf54yYcOr9CgHgfLw&usqp=CAU',
    }],
    messages: [{
        id: 'm1',
        content: 'Salut, Alex!',
        createdAt: '2021-05-04T11:37:00.000Z',
        user: {
            id: 'u1',
            name: 'Vanessa',
        },
    }, {
        id: 'm2',
        content: 'Salut, ça va ?',
        createdAt: '2021-05-04T11:38:00.000Z',
        user: {
            id: 'u2',
            name: 'Alex',
        },
    }, {
        id: 'm3',
        content: 'Oui et toi ?',
        createdAt: '2021-05-04T11:39:40.000Z',
        user: {
            id: 'u2',
            name: 'Alex',
        },
    }, {
        id: 'm4',
        content: 'Très bien!',
        createdAt: '2021-05-04T11:40:00.000Z',
        user: {
            id: 'u1',
            name: 'Vanessa',
        },
    }, {
        id: 'm5',
        content: 'Super!',
        createdAt: '2021-05-04T11:43:00.000Z',
        user: {
            id: 'u1',
            name: 'Vanessa',
        },
    }, {
        id: 'm6',
        content: 'A demain.',
        createdAt: '2021-05-04T11:44:00.000Z',
        user: {
            id: 'u2',
            name: 'Alex',
        },
    }, {
        id: 'm7',
        content: 'Bonne soirée!',
        createdAt: '2021-05-04T11:45:00.000Z',
        user: {
            id: 'u1',
            name: 'Vanessa',
        },
    }]
}