import projects from "@/config";
import Works from "./works";

export default function WorksWrapper() {
  return <Works works={projects} />;
}
