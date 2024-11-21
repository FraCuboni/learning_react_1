// importo css
import "./Navbar.css";

import NavbarLink from "./NavbarLink";

function Navbar() {

    const value = 420;

    const img = "vite";

    return (
        <>
            <ul>
                <li><NavbarLink>Queste sono props basiche</NavbarLink></li>
                <li><NavbarLink>Valore da costante: {value}</NavbarLink></li>
                <li><NavbarLink>il valore può anche essere modificato inline {value + 6}</NavbarLink></li>
                <li><NavbarLink>si può anche usare il ternario: value = {value > 100 ? 'sopra i 100' : 'sotto i 100'}</NavbarLink></li>
                <li><NavbarLink>valore in fixed {value.toFixed(1)}</NavbarLink></li>
            </ul>

            <img style={{ height: "100px", }} src={`/${img}.svg`} alt="" />
            <p>si puo usare anche come src delle immagini, anche con il template literal</p>
            <p>lo style inline utilizza come sintassi quella degli oggetti e dovranno essere utilizzate 2 parentesi graffe</p>
        </>
    )
}

export default Navbar;