
export default function Model({ id, header, body, footer }) {
    return (
        <div id={id || "Model"} className="model">
            <div style={{ padding: '16px', borderRadius: '8px', width: '500px' }}>

                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>

                    <h2>{header ? header : "this is my header "}</h2>
                </div>
                <div style={{ marginBottom: '8px' }}>

                    <h4>{body ? body : "this is my body "}</h4>
                </div>
                
                <div style={{ fontSize: 'smaller', color: '#555' }}>
                    {footer ? footer : " this is my footer"}
                </div>
            </div>
        </div>
    );
}
