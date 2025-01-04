import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>
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
            {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<Layout>{props.children}</Layout>, document.getElementById("layout-root"))}
        </Fragment>
    )
}

export default Modal;