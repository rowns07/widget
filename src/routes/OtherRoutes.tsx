import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FeedbackList } from "../components/FeedbackList";
import { Menu } from "../components/Menu";
import { Widget } from "../components/Widget";

const OtherRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>

        <Route path="/" element={<FeedbackList />} />
        <Route path="/widget" element={<Widget />} />
      </Routes>

    </BrowserRouter>
  )
}

export default OtherRoutes;