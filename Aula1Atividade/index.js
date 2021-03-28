var container = document.getElementById("app")
// var titulo = document.getElementById("h1")
// titulo.innerHTML = "Título inserido por JavaScripto :V"
// container.appendChild(titulo)


var container = document.getElementById("app")

function Contador(props) {

    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero + 1);
        console.log(numero);
    }

    function subtrair() {
        setNumero(numero - 1);
        console.log(numero)
    }


    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Vote no seu preferido!</h1>
            <Contador titulo="Naruto" />
            <Contador titulo="Ben 10" />
            <Contador titulo="BBB" />
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);