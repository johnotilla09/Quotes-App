import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
    const {quoteId} = useParams();

    const [isAddingComment, setIsAddingComment] = useState(false);

    const {sendRequest, status, data: loadedComments, error} = useHttp(getAllComments);

    let comment;

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const addCommentHandler = useCallback(() => {
        sendRequest(quoteId)
        setIsAddingComment(false);
    }, [sendRequest, quoteId, setIsAddingComment])

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        comment = <div className="centered">
            <LoadingSpinner/>
        </div>
    }

    if (status === 'completed' && loadedComments) {
        comment = <CommentsList comments={loadedComments}/>
    }

    if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
        comment = <p className="centered">No comments were added yet!</p>
    }

    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className="btn" onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addCommentHandler} />}
            <p>{comment}</p>
        </section>
    );
};

export default Comments;
