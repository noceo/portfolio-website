import DynamicComponentRenderer from "../DynamicComponentRenderer";

export default function OneColLayout({ children }) {
  return (
    <div className="one-col-layout row">
      {children.map((child, i) => (
        <div
          key={i}
          className={"col-xs-12" + (child.classes ? ` ${child.classes}` : "")}
        >
          <DynamicComponentRenderer componentData={child} />
        </div>
      ))}
    </div>
  );
}
