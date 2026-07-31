import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import '../style/App.css'

const CustomControls = ({ transformState, setTransformState, setShowButton }) => {
    const { setTransform } = useControls();

    const handlePan = (panStep, id) => {
        const { positionX, positionY, scale } = transformState;

        const newx = positionX + panStep;

        setTransform(newx, positionY, scale, 300, "easeOut");
        setTransformState((prev) => ({...prev, positionX:newx}));
        
        setShowButton(id);
    }

    return (
        <>
        <button className = "right" onClick = {() => handlePan(450, 1)}>
            pan right!
        </button>
        <button className = "left" onClick = {() => handlePan(-450, 2)}>
            pan left!
        </button>
        </>
    )
}

export default CustomControls