import { icons } from "./icons"
import UserInfoRow from "../../components/UserInfoRow"
import {user} from "./user"

const Profile = () => {
    return (
        <div className="bg-white px-4 py-6 rounded-lg flex flex-col gap-8">
            <div className="flex flex-col items-center gap-3">
                <img src={user.image} />
                <h1 className="text-2xl font-semibold mt-4">{user.name}</h1>
            </div>
            <div className="flex flex-col gap-6">
                <UserInfoRow svgIcon={icons.calendarIcon} title="Date of Birth" data={user.dateOfBirth} />
                <UserInfoRow svgIcon={icons.genderIcon} title="Gender" data={user.gender} />
                <UserInfoRow svgIcon={icons.phoneIcon} title="Contact Info." data={user.contact} />
                <UserInfoRow svgIcon={icons.phoneIcon} title="Emergency Contacts" data={user.emergency} />
                <UserInfoRow svgIcon={icons.insuranceIcon} title="Insurance Provider" data={user.insurance} />
            </div>
            <div className="flex justify-center">
                <button className="rounded-full py-2 px-8 font-semibold bg-cl-green text-sm">Show All Information</button>
            </div>
        </div>
    )
}

export default Profile