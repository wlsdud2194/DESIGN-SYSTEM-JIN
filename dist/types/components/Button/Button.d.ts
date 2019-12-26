/// <reference types="react" />
declare type ButtonProps = {
    /** content of the button */
    children: React.ReactNode;
    /** set type of the button */
    type?: 'button' | 'submit' | 'reset';
    /** make theme of the button */
    theme: 'primary' | 'secondary' | 'tertiary';
    /** size of the button */
    size: 'small' | 'medium' | 'big';
    /** set main color of the button */
    mainColor: string;
    /** width of the button arbitrarily set by the user */
    width?: string | number;
    /** if this props is true, the button is disabled */
    disabled?: boolean;
    /** When the button clicked, call this function */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};
/** `Button` component is used when something process is triggered */
declare const Button: {
    ({ children, theme, type, size, mainColor, width, disabled, onClick, }: ButtonProps): JSX.Element;
    defaultProps: {
        type: string;
        theme: string;
        size: string;
        mainColor: string;
        disabled: boolean;
    };
};
export default Button;
