import { useState, useEffect } from 'react';

type Job = {
  absolute_url: string;
  id: number;
  title: string;
  departments: { name: string }[];
  location: { name: string };
};

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [groupedJobs, setGroupedJobs] = useState<{ [key: string]: Job[] }>({});
  const [error, setError] = useState<string | null>(null);

  const groupJobsByDepartment = (jobs: Job[]) => {
    const groupedJobs: { [key: string]: Job[] } = {};

    jobs.forEach((job) => {
      job.departments.forEach((department) => {
        if (!groupedJobs[department.name]) {
          groupedJobs[department.name] = [];
        }
        groupedJobs[department.name].push(job);
      });
    });

    return groupedJobs;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/jobBoard');
        const result = await res.json();

        if (res.ok) {
          setJobs(result.jobs);
          setGroupedJobs(groupJobsByDepartment(result.jobs));
        } else {
          setError(result.message || 'An error occurred');
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An error occurred');
        }
      }
    };

    fetchData();
  }, []);

  return { jobs, groupedJobs, error };
};
