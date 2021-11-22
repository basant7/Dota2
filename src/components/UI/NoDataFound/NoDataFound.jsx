const NoDataFound = props => {
  const { text = 'No Data found' } = props;

  return (
    <div className="no-data-found">
      <div className="no-data-found-text">{text}</div>
    </div>
  );
};

export default NoDataFound;
