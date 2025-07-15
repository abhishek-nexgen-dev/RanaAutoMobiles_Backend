import { envConstant } from '../constant/env.constant';
import multer from 'multer';
import axios from 'axios';


class File_Upload {
  Multer_Upload = multer({
    storage: multer.memoryStorage(), // Store files in memory
  });


  async uploadFileInBunny(file: Express.Multer.File): Promise<string> {
    try {
      // Generate a unique file name
      const uniqueFileName = `${crypto.getRandomValues}-${file.originalname}`;

      // Construct the BunnyCDN upload URL
      const url = `https://${envConstant.BUNNY_REGION ? `${envConstant.BUNNY_REGION}.` : ''}storage.bunnycdn.com/${envConstant.BUNNY_BUCKET_Name}/${uniqueFileName}`;

      // Perform the file upload using axios
      const response = await axios.put(url, file.buffer, {
        headers: {
          AccessKey: envConstant.BUNNY_PASSWORD,
          'Content-Type': file.mimetype || 'application/octet-stream',
          accept: 'application/json',
        },
      });

      // Check if the upload was successful
      if (response.status === 201) {
        return url; // Return the URL of the uploaded file
      } else {
        throw new Error(
          `Failed to upload file to BunnyCDN. Status: ${response.status}`
        );
      }
    } catch (error) {
      console.error('Error uploading file to BunnyCDN:', error);
      throw error;
    }
  }

 
  async deleteFileFromBunny(fileName: string): Promise<void> {
    try {
      // Construct the BunnyCDN delete URL
      const url = `https://${envConstant.BUNNY_REGION ? `${envConstant.BUNNY_REGION}.` : ''}storage.bunnycdn.com/${envConstant.BUNNY_BUCKET_Name}/${fileName}`;

      // Perform the file deletion using axios
      const response = await axios.delete(url, {
        headers: {
          AccessKey: envConstant.BUNNY_PASSWORD,
        },
      });

      // Check if the deletion was successful
      if (response.status !== 204) {
        throw new Error(
          `Failed to delete file from BunnyCDN. Status: ${response.status}`
        );
      }
    } catch (error) {
      console.error('Error deleting file from BunnyCDN:', error);
      throw error;
    }
  }
}

export default new File_Upload();
