import { MagnifyingGlassIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import axios from "axios"

const Patients = () => {
    const [patients, setPatients] = useState();



    useEffect(() => {
        const fetchPetients = async () => {
            const username = import.meta.env.VITE_API_USERNAME;
            const password = import.meta.env.VITE_API_PASSWORD;
            const authCredentials = btoa(`${username}:${password}`);

            const result = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
                headers: {
                    "Authorization": `Basic ${authCredentials}`
                }
            });
            if (result.status == 200) {
                setPatients(result.data)
            }
        }

        fetchPetients();
    }, [])
    return (
        <div className="bg-white [&_svg]:w-6 [&_svg]:h-6 rounded-xl">
            <div className="flex items-center p-4 lg:p-6 justify-between mb-4">
                <h1 className="font-bold text-2xl">Patients</h1>
                <MagnifyingGlassIcon />
            </div>

            <div className="overflow-y-auto h-[98vh] scrollbar-thin px-4 lg:px-6">
                {
                    patients && patients.map((patient) => (
                        <div key={patient.name} className="flex items-center justify-between mt-8">
                            <div className="flex space-x-4">
                                <img src={patient?.profile_picture} className="w-11 h-11" />
                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold">{patient?.name}</span>
                                    <span className="text-cs-gray-100">{patient?.gender}, {patient?.age}</span>
                                </div>
                            </div>
                            <EllipsisHorizontalIcon className="cursor-pointer" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Patients