import React from 'react'

const HealthStatCard = ({ imageUrl, title, rate, status, bgColor, hideIcon }) => {
    return (
        <div className={`flex flex-col gap-4 rounded-lg p-4 ${bgColor}`}>
            <img src={imageUrl} width={80} />
            <div>
                <p className="capitalize">{title}</p>
                <b className="text-3xl">{rate}</b>
            </div>
            <div className="flex items-center gap-2">
                {hideIcon !== true &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.999" height="5.479" viewBox="0 0 9.999 5.479">
                        <path id="ArrowDown" d="M333.518-544.8l-4.177-4.178a.673.673,0,0,1-.136-.193.532.532,0,0,1-.05-.228.606.606,0,0,1,.165-.424.56.56,0,0,1,.434-.18h8.8a.56.56,0,0,1,.434.181.611.611,0,0,1,.165.423,1.85,1.85,0,0,1-.186.421l-4.177,4.177a.962.962,0,0,1-.3.21.851.851,0,0,1-.338.066.851.851,0,0,1-.339-.066A.963.963,0,0,1,333.518-544.8Z" transform="translate(-329.155 549.999)" fill="#072635" />
                    </svg>
                }
                <small className="text-cs-gray-100-50">{status}</small>
            </div>
        </div>
    )
}

export default HealthStatCard