import Box from "@mui/material/Box";
import { Amplify } from "aws-amplify";
import { useRoutes } from "react-router-dom";

import awsExports from "aws-exports";
import routes from "routes";

Amplify.configure(awsExports);

const App = () => {
  const content = useRoutes(routes);

  return <Box>{content}</Box>;
};

export default App;
