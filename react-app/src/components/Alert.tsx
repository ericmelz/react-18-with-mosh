import {ReactNode} from "react";

interface Props {
    onAlertClose: () => void;
    children: ReactNode;
}

const Alert = ({ onAlertClose, children }: Props) => {
    return (
        <div className="alert alert-primary alert-dismissible">
            {children}
            <button onClick={onAlertClose}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close">
            </button>
        </div>
    )
}

export default Alert