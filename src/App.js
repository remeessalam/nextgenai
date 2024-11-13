import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import NormalizeSlash from "./components/NormalizeSlash";
import Home from "./pages/Website/Home";
import AboutUs from "./pages/Website/AboutUs";
import OurServices from "./pages/Website/OurServices";
import ScrollToTop from "./components/ScrollToTop";
import ServicePageLayout from "./components/Website/ServicePageLayout";
import AppDevelopment from "./pages/Website/AppDevelopment";
import WebDevelopment from "./pages/Website/WebDevelopment";
import AIAndMLDevelopment from "./pages/Website/AIAndMLDevelopment";
import BlockchainDevelopment from "./pages/Website/BlockchainDevelopment";
import CloudComputing from "./pages/Website/CloudComputing";
import VRAndAR from "./pages/Website/VRAndAR";
import ContactUs from "./pages/Website/ContactUs";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { Toaster } from "react-hot-toast";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import RoboticControlSystem from "./pages/Website/RoboticControlSystem";

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <SpinnerContextProvider>
      <NormalizeSlash>
        <ScrollToTop />
        <LoadingSpinnerContext />
        <WhatsAppIcon />
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Services Detail Routes with Layout */}
          <Route path="/services" element={<ServicePageLayout />}>
            <Route path="web-designing" element={<WebDevelopment />} />
            <Route path="app-development" element={<AppDevelopment />} />
            <Route path="uxui-design" element={<AIAndMLDevelopment />} />
            <Route
              path="chatbot-development"
              element={<BlockchainDevelopment />}
            />
            <Route
              path="custom-software-developments"
              element={<CloudComputing />}
            />
            <Route path="robotic-process-automation" element={<VRAndAR />} />
            <Route
              path="robotic-control-system"
              element={<RoboticControlSystem />}
            />
          </Route>

          {/* Landing Pages */}
          <Route
            path="/web-development"
            element={<LandingPage page={"web-development"} />}
          />
          <Route
            path="/app-development"
            element={<LandingPage page={"app-development"} />}
          />
        </Routes>
      </NormalizeSlash>
    </SpinnerContextProvider>
  );
}

export default App;
