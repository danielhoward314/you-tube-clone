import * as moment from 'moment'

const dates = [
  "20180831",
  "20131031",
  "20171231",
  "20180317",
  "20181009",
  "20180713",
  "20170920",
  "20171206",
  "20160214",
  "20170214",
  "20171124",
  "20111031",
]
const datesArr = dates.map((date) => {
  return moment(date, "YYYYMMDD").fromNow()
})

export const videos = [
  {
    title: '10,000 Days | Tool',
    author: 'kkdaimo',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[0]
  },
  {
    title: 'How to roll sushi',
    author: 'purefactor',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[1]
  },
  {
    title: 'Learn David Gilmour bends',
    author: 'pulsify',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[2]
  },
  {
    title: 'Djangular tutorial',
    author: 'Stump1337',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[3]
  },
  {
    title: 'Kyrie crossover compilation',
    author: 'Pangea',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[4]
  },
  {
    title: 'Joe Rogan talks to a cucumber on ketogenic diet',
    author: 'Mangrove pup2122',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[5]
  },
  {
    title: 'Real Atlantis',
    author: 'neferti',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[6]
  },
  {
    title: 'Christopher Walken impressions',
    author: 'agoravia',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[7]
  },
  {
    title: 'Mig Tig tutorial',
    author: 'moochi1347',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[8]
  },
  {
    title: 'Greentube surf outfit',
    author: 'holtboltskolt',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[9]
  },
  {
    title: 'origins of language',
    author: 'vagrant54',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[10]
  },
  {
    title: 'William Carlos Williams reads To Elsie',
    author: 'dvorakAtom',
    imageUrl: 'http://www.public-domain-photos.com/free-stock-photos-4/flowers/yellow-rose-3.jpg',
    views: 100000,
    uploadDate: datesArr[11]
  },
]

export const videoGroup = [
  {
    groupType: 'Recommended',
    videos: videos
  },
  {
    groupType: 'YouTube Originals',
    videos: videos
  },
  {
    groupType: 'ChillHop',
    videos: videos
  },
  {
    groupType: 'Joe Rogan',
    videos: videos
  }
]
