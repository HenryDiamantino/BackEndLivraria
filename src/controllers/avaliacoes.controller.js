import { db } from "../config/db.js"

// ============================
//  Rotas CRUD
// ============================

export async function criarAvaliacao(req, res) {
    try {
        const { nota, comentario } = req.body;
        if (!nota || !comentario)
            return res.status(400).json({ erro: "Campos obrigatórios" });

        await db.execute(
            "INSERT INTO avaliacoes (nota, comentario) VALUES (?, ?)",
            [nota, comentario]
        );

        res.json({ mensagem: "Avaliação criada com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


export async function listaAvaliacao(req, res) {
    try {
        const [rows] = await db.execute("SELECT * FROM avaliacoes");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


export async function obterAvaliacao(req, res) {
    try {
        const [rows] = await db.execute("SELECT * FROM avaliacoes WHERE id = ?", [
            req.params.id,
        ]);
        if (rows.length === 0)
            return res.status(404).json({ erro: "Avaliação não encontrada" });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

export async function atualizarAvaliacao(req, res) {
    try {
        const { nota, comentario } = req.body;
        await db.execute(
            "UPDATE avaliacao SET nota = ?, comentario = ? WHERE id = ?",
            [nota, comentario, req.params.id]
        );
        res.json({ mensagem: "Avaliação atualizada com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


export async function deletarAvaliacao(req, res) {
    try {
        await db.execute("DELETE FROM avalicao WHERE id = ?", [req.params.id]);
        res.json({ mensagem: "Avaliação deletada com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};
