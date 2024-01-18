import { useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
    const [isAddingComment, setIsAddingComment] = useState(false);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const addCommentHandler = () => {
        setIsAddingComment(false);
    }

    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className="btn" onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && <NewCommentForm onAddComment={addCommentHandler} />}
            <p>Comments...</p>
        </section>
    );
};

export default Comments;
