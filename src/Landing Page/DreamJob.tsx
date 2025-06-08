import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-4">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 "> Find Your
                    <span className="text-bright-sun-400"> Dream Job</span> with us.
                </div>
                <div className="text-lg text-mine-shaft-100">
                    Good Life begins with a good company. Start exploring thousands of job in one place.
                </div>
                <div className="flex gap-3 mt-5">
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-2 px-3 text-mine-shaft-100 [&_input]:text-mine-shaft-100 font-semibold"
                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                    />
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-2 px-3 text-mine-shaft-100 [&_input]:text-mine-shaft-100 font-semibold"
                        variant="unstyled"
                        label="Job Type"
                        placeholder="Full Time"
                    />
                    <div className="flex items-center justify-center h-20 w-20 bg-bright-sun-400 rounded-lg text-mine-shaft-100 hover:bg-bright-sun-500 cursor-pointer">
                        <IconSearch className="h-[65%] w-[65%]" />
                    </div>
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img src="/images/Boy.png" alt="boy" />
                    <div className="absolute -right-10 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
                        <div className="text-center mb-1 text-sm text-mine-shaft-100">10K+ got job.</div>
                        <Avatar.Group>
                            <Avatar src="/images/avatar.png" />
                            <Avatar src="/images/avatar1.png" />
                            <Avatar src="/images/avatar2.png" />
                            <Avatar>+5</Avatar>
                        </Avatar.Group>
                    </div>
                    <div className="absolute -left-12 w-fit top-[25%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md flex flex-col">
                        <div className="flex gap-2 items-center mb-3">
                            <div className="w-12 h-12 p-2 bg-mine-shaft-900 rounded-lg justify-center">
                                <img src="/images/Companies/Google.png" alt="" />
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div> Software Engineer</div>
                                <div> New York</div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-around  text-mine-shaft-200 text-xs">
                            <span>1 day ago</span>
                            <span> 120 Applicants </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DreamJob;