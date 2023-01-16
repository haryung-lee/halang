export const AxisTop = ({ xScale, innerHeight, tickFormat }) =>
  xScale.ticks().map((tickValue) => (
    <g className="tick" transform={`translate(${xScale(tickValue)},0) `}>
      <line y2={innerHeight} />
      <text
        key={tickValue}
        style={{ textAnchor: 'middle' }}
        dy="0.71em"
        y={innerHeight}
      >
        {tickFormat(tickValue * 1000)}
      </text>
    </g>
  ));
