// Lexica.js
// Détection des prompts d'image + génération via Lexica API

const IMAGE_KEYWORDS = [
    "génère", "générer", "générer une image",
    "image", "crée", "créer", "crée une image",
    "dessine", "dessiner", "dessine moi",
    "génère moi", "fait moi une image"
];

// Détecte si le prompt demande une image
function isImageRequest(prompt) {
    const p = prompt.toLowerCase();
    return IMAGE_KEYWORDS.some(k => p.includes(k));
}

// Génère une image via Lexica API
async function generateImageFromLexica(prompt) {
    try {
        const url = "https://lexica.art/api/v1/search?q=" + encodeURIComponent(prompt);
        const res = await fetch(url);
        const data = await res.json();

        if (data.images && data.images.length > 0) {
            return data.images[0].src; // URL de l'image IA
        } else {
            return null;
        }
    } catch (e) {
        console.error("Erreur Lexica :", e);
        return null;
    }
}
