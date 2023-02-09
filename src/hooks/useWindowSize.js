import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState(null);
  const [size, setSize] = useState(null);

  useEffect(() => {

    function handleSize() {
      const deviceWidth = window.innerWidth;

      if (deviceWidth < 576) setSize("xs");
      if (deviceWidth >= 576 && deviceWidth < 768) setSize("s");
      if (deviceWidth >= 768 && deviceWidth < 992) setSize("m");
      if (deviceWidth >= 992 && deviceWidth < 1200) setSize("l");
      if (deviceWidth >= 1200 && deviceWidth < 1440) setSize("xl");
      if (deviceWidth >= 1440) setSize("xxl");
      setWidth(deviceWidth);
    }

    window.addEventListener("resize", handleSize);

    handleSize();

    return () => window.removeEventListener("resize", handleSize);
  }, [])

  return { width, size };

}