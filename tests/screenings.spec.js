import { jest } from '@jest/globals';
import {
  trimData,
  filterOldScreenings,
  filterNextFiveDaysScreenings,
} from '../src/screenings.js';

// Mock Date
beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2022, 0, 27).getTime());
});

afterEach(() => {
  jest.clearAllTimers();
});

test('If array gets trimmed down to id, title, start_time, movieId, room and image', async () => {
  const screeningsArray = data.splice(0, 10);
  const trimmedDataArray = await trimData(screeningsArray);

  trimmedDataArray.forEach((screening) => {
    expect(screening.id).toBeTruthy();
    expect(screening.title).toBeTruthy();
    expect(screening.start_time).toBeTruthy();
    expect(screening.movieId).toBeTruthy();
    expect(screening.image).toBeTruthy();
    expect(screening.room).toBeTruthy();
  });
});

test('If old screenings are removed from array', async () => {
  const date = new Date();
  const screeningsArray = await trimData(data);
  const filteredScreenings = filterOldScreenings(screeningsArray, date);

  filteredScreenings.forEach((screening) => {
    expect(Date.parse(screening.start_time) > Date.parse(date));
  });
});

test('If only screenings five days ahead is in the array', async () => {
  const date = new Date();
  const ms = new Date().getTime() + 86400000 * 5;
  const futureDate = new Date(ms);
  const screeningsArray = await filterOldScreenings(trimData(data), date);

  const futureScreenings = filterNextFiveDaysScreenings(
    screeningsArray,
    futureDate
  );

  futureScreenings.forEach((screening) => {
    expect(Date.parse(screening.start_time) < Date.parse(futureDate));
  });
});

