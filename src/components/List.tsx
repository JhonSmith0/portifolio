import { HtmlHTMLAttributes } from "react";

interface Props {
  title: string;
  items: string[];
  attrs?: HtmlHTMLAttributes<any>;
}

export function List(props: Props) {
  return (
    <div className="list" {...props.attrs}>
      <h3>{props.title}</h3>
      <ul>
        {props.items.map((item) => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
