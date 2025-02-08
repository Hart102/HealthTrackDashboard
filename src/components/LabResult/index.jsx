import { ArrowDownTrayIcon } from "@heroicons/react/24/solid"

const LabResult = () => {
    const testResults = ["Blood Tests", "CT Scans", "Radiology Reports", "X-Rays", "Urine Test", "Blood Tests", "CT Scans", "Radiology Reports", "X-Rays", "Urine Test"]

    return (
        <div className="bg-white rounded-lg p-3">
            <h1 className="text-2xl font-semibold mb-6 p-3">Lab Results</h1>

            <div className="overflow-y-auto h-48 scrollbar-thin p-3">
                <div className="space-y-6">
                    {testResults.map((test, index) => (
                        <div key={`${test}-${index}`} className="capitalize text-sm">
                            <div className="flex items-center justify-between">
                                <p className="text-cs-gray-100-50">{test}</p>
                                <button><ArrowDownTrayIcon className="w-6 h-6" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LabResult