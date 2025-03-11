import { Slider } from '@/components/Slider'
import { Media } from '@/components/Media'
import projects from '@/lib/data.js'
export const metadata = {
  title: '作品詳細ページ | ポートフォリオ',
  description: 'コーディング、デザイン、学習中の各作品について紹介しています。',
}

export default function GalleryPost({ params }) {
  const project = projects.find((p) => p.id === Number(params.id)) // idを数値に変換して比較
  return (
    <>
      {project ? (
        <Media key={project.id} project={project} />
      ) : (
        <p>プロジェクトが見つかりませんでした。</p>
      )}
      <Slider />
    </>
  )
}
