import { H1 } from "../H1";
import { Link } from "../Link";

import s from "./App.module.scss";

export const App = () => (
  <div className={s.App}>
    <H1>My links:</H1>
    <ul className={s.links}>
      <li>
        <Link href="https://t.me/erokhiin">telegram</Link>
      </li>
      <li>
        <Link href="https://linkedIn.com/erokhiin">linkedIn</Link>
      </li>
      <li>
        <Link href="https://github.com/erokhiin">github</Link>
      </li>
      <li>
        <Link href="mailto:erokhiin@icloud.com">mail</Link>
      </li>
    </ul>
  </div>
);
