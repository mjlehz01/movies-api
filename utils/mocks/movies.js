const moviesMock = [
  {
    id: '39af7c62-a608-4611-8a16-1a13b5d79d2d',
    title: 'Memories of Murder (Salinui chueok)',
    year: 1990,
    cover: 'http://dummyimage.com/139x180.png/cc0000/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 204,
    contentRating: 'PG-13',
    source: 'https://51.la/gravida/nisi/at/nibh.png',
    tags: ['Comedy|Romance'],
  },
  {
    id: '8a2f50a9-d596-46db-9b23-ce24d31dcc06',
    title: 'Simpsons Movie, The',
    year: 2001,
    cover: 'http://dummyimage.com/144x200.png/dddddd/000000',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 193,
    contentRating: 'PG-13',
    source: 'https://nydailynews.com/tincidunt.html',
    tags: ['Drama'],
  },
  {
    id: '052786ec-22fe-4b0a-913f-f6b293f3b174',
    title: "Men Don't Leave",
    year: 2008,
    cover: 'http://dummyimage.com/127x131.bmp/cc0000/ffffff',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    duration: 204,
    contentRating: 'R',
    source:
      'http://bloomberg.com/urna/pretium/nisl/ut/volutpat/sapien/arcu.png',
    tags: ['Drama', 'Drama', 'Crime|Drama', 'Comedy', 'Sci-Fi'],
  },
  {
    id: 'd4656653-6ad0-48e2-b75d-d88a3fec1317',
    title: "At Sword's Point",
    year: 1995,
    cover: 'http://dummyimage.com/104x203.jpg/ff4444/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 202,
    contentRating: 'PG',
    source: 'https://yale.edu/magna/vestibulum/aliquet/ultrices.png',
    tags: [
      'Drama|Thriller',
      'Action|Drama|Thriller',
      'Documentary',
      'Documentary|Drama|Musical',
      'Drama',
    ],
  },
  {
    id: '93b444d5-9d2b-42a4-a134-b75663cfeb3a',
    title: 'DNA',
    year: 1987,
    cover: 'http://dummyimage.com/143x173.png/ff4444/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    duration: 202,
    contentRating: 'G',
    source: 'http://weather.com/dui/proin/leo.html',
    tags: ['Drama', 'Action|Drama'],
  },
  {
    id: 'e73c6ee4-9e67-4144-b9c4-b00f2aa31ca2',
    title: 'And God Created Woman (Et Dieu... créa la femme)',
    year: 2007,
    cover: 'http://dummyimage.com/119x166.bmp/5fa2dd/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    duration: 189,
    contentRating: 'R',
    source: 'https://cnet.com/vel/ipsum/praesent/blandit.jpg',
    tags: ['Drama', 'Drama|Thriller'],
  },
  {
    id: '47cfd2c8-5d02-452b-a2b9-325e87aa0d71',
    title: "Dead Man's Burden",
    year: 1996,
    cover: 'http://dummyimage.com/211x106.png/5fa2dd/ffffff',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 189,
    contentRating: 'PG',
    source: 'http://free.fr/purus/sit/amet/nulla/quisque.jsp',
    tags: ['Drama', 'Drama', 'Drama|Romance', 'Drama|War', 'Drama|War'],
  },
  {
    id: 'ab7c4c5b-b2ba-42f2-be81-dd474c0f0217',
    title: 'Thompsons, The',
    year: 2002,
    cover: 'http://dummyimage.com/136x143.bmp/5fa2dd/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    duration: 194,
    contentRating: 'R',
    source: 'http://home.pl/rhoncus/sed/vestibulum/sit.json',
    tags: ['Comedy|Drama|Fantasy|Romance', 'Drama', 'Drama', 'Documentary'],
  },
  {
    id: '6262eacd-40d4-4063-a1ef-7cb543b49553',
    title: 'Feet First',
    year: 1990,
    cover: 'http://dummyimage.com/181x154.jpg/ff4444/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 193,
    contentRating: 'NC-17',
    source: 'http://live.com/vel/augue/vestibulum.jpg',
    tags: [
      'Action|Comedy|Crime',
      'Drama',
      'Adventure',
      'Horror|Thriller',
      'Comedy|Drama|Romance',
    ],
  },
  {
    id: 'dd72e066-8459-4f23-8005-3820ef42083d',
    title: 'Six Weeks',
    year: 1992,
    cover: 'http://dummyimage.com/127x197.png/cc0000/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 200,
    contentRating: 'PG-13',
    source: 'http://livejournal.com/aenean/sit.html',
    tags: ['Comedy|Musical|Romance'],
  },
];
function filteredMoviesMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}
class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }
  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}
module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock,
};
