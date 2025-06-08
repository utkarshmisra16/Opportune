import { Divider } from "@mantine/core";
import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react"
import { footerLinks } from "../Data/Data";
import { link } from "fs";

const Footer = () => {
    return (
        <div className=" pt-20 pb-7 flex gap-5 justify-around  bg-mine-shaft-90 font-['poppins']">
            <div className="w-1/4 flex flex-col gap-4">
                <div className="flex gap-1 items-center text-bright-sun-400">
                    <IconAnchor className="h-7 w-7" stroke={2.5} />
                    <div className="text-xl font-semibold">Opportune</div>
                </div>
                <div className="text-sm text-mine-shaft-300">
                    Job portal with user profiles, Skill updares, Certification, work Experience and job Postings.
                </div>
                <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full cursor-pointer hover:[&>div]:bg-mine-shaft-700">
                    <div> <IconBrandFacebook /> </div>
                    <div> <IconBrandInstagram /> </div>
                    <div> <IconBrandX /> </div>
                </div>
            </div>
            {
                footerLinks.map((item, index) => <div key={index}>
                    <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>
                    {
                        item.links.map((link, index) => <div key={index} className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 
                        cursor-pointer mb-1  hover:translate-x-2 tansition duration-300 ease-in-out">
                            {link}
                        </div>)
                    }
                </div>)
            }
        </div>
    )
}

export default Footer;