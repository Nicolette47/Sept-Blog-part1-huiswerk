import React from 'react';
import './NewPost.css';

function NewPost() {

    const [formState, setFormState] = React.useState ({
        title: '',
        subtitle: '',
        name: '',
        blogpost: ''
    });

    function handleChange(e) {
        const changedField = e.target.name;
        setFormState ({
            ...formState,
            [changedField]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Formulier data:");
        for (const [key, value] of Object.entries(formState)) {
            console.log(`${key}: ${value}`);
        }
        console.log()
        console.log("readTime: 34min")
        console.log("comments: 0")
        console.log("shares: 0")
    }

    return (
        <>
            <div className="blogpost-container">
                <h1>Post toevoegen</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title-field">Title</label>
                    <input
                        type="text"
                        id="title-field"
                        name="title"
                        value={formState.title}
                        onChange={handleChange}
                        required />

                    <label htmlFor="subtitle-field">Subtitle</label>
                    <input
                        type="text"
                        id="subtitle-field"
                        name="subtitle"
                        value={formState.subtitle}
                        onChange={handleChange}
                        required/>

                    <label htmlFor="name-field">Naam en Achternaam</label>
                    <input
                        type="text"
                        id="name-field"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required/>

                    <label htmlFor="blogpost-field">Blogpost</label>
                    <textarea
                        id="blogpost-field"
                        name="blogpost"
                        rows="10"
                        cols="100"
                        minLength="300"
                        maxLength="2000"
                        placeholder="Plaats hier je blog. Eisen: minimaal 300 - maximaal 2000 karakters"
                        value={formState.blogpost}
                        onChange={handleChange}
                        required></textarea>

                    <button
                        type="submit">
                        Toevoegen
                    </button>
                </form>
            </div>
        </>
    );
}

export default NewPost;