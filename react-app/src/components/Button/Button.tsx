import styles from "./button.module.css"

interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger' | 'success';
    onClick: () => void;
}

function Button({children, onClick, color='primary'} : Props) {
    return <button type="button" className={[styles.btn, styles['btn-' + color]].join(' ')}
                   onClick={onClick}>{children}</button>
}

export default Button;