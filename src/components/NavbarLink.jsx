
function NavbarLink({ children }) {
    // non ho bisogno di parentesi tonde dopo return perchè sto scrivendo solo 1 riga di codice

    // il return deve avere solo un elemento di entrata, tutto il contenuto deve essere racchiuso all'interno di un solo
    // elemento HTML root, come ad esempio un <div className="container"> o un <main>
    // ogni tag va chiuso, anche i tag che normalmente sono "autoconclusivi" come ad esempio img, che va chiuso intag es.(<img />)
    // tutti gli attributi interni al tag che venivano scritti con il dash (-) ora andranno scritti in camelCase, per lo stesso
    // discorso per cui class="" diventa className=""

    // react ci mette anche a disposizione i frammenti :
    // i frammenti sono tag vuoti "inesistenti", che servono solo a racchiundere il contenuto di return. 
    // frammenti : <> </>
    return <a href="#">{children}</a>
}

export default NavbarLink;