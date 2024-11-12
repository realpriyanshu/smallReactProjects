export default function Model( { id ,header , body, footer} ){
    return(<div id={id || "Model"} className="model">
        <div className="content">
            <div className="header">
                {header?header:<div>this is my header</div>}
            </div>
            <div className="body">
                {body ? body:<div>this is my body</div>}
            </div>
            <div className="footer">
                {footer?footer:"this is my footer"}
            </div>
        </div>
        
    </div>)
}