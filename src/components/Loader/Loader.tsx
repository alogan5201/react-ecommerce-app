const Loader = () => (
  <div
    className="px-4 py-5 my-5 text-center row"
    style={{ height: '88vh', alignContent: 'center' }}
  >
    <div className="col-lg-6 mx-auto">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
);

export default Loader;
