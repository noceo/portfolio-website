import projects from "@/config";
import Works from "./works";

export const metadata = {
  title: "Projects",
};

export default function WorksWrapper({ params }) {
  const localizedProjects = projects[params.locale];
  return <Works works={localizedProjects} />;
}
