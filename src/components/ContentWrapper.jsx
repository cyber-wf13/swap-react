const ContentWrapper = ({ title, text, children }) => {
  return (
    <div className="content-wrapper">
      <h2 className="content-wrapper__title title">{title}</h2>
      <p className="content-wrapper__text">{text}</p>
      <div className="content-wrapper__body">{children}</div>
    </div>
  );
};

export default ContentWrapper;
