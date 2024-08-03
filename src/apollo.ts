import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GRAPHQL_BASE_URL } from "@/constants"

const client = new ApolloClient({
  uri: GRAPHQL_BASE_URL,
  cache: new InMemoryCache(),
})

export default client
