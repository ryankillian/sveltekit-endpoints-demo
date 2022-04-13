import { createServer } from '@graphql-yoga/common';
import data from '$lib/data';

const yogaApp = createServer({
	schema: {
		typeDefs: `
			type Query {
				hello: String
        listOfWords(startsWith: String = "a", numberOfWords: Int = 2 ): [String]
			}
		`,
		resolvers: {
			Query: {
				hello: () => 'SvelteKit - GraphQL Yoga',
				listOfWords: (_root, args) => {
					console.log(args);
					return data
						.filter((word) => word.startsWith(args.startsWith))
						.slice(0, args.numberOfWords);
				}
			}
		}
	},
	graphiql: {
		endpoint: '/api/graphql'
	}
});

export { yogaApp as get, yogaApp as post };
