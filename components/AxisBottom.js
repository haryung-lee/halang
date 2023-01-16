export const AxisBottom = ({ yScale }) =>
  yScale.domain().map((tickValue) => (
    <g className="tick">
      <text
        key={tickValue}
        x={-3}
        style={{ textAnchor: 'end' }}
        dy="0.32em"
        y={yScale(tickValue) + yScale.bandwidth() / 2}
      >
        {tickValue}
      </text>
    </g>
  ));
