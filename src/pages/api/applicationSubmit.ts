import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const submitApplication = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  if (req.method !== 'POST') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  try {
    const response = await axios.post(
      `https://boards-api.greenhouse.io/v1/boards/${process.env.NEXT_PUBLIC_GREENHOUSE_BOARD}/jobs/${id}/applications`, // Adjust based on API docs
      req.body, // Forward the application data from the frontend
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ process.env.NEXT_PUBLIC_GREENHOUSE }`
        }
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status || 500).json(error.response.data || {});
    } else {
      res.status(500).json({ message: 'An error occurred' });
    }
  }
};

export default submitApplication;
