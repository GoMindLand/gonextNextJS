import JobCard from "@/presentation/pages/home/component/jobCard";
import React, {useEffect} from "react";
import getJobs from "@/presentation/hooks/home/jobSection.hook";
import {Job} from "@/application/dto/jobs-response.dto";

const JobSection: React.FC = () => {
    const [jobs, setJobs] = React.useState([] as Job[]);
    useEffect(() => {
        const fetchData: () => Promise<void> = async () => {
            const jobsInfo: Job[] = await getJobs();
            setJobs(jobsInfo);
        };
        fetchData();
    } , []);
    return (<>
        <div className="container py-5">
            <h2 className="text-center fw-bold">
                <span style={{color: "#7EE0BE"}}>Nos offres</span> d&apos;emploi
            </h2>
            <div className="row mt-4">
                {jobs.map((job: Job, index: number) => (
                    <div className="col-md-4" key={index}>
                        <JobCard location={job.Localisation} title={job.Title} readingTime={job.ReadingTime}/>
                    </div>
                ))}
            </div>
        </div>
    </>);
}

export default JobSection;