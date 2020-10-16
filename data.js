export default [
    {
        id: 'food-delivery',
        title: 'Food Delivery',
        mapposition: {
            top: '89%',
            left: '44%'
        },
        image: 'someimage',
        description: `
        Plot narrative here
    `,
        choices: [{
            id: 'negotiate',
            description: 'Plot',
            result: `
            Plot narrative here
        `,
            fatigue: 0,
            tips: 35
        }, {
            id: 'fight',
            description: 'Plot',
            result: `
            Plot narrative here
        `,
            fatigue: -30,
            tips: 50
        }, {
            id: 'run',
            description: 'Plot',
            result: `
            Plot narrative here
        `,
            fatigue: -50,
            tips: 0
        }]
    },
    {
        id: 'legal-documents',
        title: 'Legal Documents',
        mapposition: {
            top: '17%',
            left: '37%'
        },
        image: 'someimage',
        description: `
        Plot narrative here
    `,
        choices: [{
            id: 'run',
            description: 'Plot',
            result: `
            Plot narrative here
        `,
            fatigue: -35,
            tips: 35
        }, {
            id: 'fight',
            description: 'Plot',
            result: `
            Plot narrative here
        `,
            fatigue: -45,
            tips: 0
        }, {
            id: 'archer',
            description: 'Plot',
            result: `
            Plot narrative here
        `,
            fatigue: 0,
            tips: 90
        }]
    },
    {
        id: 'alleycat',
        title: 'Alleycat Race!',
        mapposition: {
            top: '31%',
            left: '5%'
        },
        image: 'someimage',
        description: `
        Plot narrative here
    `,
        choices: [{
            id: 'wooden',
            description: 'A Wooden Chest',
            result: 'Plot',
            fatigue: 0,
            tips: 40
        }, {
            id: 'tipsen',
            description: 'A tipsen Chest',
            result: 'Plot',
            fatigue: -50,
            tips: 0
        }, {
            id: 'jeweled',
            description: 'A Jeweled Chest',
            result: 'Plot',
            fatigue: 35,
            tips: 0
        }]
    }
];