// MOCK data
const data = [
  {
    id: 1,
    attributes: {
      start_time: '2022-01-24T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:31:58.536Z',
      updatedAt: '2022-01-23T10:31:58.536Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 2,
    attributes: {
      start_time: '2022-01-24T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:31:59.065Z',
      updatedAt: '2022-01-23T10:31:59.065Z',
      movie: {
        data: {
          id: 8,
          attributes: {
            title: 'Idiocracy',
            imdbId: 'tt0387808',
            intro:
              "Private **Joe Bauers**, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he's easily the most intelligent person alive.\n\nSee more info [on IMDB](https://imdb.com/title/tt0387808)",
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            },
            createdAt: '2022-01-17T09:32:08.570Z',
            updatedAt: '2022-01-18T08:48:02.876Z',
            publishedAt: '2022-01-17T09:32:12.868Z',
          },
        },
      },
    },
  },
  {
    id: 3,
    attributes: {
      start_time: '2022-01-24T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:31:59.612Z',
      updatedAt: '2022-01-23T10:31:59.612Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 4,
    attributes: {
      start_time: '2022-01-24T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:00.277Z',
      updatedAt: '2022-01-23T10:32:00.277Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 5,
    attributes: {
      start_time: '2022-01-25T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:00.822Z',
      updatedAt: '2022-01-23T10:32:00.822Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 6,
    attributes: {
      start_time: '2022-01-25T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:01.366Z',
      updatedAt: '2022-01-23T10:32:01.366Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 7,
    attributes: {
      start_time: '2022-01-25T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:01.931Z',
      updatedAt: '2022-01-23T10:32:01.931Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 8,
    attributes: {
      start_time: '2022-01-25T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:02.611Z',
      updatedAt: '2022-01-23T10:32:02.611Z',
      movie: {
        data: {
          id: 1,
          attributes: {
            title: 'The Shawshank Redemption',
            imdbId: 'tt0111161',
            intro:
              'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n\nSee more info [on IMDB](https://imdb.com/title/tt0111161)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:14.315Z',
            updatedAt: '2022-01-18T08:47:01.417Z',
            publishedAt: '2022-01-17T04:59:16.846Z',
          },
        },
      },
    },
  },
  {
    id: 9,
    attributes: {
      start_time: '2022-01-26T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:03.180Z',
      updatedAt: '2022-01-23T10:32:03.180Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 10,
    attributes: {
      start_time: '2022-01-26T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:03.768Z',
      updatedAt: '2022-01-23T10:32:03.768Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 11,
    attributes: {
      start_time: '2022-01-26T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:04.326Z',
      updatedAt: '2022-01-23T10:32:04.326Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 12,
    attributes: {
      start_time: '2022-01-26T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:05.168Z',
      updatedAt: '2022-01-23T10:32:05.168Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 13,
    attributes: {
      start_time: '2022-01-27T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:05.701Z',
      updatedAt: '2022-01-23T10:32:05.701Z',
      movie: {
        data: {
          id: 4,
          attributes: {
            title: 'The Dark Knight',
            imdbId: 'tt0468569',
            intro:
              'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:58.423Z',
            updatedAt: '2022-01-18T08:47:52.866Z',
            publishedAt: '2022-01-17T05:01:00.594Z',
          },
        },
      },
    },
  },
  {
    id: 14,
    attributes: {
      start_time: '2022-01-27T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:06.233Z',
      updatedAt: '2022-01-23T10:32:06.233Z',
      movie: {
        data: {
          id: 8,
          attributes: {
            title: 'Idiocracy',
            imdbId: 'tt0387808',
            intro:
              "Private **Joe Bauers**, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he's easily the most intelligent person alive.\n\nSee more info [on IMDB](https://imdb.com/title/tt0387808)",
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            },
            createdAt: '2022-01-17T09:32:08.570Z',
            updatedAt: '2022-01-18T08:48:02.876Z',
            publishedAt: '2022-01-17T09:32:12.868Z',
          },
        },
      },
    },
  },
  {
    id: 15,
    attributes: {
      start_time: '2022-01-27T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:06.896Z',
      updatedAt: '2022-01-23T10:32:06.896Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 16,
    attributes: {
      start_time: '2022-01-27T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:07.444Z',
      updatedAt: '2022-01-23T10:32:07.444Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 17,
    attributes: {
      start_time: '2022-01-28T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:07.991Z',
      updatedAt: '2022-01-23T10:32:07.991Z',
      movie: {
        data: {
          id: 1,
          attributes: {
            title: 'The Shawshank Redemption',
            imdbId: 'tt0111161',
            intro:
              'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n\nSee more info [on IMDB](https://imdb.com/title/tt0111161)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:14.315Z',
            updatedAt: '2022-01-18T08:47:01.417Z',
            publishedAt: '2022-01-17T04:59:16.846Z',
          },
        },
      },
    },
  },
  {
    id: 18,
    attributes: {
      start_time: '2022-01-28T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:08.517Z',
      updatedAt: '2022-01-23T10:32:08.517Z',
      movie: {
        data: {
          id: 1,
          attributes: {
            title: 'The Shawshank Redemption',
            imdbId: 'tt0111161',
            intro:
              'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n\nSee more info [on IMDB](https://imdb.com/title/tt0111161)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:14.315Z',
            updatedAt: '2022-01-18T08:47:01.417Z',
            publishedAt: '2022-01-17T04:59:16.846Z',
          },
        },
      },
    },
  },
  {
    id: 19,
    attributes: {
      start_time: '2022-01-28T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:09.055Z',
      updatedAt: '2022-01-23T10:32:09.055Z',
      movie: {
        data: {
          id: 1,
          attributes: {
            title: 'The Shawshank Redemption',
            imdbId: 'tt0111161',
            intro:
              'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n\nSee more info [on IMDB](https://imdb.com/title/tt0111161)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:14.315Z',
            updatedAt: '2022-01-18T08:47:01.417Z',
            publishedAt: '2022-01-17T04:59:16.846Z',
          },
        },
      },
    },
  },
  {
    id: 20,
    attributes: {
      start_time: '2022-01-28T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:09.591Z',
      updatedAt: '2022-01-23T10:32:09.591Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 21,
    attributes: {
      start_time: '2022-01-29T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:10.131Z',
      updatedAt: '2022-01-23T10:32:10.131Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 22,
    attributes: {
      start_time: '2022-01-29T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:10.695Z',
      updatedAt: '2022-01-23T10:32:10.695Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 23,
    attributes: {
      start_time: '2022-01-29T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:11.239Z',
      updatedAt: '2022-01-23T10:32:11.239Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 24,
    attributes: {
      start_time: '2022-01-29T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:11.766Z',
      updatedAt: '2022-01-23T10:32:11.766Z',
      movie: {
        data: {
          id: 1,
          attributes: {
            title: 'The Shawshank Redemption',
            imdbId: 'tt0111161',
            intro:
              'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n\nSee more info [on IMDB](https://imdb.com/title/tt0111161)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:14.315Z',
            updatedAt: '2022-01-18T08:47:01.417Z',
            publishedAt: '2022-01-17T04:59:16.846Z',
          },
        },
      },
    },
  },
  {
    id: 25,
    attributes: {
      start_time: '2022-01-30T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:12.316Z',
      updatedAt: '2022-01-23T10:32:12.316Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 26,
    attributes: {
      start_time: '2022-01-30T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:12.918Z',
      updatedAt: '2022-01-23T10:32:12.918Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 27,
    attributes: {
      start_time: '2022-01-30T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:13.489Z',
      updatedAt: '2022-01-23T10:32:13.489Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 28,
    attributes: {
      start_time: '2022-01-30T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:14.039Z',
      updatedAt: '2022-01-23T10:32:14.039Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 29,
    attributes: {
      start_time: '2022-01-31T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:14.668Z',
      updatedAt: '2022-01-23T10:32:14.668Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 30,
    attributes: {
      start_time: '2022-01-31T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:15.220Z',
      updatedAt: '2022-01-23T10:32:15.220Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 31,
    attributes: {
      start_time: '2022-01-31T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:15.771Z',
      updatedAt: '2022-01-23T10:32:15.771Z',
      movie: {
        data: {
          id: 4,
          attributes: {
            title: 'The Dark Knight',
            imdbId: 'tt0468569',
            intro:
              'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:58.423Z',
            updatedAt: '2022-01-18T08:47:52.866Z',
            publishedAt: '2022-01-17T05:01:00.594Z',
          },
        },
      },
    },
  },
  {
    id: 32,
    attributes: {
      start_time: '2022-01-31T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:16.822Z',
      updatedAt: '2022-01-23T10:32:16.822Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 33,
    attributes: {
      start_time: '2022-02-01T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:17.391Z',
      updatedAt: '2022-01-23T10:32:17.391Z',
      movie: {
        data: {
          id: 8,
          attributes: {
            title: 'Idiocracy',
            imdbId: 'tt0387808',
            intro:
              "Private **Joe Bauers**, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he's easily the most intelligent person alive.\n\nSee more info [on IMDB](https://imdb.com/title/tt0387808)",
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            },
            createdAt: '2022-01-17T09:32:08.570Z',
            updatedAt: '2022-01-18T08:48:02.876Z',
            publishedAt: '2022-01-17T09:32:12.868Z',
          },
        },
      },
    },
  },
  {
    id: 34,
    attributes: {
      start_time: '2022-02-01T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:17.954Z',
      updatedAt: '2022-01-23T10:32:17.954Z',
      movie: {
        data: {
          id: 1,
          attributes: {
            title: 'The Shawshank Redemption',
            imdbId: 'tt0111161',
            intro:
              'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n\nSee more info [on IMDB](https://imdb.com/title/tt0111161)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:14.315Z',
            updatedAt: '2022-01-18T08:47:01.417Z',
            publishedAt: '2022-01-17T04:59:16.846Z',
          },
        },
      },
    },
  },
  {
    id: 35,
    attributes: {
      start_time: '2022-02-01T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:18.516Z',
      updatedAt: '2022-01-23T10:32:18.516Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 36,
    attributes: {
      start_time: '2022-02-01T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:19.051Z',
      updatedAt: '2022-01-23T10:32:19.051Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 37,
    attributes: {
      start_time: '2022-02-02T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:19.612Z',
      updatedAt: '2022-01-23T10:32:19.612Z',
      movie: {
        data: {
          id: 8,
          attributes: {
            title: 'Idiocracy',
            imdbId: 'tt0387808',
            intro:
              "Private **Joe Bauers**, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he's easily the most intelligent person alive.\n\nSee more info [on IMDB](https://imdb.com/title/tt0387808)",
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            },
            createdAt: '2022-01-17T09:32:08.570Z',
            updatedAt: '2022-01-18T08:48:02.876Z',
            publishedAt: '2022-01-17T09:32:12.868Z',
          },
        },
      },
    },
  },
  {
    id: 38,
    attributes: {
      start_time: '2022-02-02T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:20.188Z',
      updatedAt: '2022-01-23T10:32:20.188Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 39,
    attributes: {
      start_time: '2022-02-02T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:20.722Z',
      updatedAt: '2022-01-23T10:32:20.722Z',
      movie: {
        data: {
          id: 4,
          attributes: {
            title: 'The Dark Knight',
            imdbId: 'tt0468569',
            intro:
              'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:58.423Z',
            updatedAt: '2022-01-18T08:47:52.866Z',
            publishedAt: '2022-01-17T05:01:00.594Z',
          },
        },
      },
    },
  },
  {
    id: 40,
    attributes: {
      start_time: '2022-02-02T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:21.266Z',
      updatedAt: '2022-01-23T10:32:21.266Z',
      movie: {
        data: {
          id: 1,
          attributes: {
            title: 'The Shawshank Redemption',
            imdbId: 'tt0111161',
            intro:
              'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n\nSee more info [on IMDB](https://imdb.com/title/tt0111161)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:14.315Z',
            updatedAt: '2022-01-18T08:47:01.417Z',
            publishedAt: '2022-01-17T04:59:16.846Z',
          },
        },
      },
    },
  },
  {
    id: 41,
    attributes: {
      start_time: '2022-02-03T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:21.864Z',
      updatedAt: '2022-01-23T10:32:21.864Z',
      movie: {
        data: {
          id: 1,
          attributes: {
            title: 'The Shawshank Redemption',
            imdbId: 'tt0111161',
            intro:
              'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n\nSee more info [on IMDB](https://imdb.com/title/tt0111161)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:14.315Z',
            updatedAt: '2022-01-18T08:47:01.417Z',
            publishedAt: '2022-01-17T04:59:16.846Z',
          },
        },
      },
    },
  },
  {
    id: 42,
    attributes: {
      start_time: '2022-02-03T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:22.392Z',
      updatedAt: '2022-01-23T10:32:22.392Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 43,
    attributes: {
      start_time: '2022-02-03T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:22.955Z',
      updatedAt: '2022-01-23T10:32:22.955Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 44,
    attributes: {
      start_time: '2022-02-03T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:23.740Z',
      updatedAt: '2022-01-23T10:32:23.740Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 45,
    attributes: {
      start_time: '2022-02-04T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:24.272Z',
      updatedAt: '2022-01-23T10:32:24.272Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 46,
    attributes: {
      start_time: '2022-02-04T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:24.811Z',
      updatedAt: '2022-01-23T10:32:24.811Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 47,
    attributes: {
      start_time: '2022-02-04T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:25.382Z',
      updatedAt: '2022-01-23T10:32:25.382Z',
      movie: {
        data: {
          id: 1,
          attributes: {
            title: 'The Shawshank Redemption',
            imdbId: 'tt0111161',
            intro:
              'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n\nSee more info [on IMDB](https://imdb.com/title/tt0111161)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:14.315Z',
            updatedAt: '2022-01-18T08:47:01.417Z',
            publishedAt: '2022-01-17T04:59:16.846Z',
          },
        },
      },
    },
  },
  {
    id: 48,
    attributes: {
      start_time: '2022-02-04T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:25.918Z',
      updatedAt: '2022-01-23T10:32:25.918Z',
      movie: {
        data: {
          id: 4,
          attributes: {
            title: 'The Dark Knight',
            imdbId: 'tt0468569',
            intro:
              'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:58.423Z',
            updatedAt: '2022-01-18T08:47:52.866Z',
            publishedAt: '2022-01-17T05:01:00.594Z',
          },
        },
      },
    },
  },
  {
    id: 49,
    attributes: {
      start_time: '2022-02-05T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:26.441Z',
      updatedAt: '2022-01-23T10:32:26.441Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 50,
    attributes: {
      start_time: '2022-02-05T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:26.971Z',
      updatedAt: '2022-01-23T10:32:26.971Z',
      movie: {
        data: {
          id: 8,
          attributes: {
            title: 'Idiocracy',
            imdbId: 'tt0387808',
            intro:
              "Private **Joe Bauers**, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he's easily the most intelligent person alive.\n\nSee more info [on IMDB](https://imdb.com/title/tt0387808)",
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            },
            createdAt: '2022-01-17T09:32:08.570Z',
            updatedAt: '2022-01-18T08:48:02.876Z',
            publishedAt: '2022-01-17T09:32:12.868Z',
          },
        },
      },
    },
  },
  {
    id: 51,
    attributes: {
      start_time: '2022-02-05T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:27.507Z',
      updatedAt: '2022-01-23T10:32:27.507Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 52,
    attributes: {
      start_time: '2022-02-05T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:28.083Z',
      updatedAt: '2022-01-23T10:32:28.083Z',
      movie: {
        data: {
          id: 4,
          attributes: {
            title: 'The Dark Knight',
            imdbId: 'tt0468569',
            intro:
              'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:58.423Z',
            updatedAt: '2022-01-18T08:47:52.866Z',
            publishedAt: '2022-01-17T05:01:00.594Z',
          },
        },
      },
    },
  },
  {
    id: 53,
    attributes: {
      start_time: '2022-02-06T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:28.663Z',
      updatedAt: '2022-01-23T10:32:28.663Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 54,
    attributes: {
      start_time: '2022-02-06T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:29.220Z',
      updatedAt: '2022-01-23T10:32:29.220Z',
      movie: {
        data: {
          id: 4,
          attributes: {
            title: 'The Dark Knight',
            imdbId: 'tt0468569',
            intro:
              'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:58.423Z',
            updatedAt: '2022-01-18T08:47:52.866Z',
            publishedAt: '2022-01-17T05:01:00.594Z',
          },
        },
      },
    },
  },
  {
    id: 55,
    attributes: {
      start_time: '2022-02-06T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:30.046Z',
      updatedAt: '2022-01-23T10:32:30.046Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 56,
    attributes: {
      start_time: '2022-02-06T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:30.580Z',
      updatedAt: '2022-01-23T10:32:30.580Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 57,
    attributes: {
      start_time: '2022-02-07T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:31.119Z',
      updatedAt: '2022-01-23T10:32:31.119Z',
      movie: {
        data: {
          id: 4,
          attributes: {
            title: 'The Dark Knight',
            imdbId: 'tt0468569',
            intro:
              'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:58.423Z',
            updatedAt: '2022-01-18T08:47:52.866Z',
            publishedAt: '2022-01-17T05:01:00.594Z',
          },
        },
      },
    },
  },
  {
    id: 58,
    attributes: {
      start_time: '2022-02-07T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:31.650Z',
      updatedAt: '2022-01-23T10:32:31.650Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 59,
    attributes: {
      start_time: '2022-02-07T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:32.213Z',
      updatedAt: '2022-01-23T10:32:32.213Z',
      movie: {
        data: {
          id: 8,
          attributes: {
            title: 'Idiocracy',
            imdbId: 'tt0387808',
            intro:
              "Private **Joe Bauers**, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he's easily the most intelligent person alive.\n\nSee more info [on IMDB](https://imdb.com/title/tt0387808)",
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            },
            createdAt: '2022-01-17T09:32:08.570Z',
            updatedAt: '2022-01-18T08:48:02.876Z',
            publishedAt: '2022-01-17T09:32:12.868Z',
          },
        },
      },
    },
  },
  {
    id: 60,
    attributes: {
      start_time: '2022-02-07T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:32.752Z',
      updatedAt: '2022-01-23T10:32:32.752Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 61,
    attributes: {
      start_time: '2022-02-08T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:33.367Z',
      updatedAt: '2022-01-23T10:32:33.367Z',
      movie: {
        data: {
          id: 4,
          attributes: {
            title: 'The Dark Knight',
            imdbId: 'tt0468569',
            intro:
              'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:58.423Z',
            updatedAt: '2022-01-18T08:47:52.866Z',
            publishedAt: '2022-01-17T05:01:00.594Z',
          },
        },
      },
    },
  },
  {
    id: 62,
    attributes: {
      start_time: '2022-02-08T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:33.919Z',
      updatedAt: '2022-01-23T10:32:33.919Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 63,
    attributes: {
      start_time: '2022-02-08T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:34.469Z',
      updatedAt: '2022-01-23T10:32:34.469Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 64,
    attributes: {
      start_time: '2022-02-08T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:35.006Z',
      updatedAt: '2022-01-23T10:32:35.006Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 65,
    attributes: {
      start_time: '2022-02-09T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:35.544Z',
      updatedAt: '2022-01-23T10:32:35.544Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 66,
    attributes: {
      start_time: '2022-02-09T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:36.075Z',
      updatedAt: '2022-01-23T10:32:36.075Z',
      movie: {
        data: {
          id: 4,
          attributes: {
            title: 'The Dark Knight',
            imdbId: 'tt0468569',
            intro:
              'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:58.423Z',
            updatedAt: '2022-01-18T08:47:52.866Z',
            publishedAt: '2022-01-17T05:01:00.594Z',
          },
        },
      },
    },
  },
  {
    id: 67,
    attributes: {
      start_time: '2022-02-09T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:36.776Z',
      updatedAt: '2022-01-23T10:32:36.776Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 68,
    attributes: {
      start_time: '2022-02-09T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:37.605Z',
      updatedAt: '2022-01-23T10:32:37.605Z',
      movie: {
        data: {
          id: 1,
          attributes: {
            title: 'The Shawshank Redemption',
            imdbId: 'tt0111161',
            intro:
              'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n\nSee more info [on IMDB](https://imdb.com/title/tt0111161)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:14.315Z',
            updatedAt: '2022-01-18T08:47:01.417Z',
            publishedAt: '2022-01-17T04:59:16.846Z',
          },
        },
      },
    },
  },
  {
    id: 69,
    attributes: {
      start_time: '2022-02-10T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:38.433Z',
      updatedAt: '2022-01-23T10:32:38.433Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 70,
    attributes: {
      start_time: '2022-02-10T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:39.247Z',
      updatedAt: '2022-01-23T10:32:39.247Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 71,
    attributes: {
      start_time: '2022-02-10T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:39.883Z',
      updatedAt: '2022-01-23T10:32:39.883Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 72,
    attributes: {
      start_time: '2022-02-10T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:40.408Z',
      updatedAt: '2022-01-23T10:32:40.408Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 73,
    attributes: {
      start_time: '2022-02-11T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:40.940Z',
      updatedAt: '2022-01-23T10:32:40.940Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 74,
    attributes: {
      start_time: '2022-02-11T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:41.527Z',
      updatedAt: '2022-01-23T10:32:41.527Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
  {
    id: 75,
    attributes: {
      start_time: '2022-02-11T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:42.401Z',
      updatedAt: '2022-01-23T10:32:42.401Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 76,
    attributes: {
      start_time: '2022-02-11T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:42.953Z',
      updatedAt: '2022-01-23T10:32:42.953Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 77,
    attributes: {
      start_time: '2022-02-12T12:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:43.668Z',
      updatedAt: '2022-01-23T10:32:43.668Z',
      movie: {
        data: {
          id: 3,
          attributes: {
            title: 'The Godfather: Part II',
            imdbId: 'tt0071562',
            intro:
              'The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:00:31.562Z',
            updatedAt: '2022-01-18T08:46:47.388Z',
            publishedAt: '2022-01-17T05:00:33.453Z',
          },
        },
      },
    },
  },
  {
    id: 78,
    attributes: {
      start_time: '2022-02-12T17:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:44.202Z',
      updatedAt: '2022-01-23T10:32:44.202Z',
      movie: {
        data: {
          id: 5,
          attributes: {
            title: '12 Angry Men',
            imdbId: 'tt0050083',
            intro:
              'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
            },
            createdAt: '2022-01-17T05:01:21.807Z',
            updatedAt: '2022-01-18T08:48:15.429Z',
            publishedAt: '2022-01-17T05:01:24.036Z',
          },
        },
      },
    },
  },
  {
    id: 79,
    attributes: {
      start_time: '2022-02-12T19:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:44.767Z',
      updatedAt: '2022-01-23T10:32:44.767Z',
      movie: {
        data: {
          id: 10,
          attributes: {
            title: 'Threat Level Midnight: The Movie',
            imdbId: 'tt11620828',
            intro:
              'After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg',
            },
            createdAt: '2022-01-17T10:51:45.145Z',
            updatedAt: '2022-01-18T08:47:13.309Z',
            publishedAt: '2022-01-17T10:51:53.355Z',
          },
        },
      },
    },
  },
  {
    id: 80,
    attributes: {
      start_time: '2022-02-12T21:00:00.000Z',
      room: 'Stora salongen',
      createdAt: '2022-01-23T10:32:45.313Z',
      updatedAt: '2022-01-23T10:32:45.313Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'The Godfather',
            imdbId: 'tt0068646',
            intro:
              'The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)',
            image: {
              url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            },
            createdAt: '2022-01-17T04:59:42.763Z',
            updatedAt: '2022-01-18T08:47:25.840Z',
            publishedAt: '2022-01-17T04:59:44.929Z',
          },
        },
      },
    },
  },
];
