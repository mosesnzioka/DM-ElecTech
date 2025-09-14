import "./header.css";
function Header() {
  return (
    <div className="header">
      <h2>DM/ElecTech</h2>
      <div className="navlinks">
        <ul className="dicetorylinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact's</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
