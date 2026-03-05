import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Badge, Flex, Link, Text } from '@radix-ui/themes';
import Hello from '@/components/Hello';

const barData = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 19 },
  { name: 'Wed', value: 15 },
  { name: 'Thu', value: 22 },
  { name: 'Fri', value: 18 },
];

const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

export default function HomePage() {
  const env = import.meta.env.VITE_ENV ?? 'preview';
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      align="center"
      gap="6"
      p="6"
    >
      <Hello />
      <Link href="/api/health">API Health</Link>
      <Badge>ENV: {env}</Badge>
      <Flex direction="column" gap="4" width="100%" style={{ maxWidth: 500 }}>
        <Text size="3" weight="bold">Bar Chart</Text>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
        <Text size="3" weight="bold">Line Chart</Text>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
}
