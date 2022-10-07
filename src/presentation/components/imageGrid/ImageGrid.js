import "./ImageGrid.css";

function ImageGrid({ images = [], numColumns = 1 }) {
  return (
    <div className="image-grid-container">
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
