// Copyright (c) 2023 Quddus Salam "XnonXte"
// This website is released under the GNU General Public License v3.0.

// TODO: Make the site works for mobile devices.

import { init } from "@emailjs/browser";

import EmailMe from "./components/EmailMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainFooter from "./components/MainFooter";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

const GRADIENT_COLOR_TO_TOP = "linear-gradient(0deg, #2c3e50, #3264ff)";
const GRADIENT_COLOR_TO_BOTTOM = "linear-gradient(180deg, #2c3e50, #3264ff)";

const SERVICE_ID = "service_lgf5s7f";
const TEMPLATE_ID = "template_j89stv8";
const PUBLIC_ID = "ifsgJYIusegUBBDch";

init(PUBLIC_ID);

const App = () => {
  return (
    <>
      <Header background={GRADIENT_COLOR_TO_BOTTOM} />
      <Projects />
      <Socials />
      <EmailMe serviceId={SERVICE_ID} templateId={TEMPLATE_ID} />
      <MainFooter background={GRADIENT_COLOR_TO_TOP} />
      <Footer />
    </>
  );
};

export default App;
