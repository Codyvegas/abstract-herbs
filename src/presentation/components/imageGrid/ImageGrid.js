import "./ImageGrid.css";

function ImageGrid({ images = [], numColumns = 1, gap = 20 }) {
  const getContainerStyles = () => {
    return {
      gap: gap,
      gridTemplateColumns: `repeat(${numColumns}, calc(${100 / numColumns} - ${
        gap / numColumns
      }))`,
    };
  };

  return (
    <div className="image-grid-container" style={getContainerStyles()}>
      {images.map((imageSrc, index) => {
        return (
          <img
            src={imageSrc}
            alt={`nft-${index + 1}`}
            key={`nft-${index + 1}`}
          />
        );
      })}
    </div>
  );
}

export default ImageGrid;
