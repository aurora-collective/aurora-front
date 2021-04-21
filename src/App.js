import React from 'react';
import YouTube from 'react-youtube';
import siteLogo from './img/logo.png';
import './App.css';
var theVideoID, theServerJSONResp
if (process.env.NODE_ENV !== 'production') {
  theVideoID = 'cGZF8VcYPJM'
  theServerJSONResp = 'https://play.aurorav.net/dynamic.json'
} else {
  theVideoID = process.env.REACT_APP_VIDEO_ID;
  theServerJSONResp = process.env.REACT_APP_SERVER_RESP;
}

function theMenu() {
  return (
    <ul class="links">
      <li> <a href="https://aurorav.net/forums"><span class="text">Forum</span></a> </li>
      <li> <a href="https://aurorav.net/forums/forum/2-guide-book/"><span class="text">Rules</span></a> </li>
      <li> <a href="https://discord.aurorav.net" target="_blank"><span class="text">Discord</span></a> </li>
      <li> <a href="https://aurorav.net/forums/store"><span class="text">Donate</span></a> </li>
    </ul>
  );
}

function theFeaturedVideo() {
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div class="content">
      <YouTube videoId={theVideoID} opts={opts} />
      <div class="title">
        <h4>April 2021</h4>
        <h2>By Weazel News</h2> 
      </div>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchNewPlayerCount(){
    fetch({theServerJSONResp})
    .then(resp=>resp.json())
    .then(data=>this.setState({
      playerCount: data.clients + ' players in-game'
    }))
    .catch(error=>this.setState({
        playerCount: "Server is Offline"
    }))
  }

  openURL(url){
    const win = window.open(url);
    if (win != null) {
      win.focus();
    }
  }

  componentWillMount() {
    this.state = { playerCount: "Loading from internal" };
    this.fetchNewPlayerCount();
  }

  componentDidMount(){
    this.updateTimer = setInterval(() => this.fetchNewPlayerCount(), 20000);
  }
  componentWillUnmount(){
    clearInterval(this.updateTimer);
  }


  render(){
    return (
      <div>
        <div class="bg-holder">
          <div class="bg"></div>
            <div class="container">
              <div class="spacer">
                <header>
                  <div class="row between-lg between-md">
                    <div class="col-lg-2 col-md-2 col-sm-11 col-xs-11 flex-center">
                      <a className="logo" href="/" rel="noopener noreferrer">
                      <img src={siteLogo} />
                      </a>
                    </div>
                    <div class="col-xs-1 col-sm-1 hidden-md hidden-lg">
                      <div class="burger-toggle js-burger-open"><span class="material-icons-outlined">menu</span></div>
                    </div>
                    <div class="col-lg-10 end-xs hidden-xs hidden-sm">
                      {theMenu()}
                    </div>
                  </div>
                </header>
  
                <div class="burger-links js-burger-menu" style={{display: 'none'}}>
                  {theMenu()}
                  <div class="close js-burger-close">
                    <div class="material-icons-outlined">close</div>
                  </div>
                </div>
  
                <section class="hero">
                  <div class="seller active">
                    <div class="row between-lg">
                      <p class="lead col-lg-7 col-md-7 col-sm-6 col-xs-12 mg-15"> <strong>AuroraRP</strong> is widely opened for all sorts of roleplayers. Whether you’re an experienced person or you’re new at roleplaying, we’re willing to accept you. </p>
                      <div class="col-lg-4 col-md-5 col-sm-6 hidden-xs end-lg">
                        <div class="cta">
                          <p style={{text_align: 'center'}}>We've a total of <b>16,000</b> registered players!</p>
                          <button id="client-download" onClick={()=>this.openURL('fivem://connect/dgb5vj?streamerMode=1')}> <span class="text">PLAY AURORA </span><span class="description">{this.state.playerCount}</span> <span class="description">(Peak: 205)</span> </button>
                          <br />
                          <button id="client-download2" onClick={()=>this.openURL('https://discord.aurorav.net/')}><span class="text">JOIN OUR DISCORD </span><span class="description">12,000+ members joined</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
          </div>
        </div>
  
        <section class="featured-video">
          <div class="container">
            <div class="spacer">
              <h1 class="reqs-heading">Featured Video</h1>
              <div class="row">
                <div class="col-lg-6 col-xs-12">
                  {theFeaturedVideo()}
                </div>
                <div class="col-lg-6 col-xs-12">
                  <div class="info">
                    <h2>Want to get featured?</h2>
                    <h5>Post your video on our Discord (inside channel <a href="https://discord.gg/mBhezk2rC4" target="_blank">#✦︱entertainment</a>) and tag the staff team!</h5> </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section class="features">
          <div class="container">
            <div class="spacer">
              <h1>Feature Highlights</h1>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <article class="first">
                    <h2><span style={{font_weight: 'bold', font_size: '20px'}}>Roleplay</span></h2> AuroraRP is widely opened for all sorts of roleplayers. Whether you’re an experienced person or you’re new at roleplaying. </article>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <article class="second">
                    <h2><span style={{font_weight: 'bold', font_size: '20px'}}>Job Progression</span></h2> The more you work, the higher your job level, the more you get paid. </article>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <article class="first">
                    <h2><span style={{font_weight: 'bold', font_size: '20px'}}>Market System</span></h2> All resources in-game are valuable. Sell them when you're short for cash. </article>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <article class="second">
                    <h2><span style={{font_weight: 'bold', font_size: '20px'}}>Advanced Gang System</span></h2> Gaming is better with friends. Create your gang and invite them! </article>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <article class="first">
                    <h2><span style={{font_weight: 'bold', font_size: '20px'}}>Powerful Host</span></h2> Our server hosts in a powerful dedicated server that is hosted in Singapore. </article>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <article class="second">
                    <h2><span style={{font_weight: 'bold', font_size: '20px'}}>Active Community</span></h2> Our community offers populated players around the map. To have a continous gameplay around the city. </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <footer>
          <div class="container">
            <div class="spacer">
              <div class="row start-xs">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <center>Aurora Community Hub &copy; 2019 - 2021 &middot; All rights reserved | Made on ReactJS</center>
                </div>
              </div>
            </div>
          </div>
        </footer>
  
      </div>
    );
  }

}

export default App;
