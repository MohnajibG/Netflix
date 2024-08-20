const Selection = ({ category }) => {
  return (
    <main>
      <div className="container">
        <h2>{category.category}</h2>
        <div className="img-films">
          {category.images.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Selection;
