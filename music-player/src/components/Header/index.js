import { searchIcon } from "../../assets";
import { amigoIcon } from "../../assets";



const Header = (props) => {
    return (
      <header className="header flex justify-sb">
        <div className="logo">
          <img src={amigoIcon} alt="W" class="center" />
        </div>
        <div>
          <img src={searchIcon} alt="Search" />
        </div>
       
      </header>
    );
  };
  
  export default Header;
  