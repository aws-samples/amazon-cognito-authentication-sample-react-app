import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";

import LoggedInUser from "./LoggedInUser";
import SignIn from "./auth/SignIn";

const Home = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    };

    getUser();
  }, []);

  return (user && <LoggedInUser user={user} />) || <SignIn />;
};

export default Home;
