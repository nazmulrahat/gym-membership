import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const MathMarkData = [
        {"name": "Alice", "roll": 1, "math": 75, "physics": 80, "chemistry": 78},
        {"name": "Bob", "roll": 2, "math": 82, "physics": 85, "chemistry": 90},
        {"name": "Charlie", "roll": 3, "math": 88, "physics": 92, "chemistry": 85},
        {"name": "David", "roll": 4, "math": 91, "physics": 87, "chemistry": 93},
        {"name": "Eve", "roll": 5, "math": 67, "physics": 75, "chemistry": 70},
        {"name": "Frank", "roll": 6, "math": 85, "physics": 90, "chemistry": 88},
        {"name": "Grace", "roll": 7, "math": 78, "physics": 80, "chemistry": 82},
        {"name": "Heidi", "roll": 8, "math": 94, "physics": 96, "chemistry": 91},
        {"name": "Ivan", "roll": 9, "math": 80, "physics": 84, "chemistry": 79},
        {"name": "Judy", "roll": 10, "math": 72, "physics": 70, "chemistry": 75}
    ]
    

    return (
        <div>
            <LChart width={500} height={400} data={MathMarkData}>
                <XAxis dataKey={name}></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line stroke='green' dataKey='chemistry'></Line>
                <Line dataKey='physics'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;