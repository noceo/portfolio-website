import projects from "@/config";
import { getLocalData } from "@/lib/localData";
import DynamicComponentRenderer from "@/components/DynamicComponentRenderer";

export default async function Project({ params }) {
  const data = await getLocalData(params.slug);
  return (
    <div className="page-project">
      <main>
        <div className="title-wrapper">
          <div className="container-fluid">
            <div className="row">
              <h2 className="col-10 offset-1 col-md-6 offset-md-3">{data.title}</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <h3 className="col-10 offset-1 col-md-6 offset-md-3">{data.description_long}</h3>
          </div>
        </div>
        {data.components.map((component, index) => (
          <DynamicComponentRenderer key={index} componentData={component} />
        ))}
      </main>
      <div className="circle" />
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
