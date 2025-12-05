import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </Html>
  );
};

export default CanvasLoader;
