// sassを使用する
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    // classNameでclass属性を指定
    // classes.containerは、src/components/CssModules.module.scssのcontainerクラスを指定している
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
}
