import axios from 'axios'
import FormData from 'form-data'
import multer from 'multer'

type MulterFile = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
};

// Set up multer to parse multipart/form-data requests
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).any();

// Ensure Next.js doesn't automatically parse the request body
export const config = {
  api: {
    bodyParser: false,
  },
};

const submitApplication = async (req:any, res:any) => {
  // Use multer to parse the incoming request
  upload(req, res, async (err:any) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Here, req.body contains form fields, and req.files contains uploaded files
    // Construct a new FormData instance to send to the Greenhouse API
    const form = new FormData();

    // Append text fields to the FormData instance
    Object.keys(req.body).forEach(key => {
      form.append(key, req.body[key]);
    });

    // Append files to the FormData instance
    if (req.files) {
      (req.files as MulterFile[]).forEach(file => {
        form.append(file.fieldname, file.buffer, file.originalname);
      });
    }
    

    // Construct the Greenhouse API URL
    const { id } = req.query;
    const greenhouseApiUrl = `https://boards-api.greenhouse.io/v1/boards/${process.env.NEXT_PUBLIC_GREENHOUSE_BOARD}/jobs/${id}`;

    // Construct headers for the axios request
    const headers = {
      ...form.getHeaders(),
      'Authorization': `Basic ${Buffer.from(process.env.NEXT_PUBLIC_GREENHOUSE || '').toString('base64')}`
    };

    try {
      const response = await axios.post(greenhouseApiUrl, form, { headers });
      return res.status(200).json(response.data);
    } catch ( error ) {
      if (axios.isAxiosError(error) && error.response) {
        res.status(error.response.status || 500).json(error.response.data || {});
      } else {
        res.status(500).json({ message: 'An error occurred' });
      }
    }
  });
};

export default submitApplication;

