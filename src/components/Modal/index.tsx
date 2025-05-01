import styles from './index.module.sass';
import {ReactNode} from "react";

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
};

export const Modal = ({children, onClose}: ModalProps) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};