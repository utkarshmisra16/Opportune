import { jobList } from "../Data/JobsData"
import JobCard from "../FindJobs/JobCard"

const CompanyJobs = () => {
    return <div className="mt-10 flex flex-wrap">
            {
                jobList.map((job, index) => <JobCard key={index} {...job} />)
            }
        </div>
}

export default CompanyJobs;