type SectionHeaderProps = {
  headTag: number
  headingText: string
  subHeadingText: string
  headingSize?: number
  spanSize?: string
  orientation: string
}

function SectionHeader({
  headTag = 1,
  headingText,
  subHeadingText,
  headingSize,
  orientation,
  spanSize = '1rem',
}: SectionHeaderProps) {
  const HeadTag = `h${headTag}` as keyof JSX.IntrinsicElements

  return (
    <div className={`section-header text-${orientation}`}>
      <HeadTag className={`display-${headingSize}`}>{headingText}</HeadTag>
      <span style={{ fontSize: spanSize }}>{subHeadingText}</span>
    </div>
  )
}

export default SectionHeader
