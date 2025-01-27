import React from "react";

interface QuarterComponentProps {
    numSegments: number; // Nombre de quartiers
    labels: string[]; // Tableau de légendes
    radius?: number; // Rayon du cercle (optionnel)
}

const QuarterComponent: React.FC<QuarterComponentProps> = ({
                                                               numSegments,
                                                               labels,
                                                               radius = 150, // Rayon par défaut augmenté
                                                           }) => {
    const center = radius + 50; // Calcul dynamique pour centrer correctement
    const arrowLength = 60; // Longueur des flèches au-delà du cercle

    if (labels.length !== numSegments) {
        console.error("Le nombre de labels doit correspondre au nombre de segments.");
        return null;
    }

    // Fonction pour générer les segments
    const generateSegments = () => {
        const angleStep = (2 * Math.PI) / numSegments;
        const segments = [];

        for (let i = 0; i < numSegments; i++) {
            const startAngle = i * angleStep;
            const endAngle = (i + 1) * angleStep;

            const startX = center + radius * Math.cos(startAngle);
            const startY = center + radius * Math.sin(startAngle);
            const endX = center + radius * Math.cos(endAngle);
            const endY = center + radius * Math.sin(endAngle);

            const pathData = `
        M ${center} ${center}
        L ${startX} ${startY}
        A ${radius} ${radius} 0 0 1 ${endX} ${endY}
        Z
      `;

            segments.push(
                <path
                    key={i}
                    d={pathData}
                    fill={`hsl(${(i * 360) / numSegments}, 70%, 50%)`}
                    stroke="white"
                    strokeWidth="1"
                />
            );
        }

        return segments;
    };

    // Fonction pour générer les flèches et les légendes
    const generateArrowsAndLabels = () => {
        const angleStep = (2 * Math.PI) / numSegments;
        const elements = [];

        for (let i = 0; i < numSegments; i++) {
            const angle = i * angleStep - angleStep / 2; // Centrer la flèche pour chaque segment

            // Coordonnées à l'extérieur du cercle
            const outerX = center + (radius + arrowLength) * Math.cos(angle);
            const outerY = center + (radius + arrowLength) * Math.sin(angle);

            // Coordonnées sur le cercle
            const baseX = center + radius * Math.cos(angle);
            const baseY = center + radius * Math.sin(angle);

            // Légende positionnée juste après la flèche
            const labelX = center + (radius + arrowLength + 20) * Math.cos(angle);
            const labelY = center + (radius + arrowLength + 20) * Math.sin(angle);

            // Détecter si le label doit être aligné à gauche, droite ou centré
            const textAnchor =
                Math.cos(angle) > 0.5
                    ? "start"
                    : Math.cos(angle) < -0.5
                        ? "end"
                        : "middle";

            const alignmentBaseline =
                Math.sin(angle) > 0.5
                    ? "hanging"
                    : Math.sin(angle) < -0.5
                        ? "baseline"
                        : "middle";

            // Ajouter la flèche
            elements.push(
                <line
                    key={`arrow-${i}`}
                    x1={baseX}
                    y1={baseY}
                    x2={outerX}
                    y2={outerY}
                    stroke="white"
                    strokeWidth="2"
                />
            );

            // Ajouter la légende
            elements.push(
                <text
                    key={`label-${i}`}
                    x={labelX}
                    y={labelY}
                    fill="white"
                    fontSize="14"
                    textAnchor={textAnchor}
                    alignmentBaseline={alignmentBaseline}
                >
                    {labels[i]}
                </text>
            );
        }

        return elements;
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#1c1c1e",
            }}
        >
            <svg width={center * 2} height={center * 2}>
                {generateSegments()}
                {generateArrowsAndLabels()}
            </svg>
        </div>
    );
};

export default QuarterComponent;