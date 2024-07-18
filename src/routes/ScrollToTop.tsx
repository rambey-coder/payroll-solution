import React, { useEffect, FC } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  children: React.ReactNode;
}

const ScrollToTop: FC<ScrollToTopProps> = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <>{props.children}</>;
};

export default ScrollToTop;
