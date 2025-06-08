import { Button, Divider, FileInput, NumberInput, Textarea, TextInput } from "@mantine/core";
import { IconArrowLeft, IconBookmark, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ApplyJobComp = () => {
    const [preview, setPreview] = useState(false);
    const handlePreview = () => {
        setPreview(!preview);
    }
    return (
        <div className="w-2/3 mx-auto">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14" src={`/images/Icons/Google.png`} alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-2xl"> Software Engineer </div>
                        <div className="text-lg text-mine-shaft-300"> Google &#x2022; 3 days ago &bull; 48 Applicants</div>
                    </div>
                </div>
            </div>
            <Divider my="xl" />
            <div className="text-xl font-semibold mb-5">
                Submit Your Application
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <TextInput label="Full Name" withAsterisk placeholder="Enter name" />
                    <TextInput label="Email" withAsterisk placeholder="Enter email" />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <NumberInput label="Phone Number" withAsterisk placeholder="Enter Phone Number" hideControls min={0} max={9999999999} clampBehavior="strict" />
                    <TextInput label="Personal Website" withAsterisk placeholder="Enter URL" />
                </div>
                <FileInput leftSection={<IconPaperclip stroke={1.5} />} withAsterisk label="Attach your CV" placeholder="Your CV" leftSectionPointerEvents="none" />
                <Textarea placeholder="Type something about yurself..." withAsterisk label="Cover Letter" autosize minRows={4} />
                <Button onClick={handlePreview} color="brightSun.4" variant="light" fullWidth> Preview </Button>

            </div>
        </div>
    )
}

export default ApplyJobComp;