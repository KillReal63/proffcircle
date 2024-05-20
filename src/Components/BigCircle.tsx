const BigCircle = () => {
  const skillsArray = [
    "Excel",
    "SQL",
    "VBA",
    "Power BI",
    "Python",
    "1С",
    "Google Analytics",
    "Яндекс.Метрика",
    "Tilda",
    "Figma",
    "Sketch",
    "Illustrator",
    "Photoshop",
    "Principle",
    "Shopify",
    "Protopie",
    "Cinema 4D",
    "Machine learning",
  ];
  const radius = 300;
  const smallRadius = 14;
  const centerX = 500;
  const centerY = 500;
  const smallCircles = (index: number) => {
    const angle = (index / skillsArray.length) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <>
      <svg
        width="1000"
        height="1000"
        xmlns="http://www.w3.org/2000/svg"
        className="-rotate-[90deg]"
      >
        {skillsArray.map((el, index) => {
          const { x, y } = smallCircles(index);
          return (
            <>
              <text x={x} y={y}>
                {el}
              </text>
              <circle cx={x} cy={y} r={smallRadius} fill="#FF7A00" />
            </>
          );
        })}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </>
  );
};

export default BigCircle;
