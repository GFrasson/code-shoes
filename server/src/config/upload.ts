import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default function upload() {
    return {
        storage: multer.diskStorage({
            destination: resolve(__dirname, "..", "..", "public", "img"),
            filename: (request, file, callback) => {
                const fileHash = crypto.randomBytes(16).toString("hex");
                const fileName = `${fileHash}-${file.originalname}`;

                return callback(null, fileName);
            },
        }),
    };
}
