
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
  Legend
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

  return (
    <section id="data-viz" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Data Analytics</h2>
          <p className="text-muted-foreground">
            Visualizing my journey and growth in data science and AI
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-4 text-center">Skill Progress</h3>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={skillProgressData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
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
                      <Bar dataKey="value" fill="#8b5cf6" barSize={20} radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-4 text-center">Project Distribution</h3>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={projectTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {projectTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
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
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-4 text-center">Learning Hours</h3>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={learningTrajectoryData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
                      <Line type="monotone" dataKey="hours" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
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
