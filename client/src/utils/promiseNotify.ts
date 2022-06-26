import { toast } from 'react-toastify';

interface PromiseParams {
    pending: string;
    success: string;
    error: string;
}

async function promiseNotify(promise: Promise<unknown>, promiseParams: PromiseParams): Promise<void> {
    await toast.promise(
        promise,
        promiseParams,
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
    );
}

export { promiseNotify };