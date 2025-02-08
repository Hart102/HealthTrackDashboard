import Navbar from "../../components/Navbar"
import Patients from "../../components/Patients"
import DiagnosisHistory from "../../components/DiagnosisHistory"
import DiagnosticList from "../../components/DiagnosticList"
import Profile from "../../components/Profile"
import LabResult from "../../components/LabResult"

const index = () => {
  return (
    <div className="w-full lg:py-10 bg-PanelBackground">
      <div className="container mx-auto flex flex-col items-center gap-10">
        <Navbar />
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="col-span-1 p-0">
            <Patients />
          </div>
          <div className="col-span-2 space-y-8">
            <DiagnosisHistory />
            <DiagnosticList />
          </div>
          <div className="col-span-1 space-y-8">
            <Profile />
            <LabResult />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index