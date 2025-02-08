import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
      style={{
        fontSize: 12,
        color: "white",
        fontWeight: "bold",
        marginTop: 40,
      }}>
        {progress.toFixed(2)}% loaded
      </p>
    </Html>
  )
}

export default Loader