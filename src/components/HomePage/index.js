import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
// Main wrapper for the entire code

class HomePage extends React.Component {
    renderHeroImageSection = () => {
      return (
        <section className="hero">
          <img src="images/hero-img.jpeg" alt="hero" />
          <div className="section-content">
            <div className="container">
              <h2><strong>Hire expert freelancers <br />for any job, online & </strong> Get Your Job Done</h2>
              <a href="/findtalents" className="primary-btn">I want to Hire</a>&nbsp;&nbsp;&nbsp;
              <a href="/findjobs" className="primary-btn">I want to Work</a>
            </div>
          </div>
        </section>
      )
    }

    renderHireSection = () => {
      return (
        <section className="featured">
          <div className="container">
            <div className="section-header">
              <h2>Hire the best talent</h2>
            </div>
            <div className="section-content">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <img src="images/join-us-img-1.png" alt="joinus" />
                  <h3>Find Talents Easily</h3>
                  <p>FindLancer is an exclusive network of the top freelance software developers, designers, finance experts, and project managers in the world.</p>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <img src="images/join-us-img-2.png" alt="hire" />
                  <h3>Build your Career</h3>
                  <p>If you qualify through our screening process, we give you oppurtunity to work with the best companies in the market.</p>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <img src="images/join-us-img-3.png" alt="talent" />
                  <h3>Be connected with Tech</h3>
                  <p>Top companies rely on our freelancers for their most important projects. Become one of us today.</p>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <img src="images/join-us-img-4.png" alt="work" />
                  <h3>Work From Anywhere</h3>
                  <p>No matter from where it is done, work is work. We encourage working from any location your prefer.</p>
                </div>
              </div>
            </div>
            <div className="section-footer">
              <a type="button" className="primary-btn">Join Now!</a>
            </div>
          </div>
        </section>
      )
    }

    renderTopProfile = () => {
      return (
        <section className="alumni-interview">
          <div className="section-img">
            <div className="row">
              <div className="col-md-6">
                <img src="images/alumni-interview-img.jpg" alt="nathan" />
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-6 ">
                  <h2>
                    <span>Top Level Freelancer Profile</span>
                    Nathan Austin
                  </h2>
                  <p>
                    The dream of building and managing his own company drove Nathan Austin to his goal. After working several hours in his day job, he worked a few more hours on Freelancer to save up for capital. Once his savings were enough, he left his full-time post and began freelancing full-time. Three years later, he is now an established business owner who enjoys his freedom.
                  </p>
                  <a href="/findtalents" className="primary-btn">{"Find more like Nathan"}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }

    hireBestEngineer = () => {
      return (
        <section className="twitter-stream">
          <div className="container">
            <div className="section-header">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div className="section-content">
                <p>"We can hire engineers who code in different languages than we write internally. Our Pro is one of the best hires we've made. <a href="/">@beHerChange</a>  <a href="/">#beHerChange</a>"</p>
            </div>
            <div className="section-footer">
              <img src="images/twitter-profile-img.jpg" alt="angela" />
              <a href="/">@BeHerChange</a>
            </div>
          </div>
        </section>
      )
    }

    subscribeToNewsLetter = () => {
      return (
        <section className="newsletter">
          <div className="container">
            <div className="section-content">
              <h2>Keep Up and Join Our Newsletter</h2>
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate.</p>
              <input type="email" name="EMAIL" value="" placeholder="E-mail Address" />
              <input type="submit" className="secondary-btn" value="Subscribe" />
            </div>
          </div>
        </section>
      )
    }

    render() {
      return (
        <div>
          <div className="site-content content-wrapper page-content">
            <div className="page type-page hentry">
              <div className="page-content-body">
                <Header />
                {this.renderHeroImageSection()}
                {this.renderHireSection()}
                {this.renderTopProfile()}
                {this.hireBestEngineer()}
                {this.subscribeToNewsLetter()}
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <Footer />
        </div>
      );
    }
}

export default HomePage;
