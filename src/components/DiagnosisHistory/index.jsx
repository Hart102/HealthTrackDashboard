import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import HealthMetric from "../HealthMetric";
import HealthStatCard from "../HealthStatCard";
import {chartData} from "./chartData";


const DiagnosisHistory = () => {
    return (
        <div className="bg-white p-4 rounded-lg">
            <h2 className="font-bold text-2xl mb-6">Diagnosis History</h2>

            <div className="hidden lg:flex gap-5 p-4 bg-purple-100 rounded-lg">
                <div className="w-full lg:w-9/12 flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-lg font-semibold mb-2">Blood Pressure</h2>
                        <button className="flex items-center text-sm gap-1 text-cs-gray-100-50">Last 6 months <ChevronDownIcon className="w-4 h-4" /></button>
                    </div>
                    <LineChart width={500} height={300} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="systolic" stroke="#ff69b4" />
                        <Line type="monotone" dataKey="diastolic" stroke="#7b68ee" />
                    </LineChart>
                </div>

                <div className="w-full lg:w-3/12 flex flex-col gap-3 lg:mt-2">
                    <HealthMetric
                        rate="160"
                        title="Systolic"
                        bgColor="bg-cs-pink"
                        description="Higher than Average"
                    />
                    <div className="border-b border-gray-300"></div>
                    <HealthMetric
                        rate="78"
                        title="Diastolic"
                        bgColor="bg-cs-purple"
                        description="Lower than Average"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <HealthStatCard
                    rate="20 bpm"
                    status="Normal"
                    imageUrl="./rate.png"
                    title="Respiratory rate"
                    bgColor="bg-primaryAccentLight"
                    hideIcon={true}
                />
                <HealthStatCard
                    rate="98.6F"
                    status="Normal"
                    title="Temperature"
                    imageUrl="./temperature.png"
                    bgColor="bg-warmAccentLight"
                    hideIcon={true}
                />
                <HealthStatCard
                    rate="78 bpm"
                    title="Heart Rate"
                    imageUrl="./heart.png"
                    status="Lower than Average"
                    bgColor="bg-secondaryAccent"
                    hideIcon={false}
                />
            </div>
        </div>
    )
}

export default DiagnosisHistory