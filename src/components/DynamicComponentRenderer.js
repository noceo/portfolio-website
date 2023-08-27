import React from "react";
import ComponentRegistry from "./ComponentRegistry";

const DynamicComponentRenderer = ({ componentData }) => {
  const Component = ComponentRegistry[componentData.type];

  if (!Component) {
    // Handle unknown component types here
    return null;
  }

  return <Component {...componentData} />;
};

export default DynamicComponentRenderer;
