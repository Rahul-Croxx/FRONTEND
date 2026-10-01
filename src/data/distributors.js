// States where CroxX India has distributors, in the order they are shown.
//
// mapId    = state code on the India map (src/data/indiaMap.js)
// contact  = this state's distributor address / phone / email. Leave a value empty
//            and the CroxX India company detail (src/data/contact.js) is shown instead.
// To add a state: copy one block, set id / nameKey / mapId / image,
// and add the state name to every src/locales/*.json under "distributors.states".

// Photos: free Pexels licence (commercial use allowed, no credit required),
// all cropped to the same landscape size (900 x 600).
const pexels = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop`;

export const DISTRIBUTOR_STATES = [
  {
    id: 'tamil-nadu',
    nameKey: 'distributors.states.tamilNadu',
    mapId: 'tn',
    image: pexels(5138790), // Brihadeeswarar Temple, Thanjavur – photo by Aadhithyan Pandian
    contact: { address: '', phone: '', email: '' },
  },
  {
    id: 'kerala',
    nameKey: 'distributors.states.kerala',
    mapId: 'kl',
    image: pexels(12035356), // tea plantations, Munnar – photo by Siraj Nazar
    contact: { address: '', phone: '', email: '' },
  },
  {
    id: 'karnataka',
    nameKey: 'distributors.states.karnataka',
    mapId: 'ka',
    image: pexels(34962788), // Mysore Palace with gardens – photo by Sachin Shettigar
    contact: { address: '', phone: '', email: '' },
  },
  {
    id: 'andhra-pradesh',
    nameKey: 'distributors.states.andhraPradesh',
    mapId: 'ap',
    image: pexels(5667923), // Visakhapatnam coastline – photo by Sayantan Das
    contact: { address: '', phone: '', email: '' },
  },
  {
    id: 'telangana',
    nameKey: 'distributors.states.telangana',
    mapId: 'tg',
    image: pexels(9373357), // Charminar, Hyderabad – photo by Sumit K Sharma
    contact: { address: '', phone: '', email: '' },
  },
  {
    id: 'puducherry',
    nameKey: 'distributors.states.puducherry',
    mapId: 'py',
    image: pexels(32550610), // seaside promenade, Puducherry – photo by Kamakshi
    contact: { address: '', phone: '', email: '' },
  },
];
