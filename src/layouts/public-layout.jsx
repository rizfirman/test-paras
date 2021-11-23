import { useRef, useEffect, useState } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { LoginPage } from "../pages";
import { routes } from "../routes/public-route";

const PubliLayout = () => {
    const [loading, setLoading] = useState(true);
  const mainContent = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
          exact
        />
      );
    });
  };

//   const getRedirect = () => {
//     if (localStorage.getItem("jwt") !== "TestLogin") {
//       return <Navigate from="*" to="/public/login" />;
//     } else {
//       return <Navigate from="*" to="/private/dashboard" />;
//     }
//   };
    return (
        <div ref={mainContent} className="row">
        
      <Switch>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {" "}
            {getRoutes(routes)}
            {/* {getRedirect()} */}
          </>
        )}
      </Switch>
    
        </div>
    )
}

export default PubliLayout
