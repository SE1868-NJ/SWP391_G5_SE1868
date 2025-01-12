import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Menu() {
  const items = [
    { name: "Account Manage", path: "/account_manage" },
    { name: "Product Manage", path: "/product_manage" },
    { name: "Transaction", path: "/transaction" },
    { name: "Content", path: "/content" },
    { name: "Finance", path: "/finance" },
    { name: "Data Analysis", path: "/data_analysis" },
    { name: "Support", path: "/support" },
  ];

  let navigate = useNavigate();

  const handleClick = (item) => {
    navigate(item.path);
  };

  let [display, setDisplay] = useState('')
  const handleClickDisplay = () => {
    setDisplay('none');
  };

  return (
    <div className={styles.wrapper} style={{display: display}}>
      <div
        style={{
          width: "100%",
          height: "5vh",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <img
        onClick={() => handleClickDisplay()}
          className={styles.img_sidebar_menu}
          alt="img_sidebar_menu"
          src="/Menu.png"
        />
      </div>
      <div className={styles.sidebar_menu}>
        <div className={styles.items_sidebar_menu}>
          {items.map((item) => (
            <div key={item.path} className={styles.items_sidebar_menu}>
              <ul className={styles.ul}>
                <li onClick={() => handleClick(item)} key={item.path}>
                  {item.name}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.content_sidebar_G5}>Make by Group 5</div>
    </div>
  );
}

export default Menu;
