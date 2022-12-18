// import { useState } from 'react'
// import './App.css'
import { Header } from "./components/Header";
import { Herosection } from "./components/Hero-section";
import { Aboutsection } from "./components/About-section";
import { Clientsection } from "./components/Client-section";
import { Sectiontitle } from "./components/Section-title";
import { Rowcontent } from "./components/Row-content";
import { Row2content } from "./components/Row2-content";
import { Row3content } from "./components/Row3-content";
import { Row4content } from "./components/Row4-content";
import { Stepsecton } from "./components/Step";
import { Servicesection } from "./components/Service-section";

function App() {
  return (
    <div>
      <Header />
      <Herosection />
      <Aboutsection />
      <Clientsection />
      <Sectiontitle />
      <Rowcontent />
      <Row2content />
      <Row3content />
      <Row4content />
      <Stepsecton />
      <Servicesection />
    </div>
  );
}
export default App;
