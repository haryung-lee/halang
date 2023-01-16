import { useState, useEffect } from 'react';
import { scaleLinear, scaleBand, max, format } from 'd3';
import styled from 'styled-components';

import { AxisTop } from 'components/AxisTop';
import { AxisBottom } from 'components/AxisBottom';
import { Marks } from 'components/Marks';
import { fetchData } from 'helpers/fetchData';

export default function index({ data }) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight - 100);
    setWidth(window.innerWidth - 100);
  }, []);

  const margin = { top: 40, left: 180, right: 40, bottom: 60 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xVal = (d) => d.Population;
  const yVal = (d) => d.Country;

  const yScale = scaleBand()
    .domain(data.map(yVal))
    .range([0, innerHeight])
    .padding(0.2);

  const xScale = scaleLinear()
    .domain([0, max(data, xVal)])
    .range([0, innerWidth]);

  const xAxisLabelOffset = 40;
  const siFormat = format('.2s');
  const tickFormat = (tickFormat) => siFormat(tickFormat).replace('G', 'B');

  return (
    <Container>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisTop
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={tickFormat}
          />
          <AxisBottom yScale={yScale} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            textAnchor="center"
            y={innerHeight + xAxisLabelOffset}
          >
            Population
          </text>
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xVal={xVal}
            yVal={yVal}
          />
        </g>
      </svg>
    </Container>
  );
}

export const getStaticProps = async () => {
  const data = await fetchData();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

const Container = styled.div`
  width: 100%;
  svg {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #000;
  }
`;
