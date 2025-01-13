import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Menu({ handleClickDisplay }) {
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

  const handleClickDisplayss = () => {
    handleClickDisplay();
  };

  return (
    <div className={styles.wrapper}>
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
          onClick={() => handleClickDisplayss()}
          className={styles.img_sidebar_menu}
          alt="img_sidebar_menu"
          src="/Menu.png"
        />
      </div>
      <div className={styles.sidebar_menu}>
        {items.map((item) => (
          <div key={item.path} className={styles.items_sidebar_menu}>
            <ul className={styles.ul}>
              <li className={styles.li} onClick={() => handleClick(item)} key={item.path}>
                {item.name}
              </li>
              <FontAwesomeIcon
                  className={styles.arrow_in_menu}
                  icon={faCaretUp}
                  flip="vertical"
                />
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.content_sidebar_G5}>Make by Group 5</div>
    </div>
  );
}

export default Menu;
