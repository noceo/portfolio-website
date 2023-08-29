import projects from "@/config";
import { getLocalData } from "@/lib/localData";
import DynamicComponentRenderer from "@/components/DynamicComponentRenderer";

export default async function Project({ params }) {
  const data = await getLocalData(params.slug);
  return (
    <div className="page-project">
      <div className="title-wrapper">
        <div className="container">
          <div className="row">
            <h2 className="col-md-6 offset-md-3">{data.title}</h2>
          </div>
        </div>
      </div>
      {data.components.map((component, index) => (
        <DynamicComponentRenderer key={index} componentData={component} />
      ))}
    </div>
  );
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return projects.default.map((project) => {
    return {
      slug: project.slug,
    };
  });
}
