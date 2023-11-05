"use client";

import { FunctionComponent, useRef } from "react";
import Logo from "../../public/assets/images/logo_white.png";
import Content from "../components/Content";
import Footer from "../components/Footer";
import GenericContainer from "../components/GenericContainer";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import Topbar from "../components/TopBar";
import ThemeProvider from "@/components/Theme/ThemeProvider";

const App: FunctionComponent = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider>
      <HeroContainer>
        <GenericContainer>
          <Topbar />
          <Header
            logoSrc={Logo}
            logoAlt="Logo principal do evento Fall-Stack 2023"
            eventName="FALLSTACK"
            eventDate="28 e 29 de Novembro"
            contentRef={contentRef}
          />
          <Content contentRef={contentRef} />
          <Footer lastEditionUrl="https://fallstack-22-23.nei-isep.org/" />
        </GenericContainer>
      </HeroContainer>
    </ThemeProvider>
  );
};

export default App;
