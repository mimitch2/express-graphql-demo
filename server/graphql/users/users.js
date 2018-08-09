import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import isEmail from 'validator/lib/isEmail';
import { random } from 'faker';

import {
  UserType,
  UserInputType,
} from './usersTypes';


const userQueries = {
  users: {
    type: new GraphQLList(UserType),
    resolve: async () => {
      const users = await new Promise((resolve) => {
        resolve([{
          id: 1,
          first_name: 'Malina',
          last_name: 'Aspole',
          email: 'maspole0@europa.eu',
          gender: 'Female',
        }, {
          id: 2,
          first_name: 'Maxim',
          last_name: 'Mansbridge',
          email: 'mmansbridge1@msn.com',
          gender: 'Male',
        }, {
          id: 3,
          first_name: 'Luella',
          last_name: 'Le Gall',
          email: 'llegall2@hugedomains.com',
          gender: 'Female',
        }, {
          id: 4,
          first_name: 'Kellia',
          last_name: 'Le Blond',
          email: 'kleblond3@apache.org',
          gender: 'Female',
        }, {
          id: 5,
          first_name: 'Standford',
          last_name: 'Thoms',
          email: 'sthoms4@skyrock.com',
          gender: 'Male',
        }, {
          id: 6,
          first_name: 'Saunder',
          last_name: 'Dinley',
          email: 'sdinley5@arizona.edu',
          gender: 'Male',
        }, {
          id: 7,
          first_name: 'Pierrette',
          last_name: 'Andryszczak',
          email: 'pandryszczak6@google.com',
          gender: 'Female',
        }, {
          id: 8,
          first_name: 'Tomasina',
          last_name: 'Rosling',
          email: 'trosling7@bizjournals.com',
          gender: 'Female',
        }, {
          id: 9,
          first_name: 'Chas',
          last_name: 'Dmtrovic',
          email: 'cdmtrovic8@yahoo.co.jp',
          gender: 'Male',
        }, {
          id: 10,
          first_name: 'Roscoe',
          last_name: 'Balasini',
          email: 'rbalasini9@mysql.com',
          gender: 'Male',
        }, {
          id: 11,
          first_name: 'Mufi',
          last_name: 'Emor',
          email: 'memora@ustream.tv',
          gender: 'Female',
        }, {
          id: 12,
          first_name: 'Zorah',
          last_name: 'Akehurst',
          email: 'zakehurstb@howstuffworks.com',
          gender: 'Female',
        }, {
          id: 13,
          first_name: 'Alano',
          last_name: 'Sizey',
          email: 'asizeyc@guardian.co.uk',
          gender: 'Male',
        }, {
          id: 14,
          first_name: 'Phillipp',
          last_name: 'Dews',
          email: 'pdewsd@google.de',
          gender: 'Male',
        }, {
          id: 15,
          first_name: 'Jecho',
          last_name: 'Weatherall',
          email: 'jweatheralle@spiegel.de',
          gender: 'Male',
        }, {
          id: 16,
          first_name: 'Viviana',
          last_name: 'Oxtaby',
          email: 'voxtabyf@imdb.com',
          gender: 'Female',
        }, {
          id: 17,
          first_name: 'Judie',
          last_name: 'McGirl',
          email: 'jmcgirlg@reference.com',
          gender: 'Female',
        }, {
          id: 18,
          first_name: 'Katerina',
          last_name: 'Sprackling',
          email: 'kspracklingh@phoca.cz',
          gender: 'Female',
        }, {
          id: 19,
          first_name: 'Em',
          last_name: 'Lamba',
          email: 'elambai@va.gov',
          gender: 'Male',
        }, {
          id: 20,
          first_name: 'Verine',
          last_name: 'Trumpeter',
          email: 'vtrumpeterj@who.int',
          gender: 'Female',
        }]);
      });
      return users;
    },
  },

};

// const userQueries = {
//   users: {
//     type: new GraphQLList(UserType),
//     resolve: async () => {
//       const users = await new Promise(resolve =>
//         setTimeout(() =>
//           resolve(new Array(10).fill(undefined).map(() => ({
//             id: random.uuid(),
//             name: name.firstName(),
//             email: internet.email(),
//           }))), 100),
//       );
//       return users;
//     },
//   },
// };

const userMutations = {
  createUser: {
    type: UserType,
    args: {
      input: {
        type: new GraphQLNonNull(UserInputType),
      },
    },
    resolve: async (rootValue, { input }) => {
      if (!isEmail(input.email)) {
        throw new Error('Email is not in valid format');
      }
      const result = await new Promise((resolve) => {
        setTimeout(() =>
          resolve(Object.assign(input, {

            id: random.uuid(),
          })), 100);
      });
      return result;
    },
  },
};

export {
  userQueries,
  userMutations,
};
