/// <reference types="react" />
declare type ButtonGroupProps = {
    /** set direction of the button */
    direction: 'row' | 'column';
    /** set align items  */
    align: 'flex-start' | 'center' | 'flex-end';
    /** gap of the button */
    gap: number | string;
    /** buttons */
    children: React.ReactNode;
    /** custom styling */
    className?: string;
};
declare const ButtonGroup: {
    ({ direction, align, gap, children, className, }: ButtonGroupProps): JSX.Element;
    defaultProps: {
        direction: string;
        align: string;
        gap: string;
        className: string;
    };
};
export default ButtonGroup;
