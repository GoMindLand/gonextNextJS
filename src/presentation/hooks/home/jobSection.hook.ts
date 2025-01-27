import container from "@/config/container";
import {FetchJobsUseCase} from "@/application/use-cases/fecth-jobs.use-case";
import {Job, JobsResponseDto} from "@/application/dto/jobs-response.dto";

const getJobs : () => Promise<Job[]> = async () => {

console.log('fetching jobs...');
const fetchJobsUseCase = container.get<FetchJobsUseCase>("FetchJobsUseCase");

const response: JobsResponseDto = await fetchJobsUseCase.execute();

console.log(response.jobs);

return response.jobs;

}

export default getJobs;