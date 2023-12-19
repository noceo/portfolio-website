import Text from "./Text";
import Quote from "./Quote";
import Figure from "./Figure";
import FigureText from "./FigureText";
import Layout from "./layout/Layout";
import SingleColumnLayout from "./layout/SingleColumnLayout";

const componentRegistry = {
  Text,
  Quote,
  Image: Figure,
  figureText: FigureText,
  Layout,
  SingleColumnLayout,
  // Add other components here...
};

export default componentRegistry;
