import { useRef, useEffect, Fragment } from "react";

import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";

import classes from "./NewCommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
    const commentTextRef = useRef();

    const { sendRequest, status, data, error } = useHttp(addComment);

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredComment = commentTextRef.current.value;

        if (enteredComment === "") {
            return;
        }

        sendRequest({
            commentData: { text: enteredComment },
            quoteId: props.quoteId,
        });
    };

    useEffect(() => {
        if (status === "completed" && !error) {
            props.onAddedComment();
        }
    }, [status, error, props.onAddedComment]);

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status === "pending" ? (
                <div className="centered">
                    <LoadingSpinner />A
                </div>
            ) : (
                <Fragment>
                    <div
                        className={classes.control}
                        onSubmit={submitFormHandler}
                    >
                        <label htmlFor="comment">Your Comment</label>
                        <textarea
                            id="comment"
                            rows="5"
                            ref={commentTextRef}
                        ></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button className="btn">Add Comment</button>
                    </div>
                </Fragment>
            )}
        </form>
    );
};

export default NewCommentForm;