import PropTypes from 'prop-types'
import { FaRegStar, FaStar } from 'react-icons/fa'

function StarRating({ rating }) {
  const starCount = Array.from({ length: 5 }, (_, i) => i)

  return (
    <>
      {starCount.map((star, idx) =>
        Math.round(rating.rate) >= idx + 1 ? (
          <>
            <FaStar key={`star${star}`} color="rgb(250, 175, 0)" />
          </>
        ) : (
          <FaRegStar key={`star${star}`} />
        )
      )}
    </>
  )
}

StarRating.propTypes = {
  rating: PropTypes.object,
}

export default StarRating
