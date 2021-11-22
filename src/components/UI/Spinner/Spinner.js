import React from 'react';

// import './Spinner.scss';

const Spinner = props => {
  const { withoutMargin } = props;
  return <div className={`loader ${withoutMargin ? 'without-margin' : ''}`} />;
};

export default Spinner;
