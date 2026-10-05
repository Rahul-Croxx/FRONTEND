// States where CroxX India products are available, in the order they are shown.
//
// mapId     = state code on the India map (src/data/indiaMap.js)
// locations = distributor offices in that state. A state without locations shows the
//             CroxX India company contact (src/data/contact.js) instead.
// To add a state: copy one block, set id / nameKey / mapId / image,
// and add the state name to every src/locales/*.json under "distributors.states".

// Photos: free Pexels licence (commercial use allowed, no credit required),
// all cropped to the same landscape size (900 x 600).
const pexels = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop`;

const PHONE = '+91 93840 54859';

export const DISTRIBUTOR_STATES = [
  {
    id: 'tamil-nadu',
    nameKey: 'distributors.states.tamilNadu',
    mapId: 'tn',
    image: pexels(5138790), // Brihadeeswarar Temple, Thanjavur – photo by Aadhithyan Pandian
    locations: [
      {
        name: 'Farmmetrix India Pvt Ltd – Chennai',
        address: 'Sy.No: 60/3B1, 61/1A1A2 and 64/11B, KMR Avenue, Janapanchatram Koot Road, Alinjivakkam, Chennai, Tiruvallur, Tamil Nadu 600067',
        phone: PHONE,
        gstin: '33AADCF6094R1Z0',
      },
      {
        name: 'Farmmetrix India Pvt Ltd – Coimbatore',
        address: '15/1, Sakthi Green Land, Thiruvalluvar Street, Coimbatore 641029, Tamil Nadu',
        phone: PHONE,
      },
    ],
  },
  {
    id: 'kerala',
    nameKey: 'distributors.states.kerala',
    mapId: 'kl',
    image: pexels(12035356), // tea plantations, Munnar – photo by Siraj Nazar
    locations: [],
  },
  {
    id: 'karnataka',
    nameKey: 'distributors.states.karnataka',
    mapId: 'ka',
    image: pexels(34962788), // Mysore Palace with gardens – photo by Sachin Shettigar
    locations: [
      {
        name: 'Farmmetrix India Pvt Ltd – Bengaluru Rural',
        address: 'No. 77, A.P.M.C. Yard, C/o Sree Basaweshwara Traders, Dodballapur, Bengaluru Rural, Karnataka 561203',
        phone: PHONE,
        email: 'farmmetrix.bnglr@gmail.com',
        gstin: '29AADCF6094R1ZP',
      },
    ],
  },
  {
    id: 'andhra-pradesh',
    nameKey: 'distributors.states.andhraPradesh',
    mapId: 'ap',
    image: pexels(5667923), // Visakhapatnam coastline – photo by Sayantan Das
    locations: [
      {
        name: 'Farmmetrix India Pvt Ltd – Anantapur',
        address: 'Uma Estates, Survey No. 21-IB, Door No. 11-34, F-Godown, Gooty Road, Anantapur, Andhra Pradesh 515001',
        email: 'farmmetrixatp@gmail.com',
        gstin: '37AADCF6094R1ZS',
      },
    ],
  },
  {
    id: 'telangana',
    nameKey: 'distributors.states.telangana',
    mapId: 'tg',
    image: pexels(9373357), // Charminar, Hyderabad – photo by Sumit K Sharma
    locations: [],
  },
  {
    id: 'puducherry',
    nameKey: 'distributors.states.puducherry',
    mapId: 'py',
    image: pexels(32550610), // seaside promenade, Puducherry – photo by Kamakshi
    locations: [],
  },
];
