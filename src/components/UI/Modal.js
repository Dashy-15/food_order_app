import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHide}></div>
}

const Layout = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHide={props.onClose}/>, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<Layout>{props.children}</Layout>, document.getElementById("layout-root"))}
        </Fragment>
    )
}

export default Modal;