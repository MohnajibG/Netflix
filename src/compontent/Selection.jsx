const Selection = ({ category }) => {
  return (
    <main>
      <div className="container">
        <h2>{category.category}</h2>
        <div className="img-films">
          {category.images.map((url) => (
            <img key={url} src={url} alt="" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Selection;
