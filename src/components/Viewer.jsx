import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import CustomControls from "./CustomControls";
import BackButtons from './BackButtons';
import { useState } from "react"

function ViewerContent({ setTransformState, setShowButton, showButton, showPanButton, setShowPanButton }) {
  const { setTransform } = useControls();

  const panBack = () => {
    setTransform(0, 0, 1, 300, "easeOut");

    setTransformState({
      positionX: 0,
      positionY: 0,
      scale: 1,
    });

    setShowButton(null);
    setShowPanButton(true);

  };

  return (
    <>

      {(showButton == 1) && <div className="text" id="exp-text">        
        <h1>
          EXPERIENCE
        </h1>
        <div className="text-wrapper">
          <h3>
            Cloud Developer Intern @ Avnet 
          </h3>
          <p>
            &gt; Developed two high traffic ASP.NET APIs to enable consumers to query customer hierarchy and relationships, as well 
  as validate customer information 
            <br /> &gt; Constructed a polyglot persistent architecture, querying and integrating data across CosmosDB, Azure SQL, and Oracle 
            <br /> &gt; Utilized DevOps technologies like Docker, Kubernetes, Github, and CI/CD pipelines to support development and 
  deployment workflows
          </p>
        </div>
        <div className="text-wrapper">
          <h3>
            Full Stack Developer @ Palmori Jewelry
          </h3>
          <p>
            &gt; Designed and developed a Flask product site that increased user traffic by 185% within a month 
            <br /> &gt; Integrated a secure admin dashboard for easy client-side management 
            <br /> &gt; Leveraged a PostgreSQL database and the Cloudinary API to eliminate reliance on local storage 
          </p>
        </div>
        <div className="text-wrapper">
          <h3>
            Data Research Assistant @ Institute for Social Research
          </h3>
          <p>
            &gt; Cleaned and analyzed thousands of data points, tracking relevance and availability through a codebook, and compared results to OpenAI to assess accuracy of the bot 
            <br /> &gt; Led a subteam to tackle disparities in election outcomes between different stratifications, and attempted to give reasoning to unexpected outcomes 
          </p>
        </div>
        <div className="text-wrapper">
          <p>
            Miscilleanous work... 
            <br /> &gt; Current part-time computer science and digital art teacher @ Books Beyond
            <br /> &gt; Previous part-time math lab assistant @ University of Michigan 
            <br /> &gt; Previous SAT tutor @ Chan Tutoring Center
          </p>
        </div>
    
      </div>
      }
      
      {(showButton == 2) && <div className="text" id="abt-text">
        <h1>
          ABOUT ME
        </h1>
        <div className="text-wrapper">
          <p>
            Hey there! I'm Mina, an undergrad at the University of Michigan studying data science and statistics.
            My interests lie in applied machine learning in areas like healthcare, finance, and entertainment. 
            My dream is to one day work on RL algorithms for a video game, but in the meantime, I'm just looking to expand
            my skillset and explore options with different stacks and industries.
          </p>
          <p>
            Outside of programming, I enjoy art, cooking, sports, and trying new restaurants. 
            Feel free to reach out for any reason, whether professional, personal, or for my Beli :)
          </p>
          <p>
            @: minazheng505@gmail.com 
          </p>
          <p>
            @: minaz@umich.edu
          </p>
        </div>
        <div className="text-wrapper" id="logo-wrapper">
          <a href="https://github.com/mina-zheng" target="_blank" rel="noreferrer">
            <img src="src/assets/github.png" id="github" />
          </a>
          <a href="https://www.linkedin.com/in/mina-zheng-407599254/" target="_blank" rel="noreferrer">
            <img src="src/assets/linkedin.png" id="linkedin" />
          </a>
          <a href="https://www.instagram.com/serpenteyez/" target="_blank" rel="noreferrer">
            <img src="src/assets/instagram.png" id="instagram" />
          </a>
        </div>
        <div className="text-wrapper" id="theme">
          <p>
            Portfolio Theme: Like everyone, my childhood shaped the kind of person that I am today. This theme is a tribute
            to my childhood home in Brooklyn, New York.
          </p>
        </div>
      </div>}
      
      <TransformComponent>
        <img id="building" src="/src/assets/556-building.png" />
        <img id="me" src="/src/assets/me.png"/>
      </TransformComponent>
      {(showButton == 3) && 
      <div className="text" id="proj-text">
        <h1>
          PROJECTS
        </h1>
        <div className="text-wrapper">
          <h3>
            Aeropilot
          </h3>
          <p>
            &gt; Achieved 2nd place (out of 59 teams) at the 2026 SAE Aero Design Competition building an autonomous flight system 
            for a custom aircraft  
            <br /> &gt; Developed Aeropilot and Aeropilot2.0, two comprehensive libraries with Python avionics, Lua scripting, and a React 
            frontend to simplify mission control through ArduPilot and PyMavLink 
            <br /> &gt; Led the development of features like dynamic waypoint adjustment, flight path spline interpolation, and multithreaded telemetry 
          </p>
        </div>
        <div className="text-wrapper">
          <h3>
            Dog Breed Classifier
          </h3>
          <p>
            &gt; Fine-tuned a CNN in PyTorch using transfer learning, applying layer freezing and hyperparameter tuning to achieve a 
            0.83 AUROC across 8000+ images 
            <br /> &gt; Benchmarked CNN against a Vision Transformer architecture, analyzing accuracy and compute tradeoffs  
            <br /> &gt; Engineered a preprocessing pipeline including data augmentation, normalization, and train/validation/test splitting to improve generalization 
          </p>
        </div>
        <div className="text-wrapper">
          <h3>
            Survival in the ICU Predictor 
          </h3>
          <p>
            &gt; Developed a logistic regression model on patient data from Beth Israel Deaconess Medical Center to predict 30-day mortality, achieving 0.82 AUROC 
            <br /> &gt; Improved model generalization through L1/L2 regularization and cross-validation, and evaluated kernel methods  against the baseline to assess nonlinear decision boundary performance  
          </p>
        </div>
      </div>
      }

      <CustomControls
        setTransformState={setTransformState}
        setShowButton={setShowButton}
        setShowPanButton={setShowPanButton}
        showPanButton={showPanButton}
      />
      

      <BackButtons id={showButton} panBack={panBack} />
    </>
  );
}

function Viewer() {
  const [transformState, setTransformState] = useState({
    positionX: 0,
    positionY: 0,
    scale: 1,
  });
  const [showButton, setShowButton] = useState(null);
  const [showPanButton, setShowPanButton] = useState(true);

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
      <ViewerContent
        setTransformState={setTransformState}
        setShowButton={setShowButton}
        showButton={showButton}
        showPanButton={showPanButton}
        setShowPanButton={setShowPanButton}
      />
    </TransformWrapper>
  );
}

export default Viewer