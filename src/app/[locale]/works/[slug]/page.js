import projects from "@/config";
import { getLocalData } from "@/lib/localData";
import Project from "./project";

export default async function ProjectWrapper({ params }) {
  const data = await getLocalData(params.slug, params.locale);
  return <Project data={data} />;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return projects.en.map((project) => {
    return {
      slug: project.slug,
    };
  });
}
