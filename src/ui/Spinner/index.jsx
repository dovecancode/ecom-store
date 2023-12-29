function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        background: 'rgb(255, 255, 255)',
        display: 'block',
        shapeRendering: 'auto',
        animationPlayState: 'running',
        animationDelay: '0s',
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx={50}
        cy={50}
        r={0}
        fill="none"
        stroke="#e90c59"
        strokeWidth={2}
        style={{ animationPlayState: 'running', animationDelay: '0s' }}
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1s"
          values="0;40"
          keyTimes="0;1"
          keySplines="0 0.2 0.8 1"
          calcMode="spline"
          begin="0s"
          style={{ animationPlayState: 'running', animationDelay: '0s' }}
        />
        <animate
          attributeName="opacity"
          repeatCount="indefinite"
          dur="1s"
          values="1;0"
          keyTimes="0;1"
          keySplines="0.2 0 0.8 1"
          calcMode="spline"
          begin="0s"
          style={{ animationPlayState: 'running', animationDelay: '0s' }}
        />
      </circle>
      <circle
        cx={50}
        cy={50}
        r={0}
        fill="none"
        stroke="#46dff0"
        strokeWidth={2}
        style={{ animationPlayState: 'running', animationDelay: '0s' }}
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1s"
          values="0;40"
          keyTimes="0;1"
          keySplines="0 0.2 0.8 1"
          calcMode="spline"
          begin="-0.5s"
          style={{ animationPlayState: 'running', animationDelay: '0s' }}
        />
        <animate
          attributeName="opacity"
          repeatCount="indefinite"
          dur="1s"
          values="1;0"
          keyTimes="0;1"
          keySplines="0.2 0 0.8 1"
          calcMode="spline"
          begin="-0.5s"
          style={{ animationPlayState: 'running', animationDelay: '0s' }}
        />
      </circle>
    </svg>
  )
}

export default Spinner
