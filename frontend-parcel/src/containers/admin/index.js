import React from "react";
import { Route } from "react-router-dom";
import { AdminPages } from "~/src/components/layout";

const Admin = (props) => {
    debugger
  return (
    <div className={"app-contain"}>
      {Object.keys(AdminPages).map((key) => (
        <Route
          key={key}
          path={AdminPages[key].path}
          component={AdminPages[key].component}
          // exact={AdminPages[key].exact}
        />
      ))}
    </div>
  );
};

export default Admin;
