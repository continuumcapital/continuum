import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const getJobs = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get('https://YOUR_GREENHOUSE_API_ENDPOINT', {
      headers: {
        'Authorization': `Bearer ${ process.env.NEXT_PUBLIC_GREENHOUSE }`
      }
    })

    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
        res.status(error.response.status || 500).json(error.response.data || {});
    } else {
        res.status(500).json({ message: 'An error occurred' });
    }
  }
}

export default getJobs;
