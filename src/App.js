import React from 'react';
import SectionOne from "./containers/sectionOne";
import SectionTwo from "./containers/sectionTwo";
import SectionThree from "./containers/sectionThree";
import Footer from "./components/footer";
import './styles/styles.css';

function App() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
