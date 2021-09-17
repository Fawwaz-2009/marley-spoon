import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getRecipes } from '../../services/index';
import fetch from 'node-fetch';
import { Recipe } from '../../interfaces';
globalThis.fetch = fetch;

const recipes: Recipe[] = [
  {
    calories: 788,
    chef: null,
    description:
      '*Grilled Cheese 101*: Use delicious cheese and good quality bread; make crunchy on the outside and ooey gooey on the inside; add one or two ingredients for a flavor punch! In this case, cherry preserves serve as a sweet contrast to cheddar cheese, and basil adds a light, refreshing note. Use __mayonnaise__ on the outside of the bread to achieve the ultimate, crispy, golden-brown __grilled cheese__. Cook, relax, and enjoy!',
    id: '4dT8tcb6ukGSIg2YyuGEOm',
    photo: {
      alt: 'White Cheddar Grilled Cheese with Cherry Preserves & Basil',
      height: 680,
      url: 'https://images.ctfassets.net/kk2bw5ojx476/61XHcqOBFYAYCGsKugoMYK/0009ec560684b37f7f7abadd66680179/SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg',
      width: 1020
    },
    tags: ['vegan'],
    title: 'White Cheddar Grilled Cheese with Cherry Preserves & Basil'
  },
  {
    calories: 900,
    chef: null,
    description:
      'Saag paneer is a popular Indian dish with iron-rich spinach and cubes of paneer, an Indian cheese that is firm enough to retain it\'s shape, but silky-soft on the inside. We have reimagined Saag Paneer and replaced the "paneer" with crispy cubes of firm tofu, making this already delicious and nutritious vegetarian dish burst with protein. Toasted pita bread is served alongside as an ode to naan. Cook, relax, and enjoy! [VIDEO](https://www.youtube.com/watch?v=RMzWWwfWdVs)',
    id: '5jy9hcMeEgQ4maKGqIOYW6',
    photo: {
      alt: 'Tofu Saag Paneer with Buttery Toasted Pita',
      height: 680,
      url: 'https://images.ctfassets.net/kk2bw5ojx476/48S44TRZN626y4Wy4CuOmA/9c0a510bc3d18dda9318c6bf49fac327/SKU1498_Hero_154__2_-adb6124909b48c69f869afecb78b6808-2.jpg',
      width: 1020
    },
    tags: null,
    title: 'Tofu Saag Paneer with Buttery Toasted Pita'
  },
  {
    calories: 345,
    chef: { name: 'Mark Zucchiniberg ' },
    description:
      'Warmer weather means the ushering in of grill season and this recipe completely celebrates the grill (or grill pan)! Squash and green beans are nicely charred then take a bath in a zesty cilantro-jalapeño dressing. After the steaks are perfectly seared, the same dressing does double duty as a tasty finishing sauce. A fresh radish salad tops it all off for crunch and a burst of color. Cook, relax, and enjoy!',
    id: '2E8bc3VcJmA8OgmQsageas',
    photo: {
      alt: 'Grilled Steak & Vegetables with Cilantro-Jalapeño Dressing',
      height: 680,
      url: 'https://images.ctfassets.net/kk2bw5ojx476/3TJp6aDAcMw6yMiE82Oy0K/2a4cde3c1c7e374166dcce1e900cb3c1/SKU1503_Hero_102__1_-6add52eb4eec83f785974ddeac3316b7.jpg',
      width: 1020
    },
    tags: null,
    title: 'Grilled Steak & Vegetables with Cilantro-Jalapeño Dressing'
  },
  {
    calories: 785,
    chef: { name: 'Jony Chives' },
    description:
      'Crispy chicken skin, tender meat, and rich, tomatoey sauce form a winning trifecta of delicious in this one-pot braise. We spoon it over rice and peas to soak up every last drop of goodness, and serve a tangy arugula salad alongside for a vibrant boost of flavor and color. Dinner is served! Cook, relax, and enjoy!',
    id: '437eO3ORCME46i02SeCW46',
    photo: {
      alt: 'Crispy Chicken and Rice        with Peas & Arugula Salad',
      height: 680,
      url: 'https://images.ctfassets.net/kk2bw5ojx476/5mFyTozvSoyE0Mqseoos86/fb88f4302cfd184492e548cde11a2555/SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg',
      width: 1020
    },
    tags: ['gluten free', 'healthy'],
    title: 'Crispy Chicken and Rice        with Peas & Arugula Salad'
  }
];

const HOST_URL = 'https://cdn.contentful.com';
const SPACE_ID = process.env.NEXT_PUBLIC_SPACE_ID;
const parts = [HOST_URL, 'spaces', SPACE_ID, 'environments', 'master', 'entries'];
const url = parts.join('/');

