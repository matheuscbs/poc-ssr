import Section from "./components/section";
import React, { useState } from "react";

const App = () => {
    const [show, setShow] = useState<boolean>(true);
    return (
        <>
        {show && (
            <Section 
                title="CONSULTA SIMPLES" 
                subtitle="INFORMAÇÕES AGREGADAS DO CPF OU CNPJ" 
                description="Registro encontrado, status na receita REGULAR, total em dívida pública R$ 0, sem cheques devolvidos, sem protestos"
                onClose={() => setShow(false)}
            >
                Conteúdo
            </Section>
        )}
        </>
    )
}

export default App;
