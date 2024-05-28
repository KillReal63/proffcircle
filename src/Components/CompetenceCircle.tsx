import React, { useContext } from "react";
import { FC } from "react";
import CompetenceContext from "./CompetenceContext";
import CompetenceSmallCircles from "./CompetenceSmallCircles";

type Props = {
  centerX: number;
  centerY: number;
  radius: number;
};

const CompetenceCircle: FC<Props> = ({ centerX, centerY, radius }) => {
  const competenceContext = useContext(CompetenceContext);
  if (!competenceContext) return null;
  const { data } = competenceContext;

  const smallCircles = (index: number) => {
    const angle =
      (index / data.map((el) => el.name).length) * 2 * Math.PI - Math.PI / 2;
    const x = radius * 2 + radius * Math.cos(angle);
    const y = radius * 2 + radius * Math.sin(angle);
    let offsetX = 0;
    let offsetY = 0;

    if (angle < -1.5) {
      offsetX = 0;
      offsetY = -45;
    }
    if (angle < 0 && angle > -1.5) {
      offsetX = 10;
      offsetY = -30;
    }
    if (angle < 1.5 && angle > 0) {
      offsetX = 15;
    }
    if (angle === 0) {
      offsetX = 15;
      offsetY = -20;
    }
    if (angle > 1.5 && angle < 2) {
      offsetX = 0;
      offsetY = 10;
    }
    if (angle > 2 && angle < 3) {
      offsetX = -75;
      offsetY = 5;
    }
    if (angle > 3) {
      offsetX = -85;
      offsetY = -12;
    }
    if (angle > 3.5) {
      offsetX = -100;
      offsetY = -30;
    }

    return { x, y, offsetX, offsetY, angle };
  };

  return (
    <svg
      height={radius * 4}
      width={radius * 4}
      style={{
        position: "absolute",
        left: centerX - radius * 2,
        top: centerY - radius * 2,
      }}
    >
      <circle
        cx={radius * 2}
        cy={radius * 2}
        r={radius}
        fill="none"
        stroke="#ADADAD"
        strokeWidth={2.35}
      />
      {data.map((el, index) => {
        const { x, y, offsetX, offsetY, angle } = smallCircles(index);
        const name = el.name.split(" ");
        return (
          <React.Fragment key={index}>
            <CompetenceSmallCircles x={x} y={y} id={el.id} />
            <text
              x={x}
              y={y + offsetY}
              className="text-[10px] font-bold"
              textAnchor={
                angle < -1.5 || (angle > 1.5 && angle < 2) ? "middle" : "start"
              }
            >
              {name.map((el, i) => {
                return (
                  <tspan key={i} x={x + offsetX} dy={12}>
                    {el}
                  </tspan>
                );
              })}
            </text>
          </React.Fragment>
        );
      })}
    </svg>
  );
};

export default CompetenceCircle;
