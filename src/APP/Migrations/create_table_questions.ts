import { sql } from "../Config/db_config.js"

sql`DROP TABLE IF EXISTS questions`.then(()=>{
  console.log("Tabela excluida.")
});

sql`
CREATE TABLE questions (
    id UUID PRIMARY KEY,                -- Identificador único para cada questão
    title TEXT NOT NULL,                -- O título da questão
    description TEXT,                   -- Descrição ou contexto da questão
    alternative_a TEXT NOT NULL,        -- Alternativa "a"
    alternative_b TEXT NOT NULL,        -- Alternativa "b"
    alternative_c TEXT NOT NULL,        -- Alternativa "c"
    alternative_d TEXT NOT NULL,        -- Alternativa "d"
    correct_alternative CHAR(1) NOT NULL CHECK (correct_alternative IN ('a', 'b', 'c', 'd')), -- A alternativa correta
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data e hora da criação
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Data e hora da última atualização
);
`.then(()=>{
  console.log("Tabela Criada.");
})