// Define the annotation platform link
const annotation_platform = "http://argument-mining-annotation.i3s.unice.fr/projects";

// Set href for all elements with class 'annotation_platform-link'
document.querySelectorAll('.annotation_platform-link').forEach(link => {
    link.href = annotation_platform;
});