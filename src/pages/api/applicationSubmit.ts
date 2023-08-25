import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const submitApplication = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  if (req.method !== 'POST') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  // Base64 encode your API key
  const base64EncodedApiKey = Buffer.from(process.env.NEXT_PUBLIC_GREENHOUSE || '').toString('base64');

  try {
    const response = await axios.post(
      `https://boards-api.greenhouse.io/v1/boards/${process.env.NEXT_PUBLIC_GREENHOUSE_BOARD}/jobs/${id}`,
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${base64EncodedApiKey}`  // Use the encoded API key here
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
