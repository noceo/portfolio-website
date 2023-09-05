import Link from "next/link";
import projects from "@/config";

export default function Works() {
  return (
    <div className="page-works">
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <ul>
              {projects.default.map((project) => {
                return (
                  <li key={project.title}>
                    <Link href={`/works/${project.slug}`}>
                      <span>{project.title}</span>
                      <span>– {project.description}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="circle" />
    </div>
  );
}
