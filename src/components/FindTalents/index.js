import React from 'react';
import SecondaryHeader from '../SecondaryHeader';
import Footer from '../Footer';
import { fetchTalents } from './actions';
import { connect } from 'react-redux';
import { jobroles } from './mockData';
import { sample } from 'lodash';
import Avatar from 'react-avatar';

// Main wrapper for the entire code

class FindTalents extends React.Component {
    componentWillMount () {
      this.props.fetchTalents();
    }
    render() {
      return (
        <div>
          <SecondaryHeader activeTalents />
          <div id="content" className="site-content content-wrapper page-content">
      			<div className="page type-page hentry">
      				<div className="page-content-body">
      					<section className="talent-directory-hero">
      						<img src="images/talent-directory-hero.jpg" alt="talenthero" />
      						<div className="section-content">
      							<div className="container">
      								<div className="row">
      									<div className="col-sm-6">
      										<h2>Work with freelancers at no risk</h2>
      										<a href="/findtalents" className="secondary-btn">Discover Now</a>
      									</div>
      								</div>
      							</div>
      						</div>
      					</section>
                <section className="talent-directory">
                	<div className="container">
                		<div className="section-content">
                			<div className="row">
                        {this.props.talents.map((talent, index) => {
                          return (
                          <div key={`${talent.name}-${index}`} className="col-xs-6 col-md-4 fixed-height">
                            <div className="talent-item">
                  						<a className="profile-img" href="/">
                  							<Avatar name={talent.name} />
                  						</a>
                  						<h3><a href="/">{talent.name}</a></h3>
                  						<span>{sample(jobroles)}</span>
                  						<ul>
                  							<li>Location: <strong>{talent.location}</strong></li>
                  							<li>Job Success Rate: <strong>{talent.success}%</strong></li>
                  						</ul>
                  						<a href="/" className="primary-btn">View Profile</a>
                  					</div>
                          </div>)
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <Footer />
      </div>
      );
    }
}

const mapStateToProps = state => ({
  talents: state.talentHandler.talents
});

const mapDispatchToProps = dispatch => ({
  fetchTalents: () => dispatch(fetchTalents())
});

export default connect(mapStateToProps, mapDispatchToProps)(FindTalents);
