import fs from "fs";

export const deleteFile = async (filePath: string) => {
    try {
        // Verifies if a file exists
        await fs.promises.stat(filePath);
    } catch {
        return;
    }

    // Deletes the file
    await fs.promises.unlink(filePath);
};
