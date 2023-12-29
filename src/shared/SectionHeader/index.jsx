import PropTypes from 'prop-types'

function SectionHeader({
  headTag = 1,
  headingText,
  subHeadingText,
  headingSize,
  orientation,
  spanSize = '1rem',
}) {
  const HeadTag = `h${headTag}`
  return (
    <div className={`section-header text-${orientation}`}>
      <HeadTag className={`display-${headingSize}`}>{headingText}</HeadTag>
      <span style={{ fontSize: spanSize }}>{subHeadingText}</span>
    </div>
  )
}

SectionHeader.propTypes = {
  headTag: PropTypes.number,
  headingText: PropTypes.string,
  subHeadingText: PropTypes.string,
  headingSize: PropTypes.number,
  spanSize: PropTypes.string,
  orientation: PropTypes.string,
}

export default SectionHeader
