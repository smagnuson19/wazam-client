import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const Home = (props) => {
  return (
    <div>
      <p> Below Here should be a big button </p>
    </div>
  );
};

// react-redux glue -- outputs Container that knows how to call actions
// new way to connect with react router 4
export default withRouter(connect(null)(Home));
