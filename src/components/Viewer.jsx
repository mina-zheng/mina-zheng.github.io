import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import CustomControls from "./CustomControls";
import BackButtons from './BackButtons';
import { useState } from "react"

function Viewer() {
    const [transformState, setTransformState] = useState({
    positionX: 0,
    positionY: 0,
    scale: 1,
  });
    const [ showButton, setShowButton ] = useState(null);
    const { setTransform } = useControls();

    const panBack = () => {
        setTransform(0, 0, 1, 300, "easeOut");

        setTransformState({
            positionX: 0,
            positionY: 0,
            scale: 1,
        });
    };
    return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
      panning={{ disabled: true }}
      pinch={{ disabled: true }}
      wheel={{ disabled: true }}
      doubleClick={{ disabled: true }}
      limitToBounds={false}
    >
      <TransformComponent>
        <img id="building" src="/src/assets/556-building.png" />
      </TransformComponent>

      <CustomControls
        transformState={transformState}
        setTransformState={setTransformState}
        setShowButton={setShowButton}
      />

      <BackButtons id={showButton} panBack={panBack}>
      </BackButtons>
    </TransformWrapper>
  );
}

export default Viewer