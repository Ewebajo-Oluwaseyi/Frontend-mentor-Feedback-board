import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content'
import "./assets/scss/app.scss";

function App() {
  return (
   <div className="layout">
     <div className="layout-wrapper">
       <section>
       <div className="cards">
        <Sidebar/>
        <div className="cards_side">
          <Header/>
          <Content/>
          <footer>
      <p class="attribution">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          ><i className="fa fa-github" aria-hidden="true"/></a>.
         copyright &#169; Ewebajo Oluwaseyi 2021
      </p>
    </footer>
        </div>
       </div>
       </section>
     </div>
   </div>
  );
}

export default App;
