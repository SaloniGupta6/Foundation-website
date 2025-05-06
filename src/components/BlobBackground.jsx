import "../assets/Blobs.css";

export default function BlobBackground() {
  return (
    <div className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden">
      <div className="blob" style={{ top: "20%", left: "10%" }} />
      <div className="blob" style={{ top: "50%", left: "70%" }} />
    </div>
  );
}