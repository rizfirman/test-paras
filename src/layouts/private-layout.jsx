import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { NavBar, SideBar, SideBarComp } from "../../components";
import { routes } from "../routes/private-route";
// import { isLogin } from "../../auth";
import { Container } from "reactstrap";
// import classNames from "classnames";

const PrivateLayout = ({ component: Component, ...rest }) => {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [data, setData] = useState([]);
  const [company, setCompany] = useState({});
  const [companyUUID, setCompanyUUID] = useState();
  const [token, setToken] = useState("");
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  //if toggle sidebar is clicked, set window scrolY to 0

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sidebarIsOpen]);

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

//   const getRedirect = (routes) => {
//     if (isLogin()) {
//       return <Redirect to="/public/login" />;
//     } else {
//       return <Redirect to="/private/dashboard" />;
//     }
//   };
  return (
    <div className="layout">
      {/* <SideBarComp toggle={toggleSidebar} isOpen={sidebarIsOpen} /> */}

      <Container
        fluid
        // className={classNames("content", { "is-open": sidebarIsOpen })}
      >
        {/* <NavBar
          toggleSidebar={toggleSidebar}
          className={
            sidebarIsOpen
              ? "far fa-arrow-alt-circle-right"
              : "far fa-arrow-alt-circle-left"
          }
        /> */}
        <Switch>
          {getRoutes(routes)}
          {/* {getRedirect()} */}
        </Switch>
      </Container>
    </div>
  );
};

export default PrivateLayout;
