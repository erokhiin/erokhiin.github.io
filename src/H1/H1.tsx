import * as s from "./H1.module.scss";

type H1Props = {
  children: React.ReactNode;
};

export const H1 = (props: H1Props) => {
  const { children } = props;

  return <h1 className={s.H1}> {children}</h1>;
};
