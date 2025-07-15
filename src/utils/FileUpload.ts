import multer from 'multer';
import axios from 'axios';

import { envConstant } from '../constant/env.constant.js'; // Make sure it has correct values

class FIle_Upload {
  Multer_Upload = multer({
    storage: multer.memoryStorage(),
  });

  async uploadFileInBunny(file: Express.Multer.File): Promise<string> {
    try {
      const url = `https://storage.bunnycdn.com/${envConstant.BUNNY_BUCKET_Name}/${file.originalname}`;
      const response = await axios.put(url, file.buffer, {
        headers: {
          'Content-Type': file.mimetype,
          AccessKey: envConstant.BUNNY_PASSWORD,
        },
      });

      if (response.status === 201) {
        return url; // Return the URL of the uploaded file
      } else {
        throw new Error('Failed to upload file to Bunny CDN');
      }
    } catch (error) {
      console.error('Error uploading file to Bunny CDN:', error);
      throw error;
    }
  }

  async deleteFileFromBunny(fileName: string): Promise<void> {
    try {
      const url = `https://storage.bunnycdn.com/${envConstant.BUNNY_BUCKET_Name}/${fileName}`;
      const response = await axios.delete(url, {
        headers: {
          AccessKey: envConstant.BUNNY_PASSWORD,
        },
      });

      if (response.status !== 204) {
        throw new Error('Failed to delete file from Bunny CDN');
      }
    } catch (error) {
      console.error('Error deleting file from Bunny CDN:', error);
      throw error;
    }
  }
}

export default new FIle_Upload();
