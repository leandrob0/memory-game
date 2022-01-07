export const Header = ({ currentScore , bestScore }) => {

    return (
        <header>
            <h1>Memory game!</h1>
            <div>
                <p>Current score: {currentScore}</p>
            </div>
        </header>
    )
}