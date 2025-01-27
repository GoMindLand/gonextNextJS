export interface Tags {
    label: string[];
}

export interface Job {
    Title: string;
    JobDescription: string;
    Localisation: string;
    ReadingTime: number;
    tags: Tags;
}

export interface JobsResponseDto {
        jobs: Job[];
}