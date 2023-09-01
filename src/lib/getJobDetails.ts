import { Dispatch, SetStateAction } from 'react';

interface JobDetail {
  id: string
  title: string
  content: string
  location: { name: string }
  metadata: { 
    name?: string 
    value: string 
  }[]
  questions: {
    name: string
    label: string
    required: boolean
    fields: {
      name: string
      type: 'input_text' | 'input_file' | 'multi_value_single_select'
      values: any[]
      required: boolean
    }[]
  }[]
}

type Setters = {
  setJobDetail: Dispatch<SetStateAction<JobDetail | null>>;
  setComplianceData: Dispatch<SetStateAction<any[]>>;
  setError: Dispatch<SetStateAction<string | null>>;
}

export const getJobDetails = async (id: string | string[] | undefined, setters: Setters) => {
  if (!id) return;

  try {
    const res = await fetch(`/api/jobPost?id=${id}`);
    const result = await res.json();

    if (res.ok) {
      setters.setJobDetail(result);
      setters.setComplianceData(result.compliance || []);
      setters.setError(null);
    } else {
      setters.setJobDetail(null);
      setters.setComplianceData([]);
      setters.setError(result.message || 'An error occurred');
    }
  } catch (error) {
    setters.setJobDetail(null);
    setters.setComplianceData([]);
    setters.setError('An error occurred while fetching data');
  }
}
