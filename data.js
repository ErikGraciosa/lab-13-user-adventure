export default [
    {
        id: 'monsters',
        title: 'A Den of Monsters',
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
            description: 'Negotiate with them',
            result: `
            Plot narrative here
        `,
            fatigue: 0,
            tips: 35
        }, {
            id: 'fight',
            description: 'Fiiiiiggghhhttt!',
            result: `
            Plot narrative here
        `,
            fatigue: -30,
            tips: 50
        }, {
            id: 'run',
            description: 'Run away like good Sir Robin',
            result: `
            Plot narrative here
        `,
            fatigue: -50,
            tips: 0
        }]
    },
    {
        id: 'dragon',
        title: 'A Scary Dragon',
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
            description: 'Get the hell out of the village',
            result: `
            Plot narrative here
        `,
            fatigue: -35,
            tips: 35
        }, {
            id: 'fight',
            description: 'Fiiiiiggghhhttt!',
            result: `
            Plot narrative here
        `,
            fatigue: -45,
            tips: 0
        }, {
            id: 'archer',
            description: 'Emulate that guy from LOR who shot an arrow',
            result: `
            Plot narrative here
        `,
            fatigue: 0,
            tips: 90
        }]
    },
    {
        id: 'treasure',
        title: 'A tipsen Treasure',
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
            result: 'You grab 40 tips pieces!',
            fatigue: 0,
            tips: 40
        }, {
            id: 'tipsen',
            description: 'A tipsen Chest',
            result: 'Oh no! The chest is booby trapped with poison and you take 50 fatigue damage',
            fatigue: -50,
            tips: 0
        }, {
            id: 'jeweled',
            description: 'A Jeweled Chest',
            result: 'A warm light engulfs you and you gain 35 fatigue',
            fatigue: 35,
            tips: 0
        }]
    }
];