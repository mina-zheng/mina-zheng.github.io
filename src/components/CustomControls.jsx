import { useControls } from 'react-zoom-pan-pinch';
import '../style/App.css'

const CustomControls = ({ setTransformState, setShowButton, setShowPanButton, showPanButton }) => {
    const { setTransform } = useControls();

    const handlePan = (panStep, id) => {
        setTransformState((prev) => {
            const nextX = prev.positionX + panStep;
            setTransform(nextX, prev.positionY, prev.scale, 300, 'easeOut');
            return { ...prev, positionX: nextX };
        });

        setShowButton(id);
        setShowPanButton(false);
    };

    return (
        <>
            {(showPanButton) && (
                <button className="exp" onClick={() => handlePan(450, 1)}>
                    <img src="/src/assets/experience.png"/>
                </button>
            )}
            {(showPanButton) && (
                <button className="abt" onClick={() => handlePan(450, 2)}>
                    <img src="/src/assets/about.png"/>
                </button>
            )}
            {(showPanButton) && (
                <button className="proj" onClick={() => handlePan(-450, 3)}>
                    <img src="/src/assets/projects.png"/>
                </button>
            )}
        </>
    );
};

export default CustomControls