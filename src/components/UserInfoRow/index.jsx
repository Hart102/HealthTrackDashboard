const UserInfoRow = ({ svgIcon, title, data }) => {
    return (
        <div className="flex space-x-4 items-center capitalize">
            <span>{svgIcon}</span>
            <div className="flex flex-col">
                <p className="text-sm text-cs-gray-100-50">{title}</p>
                <p className="text-sm font-semibold">{data}</p>
            </div>
        </div>
    )
}

export default UserInfoRow