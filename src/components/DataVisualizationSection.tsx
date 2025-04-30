
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Sector
} from 'recharts';

const skillProgressData = [
  { name: 'Python', value: 90 },
  { name: 'TensorFlow', value: 85 },
  { name: 'PyTorch', value: 80 },
  { name: 'SQL', value: 75 },
  { name: 'Data Analysis', value: 88 },
  { name: 'NLP', value: 82 },
  { name: 'Computer Vision', value: 78 },
];

const projectTypeData = [
  { name: 'ML Models', value: 45 },
  { name: 'Data Analysis', value: 25 },
  { name: 'Web Apps', value: 15 },
  { name: 'Research', value: 15 },
];

const learningTrajectoryData = [
  { month: 'Jan', hours: 45 },
  { month: 'Feb', hours: 55 },
  { month: 'Mar', hours: 75 },
  { month: 'Apr', hours: 65 },
  { month: 'May', hours: 90 },
  { month: 'Jun', hours: 100 },
];

const COLORS = ['#8b5cf6', '#6366f1', '#3b82f6', '#0ea5e9', '#06b6d4', '#14b8a6', '#10b981'];

const DataVisualizationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const chartConfig = {
    skills: {
      label: 'Skills',
      theme: { light: '#8b5cf6', dark: '#8b5cf6' }
    },
    projects: {
      label: 'Projects',
      theme: { light: '#6366f1', dark: '#6366f1' }
    },
    learning: {
      label: 'Learning',
      theme: { light: '#3b82f6', dark: '#3b82f6' }
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
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
          outerRadius={outerRadius}
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
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" className="text-xs">{`${payload.name}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" className="text-xs">
          {`${value} (${(percent * 100).toFixed(0)}%)`}
        </text>
      </g>
    );
  };

  return (
    <section id="data-viz" className="section relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div 
          className={`max-w-3xl mx-auto text-center space-y-4 mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Data Analytics</h2>
          <p className="text-muted-foreground">
            Visualizing my journey and growth in data science and AI
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            className={`shadow-md hover:shadow-xl transition-all duration-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-4 text-center">Skill Progress</h3>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={skillProgressData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                      onMouseMove={(data) => {
                        if (data.activeTooltipIndex !== undefined) {
                          setHoveredBar(data.activeTooltipIndex);
                        }
                      }}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (!active || !payload?.length) return null;
                          return (
                            <div className="rounded-md border bg-background p-2 shadow-md">
                              <div className="flex flex-col">
                                <span className="font-semibold">{payload[0].name}: {payload[0].value}%</span>
                              </div>
                            </div>
                          );
                        }}
                      />
                      {skillProgressData.map((entry, index) => (
                        <Bar 
                          key={`bar-${index}`}
                          dataKey="value" 
                          fill={hoveredBar === index ? '#6d28d9' : '#8b5cf6'} 
                          barSize={20} 
                          radius={[0, 4, 4, 0]}
                          animationDuration={1500}
                          animationBegin={index * 150}
                        >
                          {skillProgressData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={hoveredBar === index ? '#6d28d9' : '#8b5cf6'} 
                            />
                          ))}
                        </Bar>
                      ))}
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`shadow-md hover:shadow-xl transition-all duration-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-4 text-center">Project Distribution</h3>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={projectTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                        animationBegin={500}
                        animationDuration={1500}
                      >
                        {projectTypeData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]} 
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`shadow-md hover:shadow-xl transition-all duration-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-4 text-center">Learning Hours</h3>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                      data={learningTrajectoryData} 
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (!active || !payload?.length) return null;
                          return (
                            <div className="rounded-md border bg-background p-2 shadow-md">
                              <div className="flex flex-col">
                                <span className="font-semibold">{payload[0].payload.month}: {payload[0].value} hours</span>
                              </div>
                            </div>
                          );
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="#3b82f6" 
                        strokeWidth={3} 
                        dot={{ r: 6, strokeWidth: 2 }} 
                        activeDot={{ r: 8, strokeWidth: 0, fill: '#3b82f6' }}
                        animationDuration={2000}
                        animationBegin={700}
                      />
                      <Legend />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataVisualizationSection;
