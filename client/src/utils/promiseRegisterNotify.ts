import { toast } from 'react-toastify';

async function promiseRegisterNotify(promise: Promise<unknown>): Promise<void> {
    await toast.promise(promise, {
        pending: 'Cadastrando',
        success: 'Cadastro realizado com sucesso!',
        error: 'Erro ao cadastrar'
    }, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export { promiseRegisterNotify };