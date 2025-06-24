import { ButtonLink } from '@components/Button';
const LandingPage = () => {


    return (
        <div className="bg-gh-bg w-full flex-1 flex flex-col items-center justify-center p-4">
            <div className='text-gh-accent-bg text-center'>
                <h1 className='text-4xl'>Welcome to the Landing Page</h1>
                <p className='text-lg'>Bienvenido a nuestro sistema de gestión de libros</p>
            </div>

            <div className='flex flex-row items-center gap-4 mt-4'>
                <ButtonLink href='/auth/login' className='bg-gh-accent-fg'>
                    Iniciar Sesión
                </ButtonLink>
                <ButtonLink href='/auth/register'>
                    Registrarse
                </ButtonLink>
            </div>

        </div>
    );
}


export default LandingPage;
