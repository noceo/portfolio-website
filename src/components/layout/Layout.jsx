import DynamicComponentRenderer from "../DynamicComponentRenderer";

export default function Layout({ children, classes }) {
  return (
    <div className={"layout row " + classes}>
      {children.map((child, i) => (
        <div key={i} className={child.classes}>
          <DynamicComponentRenderer componentData={child} />
        </div>
      ))}
    </div>
  );
}
