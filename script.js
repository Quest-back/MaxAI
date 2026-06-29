document.getElementById("btn").addEventListener("click", async () => {
    const prompt = document.getElementById("prompt").value;

    // 1) Si demande d'image → Lexica
    if (isImageRequest(prompt)) {
        const img = await generateImageFromLexica(prompt);

        if (img) {
            document.getElementById("result").innerHTML =
                `<img src="${img}" style="max-width:400px;border-radius:12px;box-shadow:0 0 12px #8a2be2;">`;
        } else {
            document.getElementById("result").textContent =
                "Impossible de générer une image.";
        }

        return;
    }

    // 2) Sinon → IA texte via API
    const answer = await askAI(prompt);
    document.getElementById("result").textContent = answer;
});
