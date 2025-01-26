const FullWidthCard = ({ header, bodyArr, children = null }) => {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">{header}</h2>
        {bodyArr.map((body, index) => (
          <p
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-2"
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

export default FullWidthCard;
