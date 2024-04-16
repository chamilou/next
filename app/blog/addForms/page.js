
import ImagePicker from "@/componenets/ui/imagePicker";
import classes from "@/app/blog/blog.pages.module.css"
import { getData } from "@/lib/actions";
import FormSubmissionBut from "@/componenets/posts/form-submition";

export default function AddForms() {

    return (
        <>
            <main className={classes.main}>
                <div className={classes.formWrapper}>

                    <form action={getData} className={classes.form}>

                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required className={classes.input} />
                        <label htmlFor="summary">Summary</label>
                        <input type="text" id="summary" name="summary"className={classes.input} />

                        <label htmlFor="instructions">Instructions</label>
                        <input type="text" id="instrictions" name="instructions" className={classes.input}/>
                        <label htmlFor="creator">Creator</label>
                        <input type="text" name="creator" id="creator" className={classes.input}/>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className={classes.input} />
                        <ImagePicker label="your Image" name="image"></ImagePicker>
                        <p className={classes.button_p}>

                        <FormSubmissionBut/>
                        </p>
                        {/* <button type="submit" className={classes.button}>Submit</button> */}
                    </form >
                </div>
            </main>

        </>

    )
}