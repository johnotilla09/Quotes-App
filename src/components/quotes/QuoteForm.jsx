import { useRef, useState, Fragment } from "react";
import { Prompt } from "react-router-dom/cjs/react-router-dom.min";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
    const authorInputRef = useRef();
    const textInputRef = useRef();
    const [isEntering, setIsEntering] = useState(false);

    const formFocusHandler = () => {
        setIsEntering(true);
    };

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        if (enteredAuthor === "" || enteredText === "") {
            return;
        }

        props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }

    return (
        <Fragment>
            <Prompt
                when={isEntering}
                message={(location) =>
                    "Are you sure you want to leave? All your entered data will be lost!"
                }
            />

            <Card>
                <form
                    onFocus={formFocusHandler}
                    className={classes.form}
                    onSubmit={submitFormHandler}
                >
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner />
                        </div>
                    )}

                    <div className={classes.control}>
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" ref={authorInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="text">Text</label>
                        <textarea
                            id="text"
                            rows="5"
                            ref={textInputRef}
                        ></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEnteringHandler} className="btn">
                            Add Quote
                        </button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
};

export default QuoteForm;