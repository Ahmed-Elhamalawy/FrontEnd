import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const AuthProvider = ({ component: Component }) => {
  if (localStorage.getItem("token")) {
    return <Component />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

AuthProvider.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default AuthProvider;
