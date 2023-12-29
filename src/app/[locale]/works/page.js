import projects from "@/config";
import Works from "./works";

export default function WorksWrapper({ params }) {
  const localizedProjects = projects[params.locale];
  return <Works works={localizedProjects} />;
}
