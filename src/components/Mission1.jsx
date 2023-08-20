import avatar from "../images/avatar.png";
import facebook from "../images/facebook.png";
import tw from "../images/tw.png";
import youtube from "../images/youtube.png";
import insta from "../images/insta.png";

import "../css/Mission1.css";

function Mission1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-avatar" alt="avatar" />
        <div className="content">
          <div className="app-header-text">
            <span>chaemining</span>
            <p>Le your content live longer than the feed.</p>
          </div>
          <div className="avatar-container">
            <div className="container">
              <img src={facebook} className="App-image-item" alt="facebook" />
              <div className="container-item">
                <span className="text-header">채미닝의 페이스북</span>
                <span className="text-content">
                  https://www.facebook.com/test
                </span>
              </div>
            </div>

            <div className="container">
              <img src={tw} className="App-image-item" alt="tw" />
              <div className="container-item">
                <span className="text-header">채미닝의 트위터 채</span>
                <span className="text-content">
                  https://www.twitter.com/test
                </span>
              </div>
            </div>

            <div className="container">
              <img src={youtube} className="App-image-item" alt="youtube" />
              <div className="container-item">
                <span className="text-header">미닝의 유투브 채미</span>
                <span className="text-content">
                  https://www.youtube.com/test
                </span>
              </div>
            </div>

            <div className="container">
              <img src={insta} className="App-image-item" alt="insta" />
              <div className="container-item">
                <span className="text-header">닝의 인스타그램</span>
                <span className="text-content">
                  https://www.instagram.com/test
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Mission1;
