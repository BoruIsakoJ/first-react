function Section1() {
    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target.name.value)
        console.log(event.target.age.value)
        event.target.reset()
    }
    return (
        <div id="section1" className="section1">
            <p>Section 1</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" type="text" />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input id="age" name="age" type="number" />
                    </div>
                    <div id="btn-container">
                        <button id="submit" type="submit">Submit</button>
                    </div>

                </form>
            </div>

        </div>
    )
}
export default Section1