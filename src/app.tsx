import Section from "@components/section";
import React, { useState } from "react";

const App = () => {
  const [showSection, setShowSection] = useState(true);

  const sectionDescription =
    "Registro encontrado, status na receita REGULAR, total em dívida pública R$ 0, sem cheques devolvidos, sem protestos";

  if (!showSection) return null;

  return (
    <Section
      title="CONSULTA SIMPLES"
      subtitle="INFORMAÇÕES AGREGADAS DO CPF OU CNPJ"
      description={sectionDescription}
      onClose={() => setShowSection(false)}
    >
      Conteúdo
    </Section>
  );
};

export default App;
