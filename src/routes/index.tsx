import { useContext } from "react";
import AuthContext from "../context/auth";
import OtherRoutes from "./OtherRoutes";
import SignRoutes from "./SignRoutes"

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext)
  return signed ? <OtherRoutes /> : <SignRoutes />
}

export default Routes;