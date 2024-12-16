import style from "./AppFooter.module.css";

const AppFooter = () => {
  return (
    <footer className={style.footer}>
      <p className={style.lastParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </footer>
  );
};

export default AppFooter;
