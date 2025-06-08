import { Link } from "react-router-dom";
import PostJob from "../PostJob/PostJob";
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-4 inline-block" to="/jobs">
                <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" variant="light" fullWidth> Back </Button>
            </Link>
            <ApplyJobComp />
        </div> 
    )
}

export default ApplyJobPage;