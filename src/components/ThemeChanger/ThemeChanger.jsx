import UseLocalStorage from "./UseLocalStorage"
import '../ThemeChanger/style.css'

export default function ThemeChanger(){

    const [theme ,setTheme] = UseLocalStorage("theme","dark");

    function toggleTheme(){
        setTheme(theme==="light"? "dark":"light")

        console.log(theme)
    }
    return(
        <div  className="light-dark-mode"  flag = {theme}>
            <div className="container">
                <p>HOLA AMIGO</p>
                <button onClick={()=>toggleTheme()}>Change Theme</button>
            </div>
        </div>
    )
}














