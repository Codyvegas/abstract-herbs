import "./ImageGrid.css";

function ImageGrid({ images = [], imageWidth = "50px", numColumns = 1 }) {
  return (
    <div className="image-grid-container">
      <div className="image-grid-contents">
        {images.map((imageSrc, index) => {
          return (
            <img
              src={imageSrc}
              alt={`nft-${index + 1}`}
              key={`nft-${index + 1}`}
              style={{ width: imageWidth }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImageGrid;
