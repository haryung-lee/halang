import * as d3 from 'd3';

export const fetchData = async () => {
  const csvUrl =
    'https://gist.githubusercontent.com/crew-guy/e1ae0b5db6ace5eda68bc8fb9e903576/raw/UN%2520World%2520Population%2520Dataset%2520-%2520Sheet1.csv';

  // Using d3.csv()
  const row = (d: any) => {
    d.Population = +d['2020'];
    return d;
  };
  const fullData = await d3.csv(csvUrl, row);
  const data = fullData.slice(0, 10);
  const text = d3.csvFormat(data);
  return data;
};
