async function askAI(prompt) {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-7B-Instruct",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer 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"
                },
                body: JSON.stringify({ inputs: prompt })
            }
        );

        const data = await response.json();

        if (data && data[0] && data[0].generated_text) {
            return data[0].generated_text;
        }

        return "Je n'ai pas compris la question.";
    } catch (e) {
        console.error("Erreur API :", e);
        return "Erreur lors de la communication avec l'IA.";
    }
}
