import { ActionIcon, Button, Divider } from "@mantine/core"
import { IconBookmark, IconMapPin } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { card, desc, skills } from "../Data/JobDescData"
import DOMPurify from 'dompurify'

const JobDesc = () => {
    const data = DOMPurify.sanitize(desc);
    return (
        <div className="w-2/3">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14" src={`/images/Icons/Google.png`} alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-2xl"> Software Engineer </div>
                        <div className="text-lg text-mine-shaft-300"> Google &#x2022; 3 days ago &bull; 48 Applicants</div>
                    </div>
                    <div className="flex flex-col gap-2 items-center ml-72">
                        <Link to="/apply-job">
                            <Button color="brightSun.4" variant="light" size="sm"> Apply </Button>
                        </Link>
                        <IconBookmark className="text-bright-sun-400 cursor-pointer stroke={1.5}" />
                    </div>
                </div>
            </div>
            <Divider my="xl" />
            <div className="flex justify-between">
                {
                    card.map((items: any, index: number) => <div key={index} className="flex flex-col items-center">
                        <ActionIcon color="brightSun.4" className="!h-12 !w-12" variant="light" radius="xl" aria-label="Settings" >
                            <items.icon style={{ width: '70%', height: '70%' }} className="h-4/5 w-4/5" stroke={1.5} />
                        </ActionIcon>
                        <div className="text-mine-shaft-300 text-sm"> {items.name} </div>
                        <div className="font-semibold "> {items.value} </div>
                    </div>)
                }
            </div>
            <Divider my="xl" />
            <div>
                <div className="text-xl font-semibold mb-5"> Required Skills </div>
                <div className="flex flex-wrap gap-2">
                    {
                        skills.map((item, index) => <ActionIcon key={index} color="brightSun.4" className="!h-fit !w-fit !text-sm" p="xs" variant="light" radius="xl" font-medium aria-label="Settings" >
                            {item}
                        </ActionIcon>)
                    }
                </div>
            </div>
            <Divider my="xl" />
            <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify" dangerouslySetInnerHTML={{ __html: data }}>
            </div>
            <Divider my="xl" />
            <div>
                <div className="text-xl font-semibold mb-5">
                    About Company
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-8" src={`/images/Icons/Google.png`} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-medium text-lg"> Google </div>
                            <div className="text-mine-shaft-300 text-sm font-light"> 10K+ Employees </div>
                        </div>
                        <Link to=" " className="ml-96">
                            <Button color="brightSun.4" variant="light" size="sm"> Company Page </Button>
                        </Link>
                    </div>
                    <div className="text-mine-shaft-300 mt-3 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eveniet ipsum hic velit quas a ipsa aut,
                        iste debitis! Nulla aperiam temporibus facere suscipit. Sequi natus assumenda culpa cupiditate voluptas illo,
                        sapiente minima labore consectetur, maiores ut veniam tempore nobis!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDesc;