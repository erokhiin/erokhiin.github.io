import * as s from "./Link.module.scss";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export const Link = (props: LinkProps) => {
  const { href, children } = props;

  return (
    <a href={href} className={s.link}>
      {children}
    </a>
  );
};
