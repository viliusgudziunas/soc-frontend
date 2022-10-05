import { gql, useQuery } from "@apollo/client";

const GET_GROUPS = gql`
  query AllGroups {
    groups {
      id
      createdAt
      updatedAt
      name
      challenges {
        id
      }
    }
  }
`;

const Groups = () => {
  const { loading, error, data } = useQuery(GET_GROUPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  console.log("data:", data);
  return <div>Yaya</div>;
};

const App = () => {
  return <div>Welcome to SOC</div>;
  // return (
  //   <div className="p-2">
  //     <div>SOC Frontend</div>
  //     <LoginButton />
  //     <div className="p-4">
  //       <hr />
  //     </div>
  //     <LogoutButton />
  //     <div className="p-4">
  //       <hr />
  //     </div>
  //     <Profile />
  //     <div className="p-4">
  //       <hr />
  //     </div>
  //     <Groups />
  //   </div>
  // );
};

export default App;
