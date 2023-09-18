import { useEffect, useState } from "react";

const UseWindowScroll = () => {
  const [windowScroll, setWindowScroll] = useState(0);

  const handleScroll = () => {
    setWindowScroll(window.scrollY);
  };

  useEffect(() => {
    if (typeof window === "undefined") return
    // Get initial window width
    handleScroll();

    // Attach event listener to update on window resize
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  return windowScroll;
};

export default UseWindowScroll;
