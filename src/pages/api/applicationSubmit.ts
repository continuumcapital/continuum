import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

const submitApplication = async ( req:NextApiRequest, res:NextApiResponse ) => {
  const { id } = req.query
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { applicationData } = req.body;

  // Construct the Greenhouse API URL
  const greenhouseApiUrl = `https://boards-api.greenhouse.io/v1/boards/${process.env.NEXT_PUBLIC_GREENHOUSE_BOARD}/jobs/${id}`;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${Buffer.from(process.env.NEXT_PUBLIC_GREENHOUSE || '').toString('base64')}`
  };

  try {
    const response = await axios.post(greenhouseApiUrl, applicationData, { headers })
    return res.status(200).json(response.data)
  } catch (error) {
    
  // return res.status(error?.response?.status || 500).json(error?.response?.data || {});

  if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status || 500).json(error.response.data || {})
    } else {
      res.status(500).json({ message: 'An error occurred' })
    }
  }
}

export default submitApplication;
