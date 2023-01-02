export function home() {
    let number = 0;

    function add() {
        number++;
        console.log(number);
    }

    const btn = document.getElementById("botao") as HTMLButtonElement;
    btn.addEventListener("click", add);

    const h1 = document.getElementById("number") as HTMLElement;

    return (
        <div>
            <h1>{number}</h1>
            <button className="button" onClick={add}>
                add button{" "}
            </button>
        </div>
    );
}
