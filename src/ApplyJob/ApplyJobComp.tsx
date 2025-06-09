import { Button, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import { IconArrowLeft, IconBookmark, IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { Notification } from "@mantine/core";
import { rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";


const ApplyJobComp = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();
    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const handleSubmit = () => {
        setSubmit(true);
        let x = 5;
        setInterval(() => {
            x--;
            setSec(x);
            if (x == 0) {
                navigate('/find-jobs');
            }
        }, 1000)
    }
    return <>
        <LoadingOverlay className="!fixed"
            visible={submit}
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 2 }}
            loaderProps={{ color: 'brightSun.4', type: 'bars' }}
        />
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
                    <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : " "}`} label="Full Name" withAsterisk placeholder="Enter name" />
                    <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : " "}`} label="Email" withAsterisk placeholder="Enter email" />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <NumberInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : " "}`} label="Phone Number" withAsterisk placeholder="Enter Phone Number" hideControls min={0} max={9999999999} clampBehavior="strict" />
                    <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : " "}`} label="Personal Website" withAsterisk placeholder="Enter URL" />
                </div>
                <FileInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : " "}`} leftSection={<IconPaperclip stroke={1.5} />} withAsterisk label="Attach your CV" placeholder="Your CV" leftSectionPointerEvents="none" />
                <Textarea readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : " "}`} placeholder="Type something about yurself..." withAsterisk label="Cover Letter" autosize minRows={4} />
                {
                    !preview && <Button onClick={handlePreview} color="brightSun.4" variant="light" fullWidth> Preview </Button>
                }
                {
                    preview && <div className="flex gap-10 [&>*]:w-1/2">
                        <Button onClick={handlePreview} color="brightSun.4" variant="light" fullWidth> Edit </Button>
                        <Button onClick={handleSubmit} color="brightSun.4" variant="outline" fullWidth> Submit </Button>
                    </div>
                }
            </div>
        </div>
        <Notification className={`!border-bright-sun-400 !fixed top-0 left-[35%] transition z-[1001] duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"}`} icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />} withBorder color="teal" title="Application Submitted!" mt="md" withCloseButton={false}>
            Redirecting to Find Jobs in {sec} seconds...
        </Notification>

    </>
}

export default ApplyJobComp;