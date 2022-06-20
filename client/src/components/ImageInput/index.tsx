import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { ImageInputContainer } from "./style";

interface ImageInputProps {
    image: File | null;
    onImageUpdate: (image: File | null) => void;
}

export function ImageInput({ image, onImageUpdate }: ImageInputProps) {
    const [imageURL, setImageURL] = useState<string | null>(null);

    function handleImageUpdate(event: any) {
        if (!event.target.files.length) {
            return;
        }
                
        const selectedImages: File[] = Array.from(event.target.files);
        const selectedImage = selectedImages[0];
        onImageUpdate(selectedImage);
    }

    useEffect(() => {
        setImageURL(image && URL.createObjectURL(image));
    }, [image]);

    if (imageURL) {
        return (
            <button
                type="button"
                className="p-1 w-[3.6rem] h-[3.6rem] relative rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-light-300 transition-colors outline-none hover:ring-2 hover:ring-offset-primary-300 hover:ring-primary-300"
                onClick={() => onImageUpdate(null)}
            >
                <X weight="fill" className="absolute top-1 left-1" />
                <img src={imageURL} alt="Imagem de um tênis" className="w-full h-full object-contain" />
            </button>
        );
    }

    return (
        <ImageInputContainer>
            <label htmlFor="image-input">
                +
            </label>
            <input
                id="image-input"
                name="image-input"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={(event) => handleImageUpdate(event)}
                className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
            />
        </ImageInputContainer>
    );
}
