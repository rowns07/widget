import { useAuth } from "../hooks/auth";
import OtherRoutes from "./OtherRoutes";
import SignRoutes from "./SignRoutes";

const Routes: React.FC = () => {
  const { signed } = useAuth();
  return signed ? <OtherRoutes /> : <SignRoutes />
}

export default Routes;