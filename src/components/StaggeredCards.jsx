const StaggeredCards = ({ cardOne, cardTwo, children = null }) => {

  const CardSection = ({ header, content, align }) => {
    return (
      <div
        className={`flex ${
          align === "left" ? "justify-start" : "justify-end"
        } items-center`}
      >
        <div className="text-center bg-slate-900 p-5 rounded-xl bg-opacity-50">
          <h2 className="text-4xl font-bold mb-6 text-slate-100">{header}</h2>
          {content.map((body, index) => (
            <p className="text-lg text-slate-100 max-w-3xl mx-auto" key={index}>
              {body}
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-11/12 flex flex-col justify-between gap-20 md:gap-0 md:justify-evenly h-3/4">
      <CardSection
        header={cardOne.header}
        content={cardOne.content}
        align="left"
      />
      {children}
      <CardSection
        header={cardTwo.header}
        content={cardTwo.content}
        align="right"
      />
    </div>
  );
};

export default StaggeredCards;