export const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.json({
        sys: { type: 'Array' },
        total: 4,
        skip: 0,
        limit: 100,
        items: [
          {
            metadata: { tags: [] },
            sys: {
              space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
              id: '4dT8tcb6ukGSIg2YyuGEOm',
              type: 'Entry',
              createdAt: '2018-05-07T13:38:22.351Z',
              updatedAt: '2018-05-07T13:41:01.986Z',
              environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
              revision: 2,
              contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'recipe' } },
              locale: 'en-US'
            },
            fields: {
              title: recipes[0].title,
              photo: { sys: { type: 'Link', linkType: 'Asset', id: '61XHcqOBFYAYCGsKugoMYK' } },
              calories: recipes[0].calories,
              description: recipes[0].description,
              tags: [{ sys: { type: 'Link', linkType: 'Entry', id: '3RvdyqS8408uQQkkeyi26k' } }]
            }
          },
          {
            metadata: { tags: [] },
            sys: {
              space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
              id: '5jy9hcMeEgQ4maKGqIOYW6',
              type: 'Entry',
              createdAt: '2018-05-07T13:40:27.932Z',
              updatedAt: '2018-05-07T13:40:27.932Z',
              environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
              revision: 1,
              contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'recipe' } },
              locale: 'en-US'
            },
            fields: {
              title: recipes[1].title,
              photo: { sys: { type: 'Link', linkType: 'Asset', id: '48S44TRZN626y4Wy4CuOmA' } },
              calories: recipes[1].calories,
              description: recipes[1].description
            }
          },
          {
            metadata: { tags: [] },
            sys: {
              space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
              id: '2E8bc3VcJmA8OgmQsageas',
              type: 'Entry',
              createdAt: '2018-05-07T13:30:34.066Z',
              updatedAt: '2018-05-07T13:37:01.760Z',
              environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
              revision: 3,
              contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'recipe' } },
              locale: 'en-US'
            },
            fields: {
              title: recipes[2].title,
              photo: { sys: { type: 'Link', linkType: 'Asset', id: '3TJp6aDAcMw6yMiE82Oy0K' } },
              calories: recipes[2].calories,
              description: recipes[2].description,
              chef: { sys: { type: 'Link', linkType: 'Entry', id: '1Z8SwWMmS8E84Iogk4E6ik' } }
            }
          },
          {
            metadata: { tags: [] },
            sys: {
              space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
              id: '437eO3ORCME46i02SeCW46',
              type: 'Entry',
              createdAt: '2018-05-07T13:32:04.593Z',
              updatedAt: '2018-05-07T13:36:41.741Z',
              environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
              revision: 3,
              contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'recipe' } },
              locale: 'en-US'
            },
            fields: {
              title: recipes[3].title,
              photo: { sys: { type: 'Link', linkType: 'Asset', id: '5mFyTozvSoyE0Mqseoos86' } },
              calories: 785,
              description: recipes[3].description,
              chef: { sys: { type: 'Link', linkType: 'Entry', id: 'NysGB8obcaQWmq0aQ6qkC' } },
              tags: [{ sys: { type: 'Link', linkType: 'Entry', id: '61Lgvo6rzUIgIGgcOAMgQ8' } }, { sys: { type: 'Link', linkType: 'Entry', id: 'gUfhl28dfaeU6wcWSqs0q' } }]
            }
          }
        ],
        includes: {
          Entry: [
            {
              metadata: { tags: [] },
              sys: {
                space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
                id: '1Z8SwWMmS8E84Iogk4E6ik',
                type: 'Entry',
                createdAt: '2018-05-07T13:28:25.324Z',
                updatedAt: '2018-05-07T14:17:27.403Z',
                environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
                revision: 2,
                contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'chef' } },
                locale: 'en-US'
              },
              fields: { name: recipes[2].chef?.name }
            },
            {
              metadata: { tags: [] },
              sys: {
                space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
                id: '3RvdyqS8408uQQkkeyi26k',
                type: 'Entry',
                createdAt: '2018-05-07T13:27:45.974Z',
                updatedAt: '2018-05-07T13:27:45.974Z',
                environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
                revision: 1,
                contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'tag' } },
                locale: 'en-US'
              },
              fields: { name: recipes[0].tags?.[0] }
            },
            {
              metadata: { tags: [] },
              sys: {
                space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
                id: '61Lgvo6rzUIgIGgcOAMgQ8',
                type: 'Entry',
                createdAt: '2018-05-07T13:27:25.845Z',
                updatedAt: '2018-05-07T13:27:25.845Z',
                environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
                revision: 1,
                contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'tag' } },
                locale: 'en-US'
              },
              fields: { name: recipes[3].tags?.[0] }
            },
            {
              metadata: { tags: [] },
              sys: {
                space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
                id: 'NysGB8obcaQWmq0aQ6qkC',
                type: 'Entry',
                createdAt: '2018-05-07T13:29:03.514Z',
                updatedAt: '2018-05-07T14:19:02.570Z',
                environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
                revision: 2,
                contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'chef' } },
                locale: 'en-US'
              },
              fields: { name: recipes[3].chef?.name }
            },
            {
              metadata: { tags: [] },
              sys: {
                space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
                id: 'gUfhl28dfaeU6wcWSqs0q',
                type: 'Entry',
                createdAt: '2018-05-07T13:26:53.870Z',
                updatedAt: '2018-05-07T13:27:08.774Z',
                environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
                revision: 2,
                contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'tag' } },
                locale: 'en-US'
              },
              fields: { name: recipes[3].tags?.[1] }
            }
          ],
          Asset: [
            {
              metadata: { tags: [] },
              sys: {
                space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
                id: '3TJp6aDAcMw6yMiE82Oy0K',
                type: 'Asset',
                createdAt: '2018-05-07T13:30:06.967Z',
                updatedAt: '2018-05-07T13:30:06.967Z',
                environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
                revision: 1,
                locale: 'en-US'
              },
              fields: {
                title: 'SKU1503 Hero 102 1 -6add52eb4eec83f785974ddeac3316b7',
                file: {
                  url: recipes[2].photo.url.slice(6),
                  details: { size: 216391, image: { width: recipes[2].photo.width, height: recipes[2].photo.height } },
                  fileName: 'SKU1503_Hero_102__1_-6add52eb4eec83f785974ddeac3316b7.jpg',
                  contentType: 'image/jpeg'
                }
              }
            },
            {
              metadata: { tags: [] },
              sys: {
                space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
                id: '48S44TRZN626y4Wy4CuOmA',
                type: 'Asset',
                createdAt: '2018-05-07T13:39:06.171Z',
                updatedAt: '2018-05-07T13:39:06.171Z',
                environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
                revision: 1,
                locale: 'en-US'
              },
              fields: {
                title: 'SKU1498 Hero 154 2 -adb6124909b48c69f869afecb78b6808-2',
                file: {
                  url: recipes[1].photo.url.slice(6),
                  details: { size: 218803, image: { width: recipes[1].photo.width, height: recipes[1].photo.height } },
                  fileName: 'SKU1498_Hero_154__2_-adb6124909b48c69f869afecb78b6808-2.jpg',
                  contentType: 'image/jpeg'
                }
              }
            },
            {
              metadata: { tags: [] },
              sys: {
                space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
                id: '5mFyTozvSoyE0Mqseoos86',
                type: 'Asset',
                createdAt: '2018-05-07T13:31:45.501Z',
                updatedAt: '2018-05-07T13:31:45.501Z',
                environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
                revision: 1,
                locale: 'en-US'
              },
              fields: {
                title: 'SKU1479 Hero 077-71d8a07ff8e79abcb0e6c0ebf0f3b69c',
                file: {
                  url: recipes[3].photo.url.slice(6),
                  details: { size: 230068, image: { width: recipes[3].photo.width, height: recipes[3].photo.height } },
                  fileName: 'SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg',
                  contentType: 'image/jpeg'
                }
              }
            },
            {
              metadata: { tags: [] },
              sys: {
                space: { sys: { type: 'Link', linkType: 'Space', id: 'kk2bw5ojx476' } },
                id: '61XHcqOBFYAYCGsKugoMYK',
                type: 'Asset',
                createdAt: '2018-05-07T13:37:53.784Z',
                updatedAt: '2018-05-07T13:37:53.784Z',
                environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
                revision: 1,
                locale: 'en-US'
              },
              fields: {
                title: 'SKU1240 hero-374f8cece3c71f5fcdc939039e00fb96',
                file: {
                  url: recipes[0].photo.url.slice(6),
                  details: { size: 194737, image: { width: recipes[0].photo.width, height: recipes[0].photo.height } },
                  fileName: 'SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg',
                  contentType: 'image/jpeg'
                }
              }
            }
          ]
        }
      }),
      ctx.delay(150)
    );
  })
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders deploy link', async () => {
  expect(await getRecipes()).toEqual(recipes);
});
