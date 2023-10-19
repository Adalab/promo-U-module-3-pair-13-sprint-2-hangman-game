
const Options = () => {
    return (
        <section className="Options">
            <form>
            <label className="title" htmlFor="word">
                Escribe aquí la palabra que hay que adivinar:
            </label>
            <input
                autoFocus
                autoComplete="off"
                className="form__input"
                maxLength="15"
                type="text"
                id="word"
                name="word"
            />
            </form>
        </section>
    )
}

export default Options;