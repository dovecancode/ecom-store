import PropTypes from 'prop-types'
import { FaRegStar, FaStar } from 'react-icons/fa'

type RatingProps = {
  rate: number
  count: number
}

function StarRating({ rating }: { rating: RatingProps }) {
  const starCount = Array.from({ length: 5 }, (_, i) => i)

  return (
    <>
      {starCount.map((_, idx) =>
        Math.round(rating.rate) >= idx + 1 ? (
          <FaStar key={`star-${idx}`} color="rgb(250, 175, 0)" />
        ) : (
          <FaRegStar key={`star-${idx}`} />
        )
      )}
    </>
  )
}

StarRating.propTypes = {
  rating: PropTypes.object,
}

export default StarRating
