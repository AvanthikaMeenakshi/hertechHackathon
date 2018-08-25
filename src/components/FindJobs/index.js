import React from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from './actions';
import SecondaryHeader from '../SecondaryHeader';
import Footer from '../Footer';
import { skills } from './mockData';
import { sample } from 'lodash';
import Avatar from 'react-avatar';

class FindJobs extends React.Component {
    componentWillMount () {
      this.props.fetchJobs();
    }
    render() {
      return (
        <div className="site-content content-wrapper page-content">
          <div className="page type-page hentry">
            <div className="page-content-body">
              <SecondaryHeader active />
              <div className="find-work">
                <div className="container">
                  <div className="section-content">
                      {this.props.jobList.map((job, index) => {
                        return (
                        <div key={`${job.company_name}-${index}`} className="job-item">
                          <div className="company-info">
        										<Avatar name={job.company_name} />
        									</div>
                          <div className="job-info">
                            <h3>{job.company_name}</h3>
                            <div className="required_for">Looking for: {sample(skills)} skilled individual</div>
                            <ul>
                              <li className="location">{job.location}</li>
                              <li className="rate">Annual Revenue: {job.annual_revenue}</li>
                              <li className="contract">Contract: Part-time</li>
                              <li className="contract">Freelancers Vacancy: {job.freelancers_needed}</li>
                            </ul>
                          </div>
                          <div className="applicants-info">
                            <p>{Math.floor(Math.random() * 90 + 10)} Applicants</p>
                          </div>
                          <div className="apply-info">
                            <a href="javascript:void(0)" className="primary-btn">Apply this Job</a>
                          </div>
                        </div>)
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
      </div>
      );
    }
}

const mapStateToProps = state => ({
  jobList: state.jobsHandler.jobs
});

const mapDispatchToProps = dispatch => ({
  fetchJobs: () => dispatch(fetchJobs())
});

export default connect(mapStateToProps, mapDispatchToProps)(FindJobs);
