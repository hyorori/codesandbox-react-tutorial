import classes from "./CssModules.module.scss";
export const CssModules = () => {
  console.log("c", classes);
  return (
    <div className={classes.container}>
      <p className={classes.title}>CssModules</p>
      <button className={classes.btn}>btn</button>
    </div>
  );
};
