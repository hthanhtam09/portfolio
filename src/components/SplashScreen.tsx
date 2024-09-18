import React, { useEffect } from "react";
import anime from 'animejs';

type SplashScreenProps = {
  finishLoading: () => void
}

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
  useEffect(() => {
    const loader = anime.timeline({
      complete: () => finishLoading()
    });
    loader.add({
      duration: 4500,
      easing: "linear",
    });
  }, []);

  return (
    <div className='splash'>
      <div className="splash_logo">PFO</div>
      <div className="splash_svg">
        <svg width="100%" height="100%">
          <rect width="100%" height="100%" />
        </svg>
      </div>
      <div className="splash_minimize">
        <svg width="100%" height="100%">
          <rect width="100%" height="100%" />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
