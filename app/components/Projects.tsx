import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="py-32 px-6 bg-black" id="projects">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111]"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[400px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}