import Card from '@/components/Card'
import projects from '@/lib/data.js'

export function CardList() {
  const favoriteProjects = projects
    .filter((project) => project.isFavorite)
    .slice(0, 4)
  return (
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      {favoriteProjects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  )
}
