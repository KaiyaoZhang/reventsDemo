const events = [
  {
    id: '1',
    title: 'Tour of CN Tower',
    date: '2018-03-27T11:00:00',
    category: 'travel', 
    description:
      'The CN Tower is a 553.3 m-high concrete communications and observation tower located in Downtown Toronto, Ontario, Canada. Built on the former Railway Lands, it was completed in 1976. Its name "CN" originally referred to Canadian National.',
    city: 'Toronto, Canada',
    venue: "301 Front Street, ON, Toronto",
    venueLatLng: {
      lat: 43.642784,
      lng: -79.386982
    },
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/80.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/42.jpg'
      },
      {
        id: 'c',
        name: 'Max',
        photoURL: 'https://randomuser.me/api/portraits/men/62.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Tour to Niagara Falls',
    date: '2018-03-28T14:00:00',
    category: 'travel',
    description:
      'Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the US state of New York and the Canadian province of Ontario',
    city: 'Niagara Falls, Canada',
    venue: '6660 Niagara Pkwy, Niagara Falls, ON, Canada',
    venueLatLng: {
      lat: 43.084077,
      lng: -79.076524
    },
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/women/52.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/90.jpg'
      }
    ]
  },
  {
    id: '3',
    title: 'St. Lawrence Market',
    date: '2018-06-17T09:00:00',
    category: 'culture',
    description:
      'St. Lawrence Market is a major public market in Toronto. It is located along Front Street East and Jarvis Street in the St. Lawrence neighbourhood of downtown Toronto.',
    city: 'Toronto, Canada',
    venue: '93 Front St E, Toronto, ON, Canada',
    venueLatLng: {
      lat: 43.648683,
      lng: -79.371526
    },
    hostedBy: 'Sofia',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/52.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Shirley',
        photoURL: 'https://randomuser.me/api/portraits/women/12.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/90.jpg'
      }
    ]
  },
  {
    id: '4',
    title: 'Superb Janpanses Sushi',
    date: '2018-03-28T14:00:00',
    category: 'food',
    description:
      'I am a Sushi lover, I want to meetup people who also loving eating Sushi. This Sushi resturant is best one I have ever tried in Toronto. Join me, let\'s try it together!',
    city: 'Toronto, Canada',
    venue: '482 Bloor St W, Toronto, ON, Canada',
    venueLatLng: {
      lat: 43.665714,
      lng: -79.409610
    },
    hostedBy: 'Shirley',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/12.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Kathy',
        photoURL: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/90.jpg'
      }
    ]
  },
  {
    id: '5',
    title: 'Spring Music Concert',
    date: '2018-03-28T14:00:00',
    category: 'music',
    description:
      'This is the first music concert in spring this year. Winter has gone, join me to enjoy this music!',
    city: 'Toronto, Canada',
    venue: '1 Front St E, Toronto, ON, Canada',
    venueLatLng: {
      lat: 43.64684,
      lng: -79.376047
    },
    hostedBy: 'Jenny',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/0.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Kathy',
        photoURL: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/90.jpg'
      }
    ]
  },
  {
    id: '6',
    title: 'Raptors Game',
    date: '2018-03-28T14:00:00',
    category: 'drinks',
    description:
      'Toronto Raptors VS New York Knicks, Cheering for your favorite player!!! Tickets are from $200',
    city: 'Toronto, Canada',
    venue: '40 Bay St, Toronto, ON, Canada',
    venueLatLng: {
      lat: 43.643660,
      lng: -79.379088
    },
    hostedBy: 'Gorden',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/12.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Robert',
        photoURL: 'https://randomuser.me/api/portraits/men/2.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/90.jpg'
      }
    ]
  }
]

export default events;