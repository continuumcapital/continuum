import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const getJobPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    const response = await axios.get(`https://boards-api.greenhouse.io/v1/boards/${process.env.NEXT_PUBLIC_GREENHOUSE_BOARD}/jobs/${id}?questions=true`, {
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

export default getJobPost;
