// States where CroxX has distributors, in the order they are shown.
//
// To add a state:       copy one block and change id + nameKey
//                       (and add the state name to every src/locales/*.json under "distributors.states").
// To add a distributor: put an entry in that state's "distributors" list, for example:
//   { name: 'ABC Agro Traders', city: 'Coimbatore', address: '12, Main Road, Coimbatore 641001',
//     phone: '+91 98765 43210', email: 'sales@abcagro.in' }
// While the list is empty, the page shows "Distributor details coming soon".

// Photos: free Pexels licence (commercial use allowed, no credit required).
// All photos are cropped to the same landscape size (900 x 600).
const pexels = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop`;

export const DISTRIBUTOR_STATES = [
  {
    id: 'tamil-nadu',
    nameKey: 'distributors.states.tamilNadu',
    image: pexels(36436060), // farmer spraying a green rice field, Tenkasi – photo by Aravind P.S
    distributors: [],
  },
  {
    id: 'kerala',
    nameKey: 'distributors.states.kerala',
    image: pexels(12035356), // tea plantations, Munnar – photo by Siraj Nazar
    distributors: [],
  },
  {
    id: 'karnataka',
    nameKey: 'distributors.states.karnataka',
    image: pexels(23195233), // rice fields with trees, Karnataka – photo by Gotham Siddharth
    distributors: [],
  },
];
