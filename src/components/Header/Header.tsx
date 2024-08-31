import logo from "../../assets/icon/logo.svg";

export const Header: React.FC = () => (
  <ul className="header_list">
    <li className="header_list__item">
      <img src={logo} alt="l" />
    </li>
    <li className="header_list__item">reset</li>
  </ul>
);

export default Header;
