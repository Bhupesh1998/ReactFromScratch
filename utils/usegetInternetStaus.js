import { useEffect, useState } from "react";

const usegetInternetStaus = () => {
  const [netStatus, setNetStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setNetStatus(true);
    });

    window.addEventListener("offline", () => {
      setNetStatus(false);
    });
  }, []);

  return netStatus;
};

export default usegetInternetStaus;
