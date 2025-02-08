import { diagnosis } from "./diagnosis"

const DiagnosticList = () => {
    return (
        <div className="rounded-lg bg-white p-4">
            <h2 className="font-bold text-2xl mb-8">Diagnostic List</h2>

            <div className="overflow-y-auto h-48 scrollbar-thin">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr >
                            <th className="p-3 sticky top-0 z-10 bg-[#F6F7F8] rounded-l-full">Problem/Diagnosis</th>
                            <th className="p-3 sticky top-0 z-10 bg-[#F6F7F8]">Description</th>
                            <th className="p-3 sticky top-0 z-10 bg-[#F6F7F8] rounded-r-full">status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 p-10">
                        {diagnosis.map((diagnosis, index) => (
                            <tr key={`${diagnosis.problem}-${index}`} className="border-b border-b-PanelBackground">
                                <td className={index == 0 ? "pt-8 pb-4 px-4" : `p-4`}>{diagnosis.problem}</td>
                                <td className={index == 0 ? "pt-8 pb-4 px-4" : `p-4`}>{diagnosis.description}</td>
                                <td className={index == 0 ? "pt-8 pb-4 px-4" : `p-4`}>{diagnosis.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DiagnosticList