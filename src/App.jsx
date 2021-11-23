import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import { isLogin } from "./auth";
import {PublicLayout, PrivateLayout} from "./layouts"

// const getRedirect = () => {
//   // isLogin() ? <Redirect to="/private" /> : <Redirect to="/public" />;
//   if (localStorage.getItem("jwt") !== "TestLogin") {
//     return (
//       <>
//         <Redirect from="/" to="/private/dashboard" />
//       </>
//     );
//   } else {
//     return <Redirect from="/" to="/public/login" />;
//   }
// };

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/public" component={(props) => <PublicLayout {...props} />} />
      <Route path="/private" component={(props) => <PrivateLayout {...props} />} />
      {/* {getRedirect()}  */}
      {/* <>
      <Navigate from="/" to="/public/login" />
      </> */}
    </Switch>
    </Router>
  );
}

export default App;
