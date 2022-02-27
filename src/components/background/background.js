import './background.css'
import Particles from "react-tsparticles"

const Background = () => {
    const particlesInit = (main) => {
      console.log(main);
  
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
    return (
      <div className='particles_wrapper'>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            backgroundMode: {
                zIndex: -5,
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 140,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 40,
                  duration: 2,
                  opacity: 1,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: [
                    // "#F87D4F",
                    // "#FEC73B",
                    // "#F89930",
                    // "#F45623",
                    // "#D62E32",
                    // "#EB586E",
                    // "#339394",
                    // "#b4e3e4",
                    "rgba(150, 150, 150)",

                ]
              },
              links: {
                color: "#808080",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: [
                  "triangle",
                  "circle",
                ]
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      );
    };

    export default Background