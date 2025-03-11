import GalleryCard from '@/components/GalleryCard'
import projects from '@/lib/data.js'
export function GalleryList() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <GalleryCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
