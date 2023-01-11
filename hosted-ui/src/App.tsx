import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";

import awsExports from "aws-exports";
import Home from "Home";

Amplify.configure(awsExports);

const App = () => {
  return (
    <Authenticator initialState="signIn">
      {({ user, signOut }) => <Home user={user} signOut={signOut} />}
    </Authenticator>
  );
};

export default App;
