import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Recycling from "./pages/recycling/recycling.jsx";
import Campaigns from "./pages/campaigns/Campaigns.jsx";
import Awards from "./pages/awards/Awards.jsx";
import Campaign1 from "./pages/campaigns/campaignPages/Campaign1.jsx";
import Campaign2 from "./pages/campaigns/campaignPages/Campaign2.jsx";
import Campaign3 from "./pages/campaigns/campaignPages/Campaign3.jsx";
import Campaign4 from "./pages/campaigns/campaignPages/Campaign4.jsx";
import instagram from "./components/instagram.png";
import mail from "./components/mail.png";
import Campaign5 from "./pages/campaigns/campaignPages/Campaign5.jsx";
import Campaign6 from "./pages/campaigns/campaignPages/Campaign6.jsx";
import Campaign7 from "./pages/campaigns/campaignPages/Campaign7.jsx";
import Campaign8 from "./pages/campaigns/campaignPages/Campaign8.jsx";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <Link to="/">HOME</Link>
            <Link to="recycling">RECYCLING</Link>
            <Link to="campaigns">CAMPAIGNS</Link>
            <Link to="recognitions">RECOGNITIONS</Link>
            <a href="mailto:going.greendubai@gmail.com">
              <img src={mail} alt="mail icon" />
            </a>
            <a href="https://www.instagram.com/going.greendubai/">
              <img src={instagram} alt="instagram logo icon" />
            </a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recycling" element={<Recycling />}></Route>
          <Route path="/campaigns" element={<Campaigns />}></Route>
          <Route path="/recognitions" element={<Awards />}></Route>
          <Route path="/campaigns/campaign1" element={<Campaign1 />}></Route>
          <Route path="/campaigns/campaign2" element={<Campaign2 />}></Route>
          <Route path="/campaigns/campaign3" element={<Campaign3 />}></Route>
          <Route path="/campaigns/campaign4" element={<Campaign4 />}></Route>
          <Route path="/campaigns/campaign5" element={<Campaign5 />}></Route>
          <Route path="/campaigns/campaign6" element={<Campaign6 />}></Route>
          <Route path="/campaigns/campaign7" element={<Campaign7 />}></Route>
          <Route path="/campaigns/campaign8" element={<Campaign8 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
