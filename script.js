/**
 * NEYAB CORPORATION - SCRIPT INTERACTIF
 * Gestion du menu de navigation mobile
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Ciblage des éléments du DOM
    const mobileBtn = document.getElementById('mobile-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Vérification de la présence des éléments pour éviter les erreurs
    if (mobileBtn && mobileMenu) {
        
        // Fonction d'ouverture/fermeture du menu au clic sur le bouton Hamburger
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Changer l'icône de Hamburger (☰) à Croix (✕) selon l'état
            if(mobileMenu.classList.contains('hidden')) {
                mobileBtn.innerHTML = '☰';
                document.body.style.overflow = 'auto'; // Réactiver le scroll du site
            } else {
                mobileBtn.innerHTML = '✕';
                document.body.style.overflow = 'hidden'; // Bloquer le scroll du site en arrière-plan
            }
        });

        // Fermer le menu automatiquement quand on clique sur un des liens
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden'); // On cache le menu
                mobileBtn.innerHTML = '☰'; // On remet l'icône hamburger
                document.body.style.overflow = 'auto'; // On réactive le scroll
            });
        });

    } else {
        console.warn("Neyab Script: Éléments du menu mobile introuvables.");
    }
});