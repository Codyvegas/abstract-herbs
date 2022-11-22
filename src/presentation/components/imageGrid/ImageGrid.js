import "./ImageGrid.css";

function ImageGrid({ images = [], numColumns = 1, gap = 20 }) {
  const getContainerStyles = () => {
    return {
      gap: gap,
      gridTemplateColumns: `repeat(${numColumns}, calc(${100 / numColumns}% - ${
        gap / numColumns
      }px))`,
    };
  };

  return (
    <div className="image-grid-container" style={getContainerStyles()}>
      {images.map((imageSrc, index) => {
        return (
          <img
            src={imageSrc}
            alt={`nft-${index + 1}`}
            key={`nft-${imageSrc}`}
          />
        );
      })}
    </div>
  );
}

export default ImageGrid;
