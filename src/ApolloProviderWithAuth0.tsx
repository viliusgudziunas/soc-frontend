import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  children?: React.ReactElement | React.ReactElement[];
}

export const ApolloProviderWithAuth0: React.FC<Props> = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();

  const httpLink = new HttpLink({ uri: "http://localhost:3030/graphql" });

  const authLink = setContext(async (_, { headers, ...rest }) => {
    let token;
    try {
      token = await getAccessTokenSilently();
    } catch (error) {
      console.log(error);
    }

    if (!token) return { headers, ...rest };

    return {
      ...rest,
      headers: { ...headers, authorization: `Bearer ${token}` },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
