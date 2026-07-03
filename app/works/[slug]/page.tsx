import { notFound } from 'next/navigation'
import blocksData from '@/lib/case_blocks.json'
import CaseDetailClient from './CaseDetailClient'

interface Block {
  type: 'text' | 'image' | 'video'
  top: number
  left: number
  html?: string
  text?: string
  align?: 'left' | 'center' | 'right' | 'justify'
  src?: string
  width?: number
  height?: number
  youtube_id?: string
  photo?: string
}

interface CaseData {
  title: string
  blocks: Block[]
}

const catalog: Record<string, CaseData> = blocksData as any

// Generate static params for build
export async function generateStaticParams() {
  return Object.keys(catalog).map((slug) => ({
    slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params
  const caseData = catalog[slug]

  if (!caseData) {
    notFound()
  }

  return <CaseDetailClient slug={slug} caseData={caseData} />
}
