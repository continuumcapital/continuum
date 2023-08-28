import { Dispatch, SetStateAction } from 'react';

interface JobDetail {
  id: string
  title: string
  content: string
  location: { name: string }
  questions: {
    description: string | null
    label: string
    required: boolean
    fields: {
      name: string
      type: 'input_text' | 'input_file' | 'textarea' | 'multi_value_multi_select'
      values: any[]
      required: boolean
    }[]
    value: string
  }[]
  metadata: { 
    name?: string 
    value: string 
  }[]
}


type Setters = {
  setJobDetail: Dispatch<SetStateAction<JobDetail | null>>;
  setComplianceData: Dispatch<SetStateAction<any[]>>;
  setError: Dispatch<SetStateAction<string | null>>;
};

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
