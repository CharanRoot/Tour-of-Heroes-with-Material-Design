import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Mr. Nice',primaryattribute:"Strength",appearances:["Halloween: Part 1","Halloween: Part 2"],comments:"" },
            { id: 12, name: 'Narco',primaryattribute:"Intelligence",appearances:["Halloween: Part 1","Halloween: Part 2"],comments:""  },
            { id: 13, name: 'Bombasto',primaryattribute:"Strength",appearances:["Halloween: Part 1","Halloween: Part 2"],comments:"" },
            { id: 14, name: 'Celeritas' ,primaryattribute:"Agility",appearances:["Halloween: Part 1","Halloween: Part 2"],comments:""},
            { id: 15, name: 'Magneta',primaryattribute:"Intelligence",appearances:["Halloween: Part 1","Halloween: Part 2"],comments:"" },
            { id: 16, name: 'RubberMan',primaryattribute:"Strength",appearances:["Halloween: Part 1","Halloween: Part 2"],comments:"" },
            { id: 17, name: 'Dynama',primaryattribute:"Agility",appearances:["Halloween: Part 1","Halloween: Part 2"],comments:"" },
            { id: 18, name: 'Dr IQ',primaryattribute:"Intelligence",appearances:["Halloween: Part 1","Halloween: Part 2"],comments:"" },
            { id: 19, name: 'Magma' ,primaryattribute:"Strength",appearances:["Halloween: Part 1","Halloween: Part 2"],comments:""},
            { id: 20, name: 'Tornado',primaryattribute:"Agility",appearances:["Halloween: Part 1","Halloween: Part 2"],comments:"" }
        ];
        return { heroes };
    }
}
