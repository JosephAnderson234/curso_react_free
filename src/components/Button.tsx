import { useLocation, useNavigate } from "react-router-dom";

interface ButtonProps {
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}


export const ButtonLink = (props: ButtonProps) =>{
    const { href, onClick, children, className } = props;
    const location = useLocation();
    const isActive = location.pathname === href;
    const navigate = useNavigate();
    const alternativeClass = isActive ? "text-secondary" : "text-primary";

    const handleClick = () => {
        onClick?.();
        navigate(href);
    }

    return (
        <a onClick={handleClick} className={`${className} ${alternativeClass} hover:text-accent transition-colors duration-300 hover:cursor-pointer`}>
            {children}
        </a>
    )
}