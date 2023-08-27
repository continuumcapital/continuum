
type SubmitOptions = {
  endpoint: string,
  jobId: string | number,
  values: Record<string, any>
};

export const submitApplication = async ({ endpoint, jobId, values }: SubmitOptions) => {
  try {
      const response = await fetch(`${endpoint}?id=${jobId}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
      });

      console.log('Raw Response:', response);

      const data = await response.json();

      console.log('Parsed JSON Response:', data);

      if (response.ok) {
          // Handle success, maybe navigate user to a thank-you page or show a success message.
      } else {
          console.log('Server responded with an error', data);
      }
  } catch (error) {
      console.error('Network error:', error);
      // Handle network errors or show an error message to the user.
  }
};
