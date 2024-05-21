const BigCircle = () => {
  const skillsArray = [
    "Power BI",
    "VBA",
    "1С",
    "Shopify",
    "Sketch",
    "HQL",
    "Figma",
    "R",
    "Tableau",
    "Machine learning",
    "Яндекс.Метрика",
    "BPMN",
    "Google Analytics",
    "Tilda",
    "Visio",
    "Python",
    "Excel",
    "SQL",
  ];
  const radius = 267;
  const smallRadius = 14;
  const centerX = 327.5;
  const centerY = 304;
  const smallCircles = (index: number) => {
    const angle = (index / skillsArray.length) * 2 * Math.PI - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    const offsetY = (() => {
      switch (true) {
        case angle < 0:
          return -20;
        case angle < 1.5:
          return 20;
        case angle < 3:
          return 25;
        default:
          return -20;
      }
    })();
    const offsetX = (() => {
      switch (true) {
        case angle < -1.5:
          return -17;
        case angle < 0:
          return 10;
        case angle < 1.5:
          return 15;
        case angle < 1.9:
          return -38;
        case angle < 2.5:
          return -45;
        case angle < 2.9:
          return -70;
        default:
          return -30;
      }
    })();

    return { x, y, offsetY, offsetX };
  };

  return (
    <>
      <svg
        width="655"
        height="608"
        viewBox="0 0 655 608"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#ADADAD"
          strokeWidth="2.35"
        />
        {skillsArray.map((el, index) => {
          const { x, y, offsetX, offsetY } = smallCircles(index);
          return (
            <>
              <text x={x + offsetX} y={y + offsetY} className="text-[10px] ">
                {el}
              </text>
              <circle cx={x} cy={y} r={smallRadius} fill="#FFD4AD" />
            </>
          );
        })}
      </svg>
    </>
  );
};

export default BigCircle;
