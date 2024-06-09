import { tokens } from "../theme";

export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const mockBarData = [
  {
    country: "United States of America",
    intensity: 6,
    relevance: 2,
    likelihood: 3,
  },
  {
    country: "Canada",
    intensity: 4,
    relevance: 5,
    likelihood: 2,
  },
  {
    country: "Saudi Arabia",
    intensity: 1,
    relevance: 3,
    likelihood: 2,
  },
  {
    country: "Russia",
    intensity: 2,
    relevance: 1,
    likelihood: 2,
  },
  {
    country: "Egypt",
    intensity: 6,
    relevance: 1,
    likelihood: 1,
  },
  {
    country: "India",
    intensity: 6,
    relevance: 2,
    likelihood: 5,
  },
  {
    country: "Ukraine",
    intensity: 3,
    relevance: 3,
    likelihood: 3,
  },
  {
    country: "China",
    intensity: 4,
    relevance: 1,
    likelihood: 2,
  },
  {
    country: "Niger",
    intensity: 7,
    relevance: 1,
    likelihood: 4,
  },
  {
    country: "Iraq",
    intensity: 6,
    relevance: 1,
    likelihood: 4,
  },
  {
    country: "Iran",
    intensity: 2,
    relevance: 6,
    likelihood: 1,
  },
  {
    country: "Germany",
    intensity: 8,
    relevance: 1,
    likelihood: 1,
  },
];

export const mockLineData = [
  {
    id: "South Africa",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "end_year",
        y: 101,
      },
      {
        x: "intensity",
        y: 75,
      },
      {
        x: "sector",
        y: 36,
      },
      {
        x: "insight",
        y: 216,
      },
      {
        x: "region",
        y: 35,
      },
      {
        x: "start_year",
        y: 236,
      },
      {
        x: "impact",
        y: 88,
      },
      {
        x: "added",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "published",
        y: 1,
      },
      {
        x: "relevance",
        y: 35,
      },
      {
        x: "source",
        y: 14,
      },
    ],
  },
  {
    id: "India",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "end_year",
        y: 212,
      },
      {
        x: "intensity",
        y: 190,
      },
      {
        x: "sector",
        y: 270,
      },
      {
        x: "insight",
        y: 9,
      },
      {
        x: "region",
        y: 75,
      },
      {
        x: "start_year",
        y: 175,
      },
      {
        x: "impact",
        y: 33,
      },
      {
        x: "added",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "published",
        y: 87,
      },
      {
        x: "relevance",
        y: 299,
      },
      {
        x: "source",
        y: 251,
      },
    ],
  },
  {
    id: "usa",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "end_year",
        y: 191,
      },
      {
        x: "intensity",
        y: 136,
      },
      {
        x: "sector",
        y: 91,
      },
      {
        x: "insight",
        y: 190,
      },
      {
        x: "region",
        y: 211,
      },
      {
        x: "start_year",
        y: 152,
      },
      {
        x: "impact",
        y: 189,
      },
      {
        x: "added",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "published",
        y: 197,
      },
      {
        x: "relevance",
        y: 107,
      },
      {
        x: "source",
        y: 170,
      },
    ],
  },
];
