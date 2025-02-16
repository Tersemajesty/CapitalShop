import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Pages.module.css"
import LoadingScreen from './LoadingScreen'


const LandingPage = () => {
  const navigate = useNavigate();
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 2000); 

    setTimeout(() => {
      navigate("/home");
    }, 2500);
  }, [navigate]);

  return (
    <div className={style.landingcontainer}>
      {LoadingScreen? (
        <div className={style.loader}>Loading...</div>
      ) : (
        <h1>Welcome to Our Website!</h1>
      )}
    </div>
  );
};
export default LandingPage
