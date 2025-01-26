const TransparentFullWidthCard = ({ header, bodyArr, children = null }) => {
  return (
    <div className="w-11/12 bg-transparent py-16">
      <div className="bg-opacity-50 bg-slate-900 w-fit mx-auto px-5 py-10 rounded-xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-slate-100">{header}</h2>
        {bodyArr.map((body, index) => (
          <p
            className="text-lg text-slate-100 text-center max-w-3xl mx-auto"
            key={index}
          >
            {body}
          </p>
        ))}
        {children}
      </div>
    </div>
  );
};

export default TransparentFullWidthCard;
