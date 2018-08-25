import React from 'react';
import { Icon } from 'semantic-ui-react';
import SecondaryHeader from '../SecondaryHeader';

// Main wrapper for the entire code

class FindTalents extends React.Component {
    render() {
      console.log(this.props.jobList);
      return (
        <div>
          <SecondaryHeader activeTalents />
          <div id="content" className="site-content content-wrapper page-content">
      			<div className="page type-page hentry">
      				<div className="page-content-body">
      					<section className="talent-directory-hero">
      						<img src="images/talent-directory-hero.jpg" alt="image" />
      						<div className="section-content">
      							<div className="container">
      								<div className="row">
      									<div className="col-sm-6">
      										<h2>Find Top Freelancer and Creatives</h2>
      										<a href="#" className="secondary-btn">Discover Now</a>
      									</div>
      								</div>
      							</div>
      						</div>
      					</section>
              </div>
            </div>
          </div>
      </div>
      );
    }
}

export default FindTalents;
