export const Marks = ({ data, xScale, yScale }) =>
  data.map((d) => (
    <rect
      x={0}
      y={yScale(d.Country)}
      width={xScale(d.Population)}
      height={yScale.bandwidth()}
      style={{ fill: 'steelblue' }}
    />
  ));
