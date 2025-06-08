import { Avatar, Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import Navlinks from "./Navlinks";

const Header = () => {
    return (
        <div className="w-full bg-mine-shaft-950 h-20 px-7 text-white flex justify-between items-center font-['poppins']">
            <div className="flex gap-1 items-center text-bright-sun-400">
                <IconAnchor className="h-10 w-10" stroke={2.5} />
                <div className="text-3xl font-semibold">Opportune</div>
            </div>
            {Navlinks()}
            <div className="flex gap-4 items-center">
                <div className="flex gap-4 items-center">
                    <div>Marshal</div>
                    <Avatar src="images/avatar.png" alt="it's me" />
                </div>
                <div className="bg-mine-shaft-800 p-1.5 rounded-full">
                    <IconSettings stroke={1.5} />
                </div>
                <div className="bg-mine-shaft-800 p-1.5 rounded-full">
                    <Indicator color="yellow" size={8} offset={5} processing>
                        <IconBell stroke={1.5} />
                    </Indicator>
                </div>

            </div>
        </div>
    );
};

export default Header;
