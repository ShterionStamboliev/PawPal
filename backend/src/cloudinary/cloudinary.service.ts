import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './cloudinary-response';
import * as streamifier from 'streamifier';

@Injectable()
export class CloudinaryService {
    uploadFile(
        id: string,
        file: Express.Multer.File,
    ): Promise<CloudinaryResponse> {
        return new Promise<CloudinaryResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'pets', allowed_formats: ['png', 'jpg'] },
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                },
            );

            streamifier.createReadStream(file.buffer, id).pipe(uploadStream);
        });
    }

    async deleteFile(publicId: string): Promise<{ result: string }> {
        try {
            const result = await cloudinary.uploader.destroy(publicId);
            return result;
        } catch (error) {
            throw new Error('Failed to delete file.');
        }
    }
}
