import React from "react";
import { connect } from "react-redux";
import { checkRole } from "@utils/helpers";
import { Redirect } from "react-router-dom";

const PageWrapper = ({ auth, children, accessRoles }) => {
  const roles = auth?.auth?.authorities || [];

  if (checkRole(accessRoles, roles)) {
    return children;
  }

  return <Redirect to="/" />;
};

const mapState = (state) => ({
  auth: state?.auth,
});

export default connect(mapState)(PageWrapper);
