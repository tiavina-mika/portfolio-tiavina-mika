import React from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
  { name: 'Base de donnée', value: 400 },
  { name: 'Front End', value: 300 },
  { name: 'Design', value: 200 },
  { name: 'Back End', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props) => {
    const {cx, cy, midAngle, innerRadius, outerRadius, percent, index,} = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            <tspan>{`${(percent * 100).toFixed(0)}%`}</tspan>
            <tspan x={x} y={parseInt(y) * 1.1}>{data[index].name}</tspan>
        </text>
    );
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius * 1.1}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#fff">{`${payload.name}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Temps: ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const PieChartDomain = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isHovered, setHovered] = React.useState(false);
    const onPieEnter = (data, index) => {
      setActiveIndex(index);
      setHovered(true);
    };
    const onPieLeave = () => setHovered(false);
    return (
      <PieChart width={1000} height={800}>
        <Pie
          activeIndex={isHovered ? activeIndex: null}
          activeShape={renderActiveShape} 
          isAnimationActive={false}
          data={data}
          cx={500}
          cy={380}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={250}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}

        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
}

export default PieChartDomain;