// import style from "./Header.module.css"
// import { IoSearchOutline } from "react-icons/io5";
// import { AiOutlineUser } from "react-icons/ai";
// import { GrCart } from "react-icons/gr";
// import { GiTwirlyFlower } from "react-icons/gi";
// import { Link } from "react-router-dom"

// // import { NavLink } from "react-router-dom";


// const Header = () => {
//   return (
//     <div className={style.Head}>
//      <div className={style.Head1}>
//      <div className={style.wrap}>
//          <GiTwirlyFlower size={50}  color="red"/>
//          <header>Terses <strong>store</strong></header>
// </div>
//    <div className={style.wrapper}>
//     <Link to="/Home">
//     <h1>Home</h1>
//     </Link>

//     <Link to="/Categories">
//     <h1>Categories</h1>
//     </Link>

//     <Link to="/Pages">
//     <h1>Pages</h1>
//     </Link>

//     <Link to="/Blog">
//     <h1>Blog</h1>
//     </Link>
    
//     <Link to="/Contact">
//     <h1>Contact</h1>
//     </Link>
    
// </div>
//     <div className={style.wrap1}>
//      <Link to="/login">
//          <AiOutlineUser size={30} />
//      </Link>
      
//       <Link to="/Search">
//       <IoSearchOutline size={30} />
//       </Link>

//       <Link to="/Cart">
//       <GrCart size={30}/>
//       </Link>

// </div>
//      </div>
    
//     </div>
//   )
// }
// export default Header


import { IoSearchOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { GiTwirlyFlower } from "react-icons/gi";
import { Link } from "react-router-dom";
import UserAuth from "./UserAuth"; // Import UserAuth component
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.Head}>
      <div className={style.Head1}>
        <div className={style.wrap}>
          <GiTwirlyFlower size={50} color="red" />
          <header>
            Terses <strong>store</strong>
          </header>
        </div>

        <div className={style.wrapper}>
          <Link to="/Home">
            <h1>Home</h1>
          </Link>

          <Link to="/Categories">
            <h1>Categories</h1>
          </Link>

          <Link to="/Pages">
            <h1>Pages</h1>
          </Link>

          <Link to="/Blog">
            <h1>Blog</h1>
          </Link>

          <Link to="/Contact">
            <h1>Contact</h1>
          </Link>
        </div>

        <div className={style.wrap1}>
          {/* User Authentication Dropdown */}
          <UserAuth />

          <Link to="/Search">
            <IoSearchOutline size={30} />
          </Link>

          <Link to="/Cart">
            <GrCart size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

