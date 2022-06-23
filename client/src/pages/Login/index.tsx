import { Navbar } from "../../components/Navbar";
import { Lock } from 'phosphor-react';

import { LoginContainer } from "./style";

export function Login() {
    return (
        <LoginContainer>
            <Navbar />

            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-sm w-full space-y-8 bg-dark-500 p-10 rounded-[0.625rem]">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-[2rem] text-primary-300">Login</h2>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div className="rounded-md shadow-sm -space-y-px mb-8">
                            <div className="mb-4">
                                <label htmlFor="email" className="text-light-300 text-sm">Email</label>
                                <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-300 focus:border-primary-300 focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-light-300 text-sm">Senha</label>
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-300 focus:border-primary-300 focus:z-10 sm:text-sm" placeholder="Password" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-light-300 bg-primary-300 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <Lock size={18} />
                                </span>
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </LoginContainer>
    );
}