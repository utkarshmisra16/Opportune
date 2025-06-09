import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props: any) => {
    return (
        <div className="flex justify-between bg-mine-shaft-900 items-center rounded-lg p-2">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/images/Icons/${props.name}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-sm text-mine-shaft-300">{props.employees} Employees </div>
                </div>
            </div>
            <ActionIcon color='brightSun.4' variant="subtle" >
                <IconExternalLink />
            </ActionIcon>
        </div>
    )
}

export default CompanyCard;