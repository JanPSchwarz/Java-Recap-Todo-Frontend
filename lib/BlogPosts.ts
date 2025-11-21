export type blogPost = {
    title: string;
    subtitle: string;
    content: string;
    author: string;
    date: string;
    image_url: string;
    author_infos: authorInfo;
}

export type authorInfo = {
    name: string;
    age: number;
    location: string;
    background: string;
}

export const blogPosts: Readonly<blogPost[]> = [
    {
        title: "Digital Detox: Warum wir ab und zu offline sein sollten",
        subtitle: "Zurück zur analogen Welt in einer vernetzten Zeit",
        content: "In unserer zunehmend digitalen Welt verbringen viele von uns zu viel Zeit vor Bildschirmen. Das führt zu Stress, Schlafproblemen und Konzentrationsschwierigkeiten. In diesem Beitrag betrachten wir die Vorteile eines regelmäßigen Digital Detox sowie praktische Tipps, wie man bewusste Offline-Zeiten in den Alltag integrieren kann.",
        author: "Lena Meier",
        date: "2025-09-15",
        image_url: "digital-detox.jpg",
        author_infos: {
            name: "Lena Meier",
            age: 32,
            location: "Berlin, Deutschland",
            background: "Journalistin mit Fokus auf digitale Kultur und moderne Lebensstile."
        }
    },
    {
        title: "Nachhaltige Stadtentwicklung: Die Rolle grüner Infrastruktur",
        subtitle: "Wie Städte durch Natur widerstandsfähiger werden",
        content: "Städte wachsen – doch mit dem Wachstum kommen ökologische Herausforderungen. Dieser Artikel beleuchtet, wie grüne Infrastruktur Hitzeinseln reduziert, Biodiversität fördert und das Lebensgefühl der Bürger:innen verbessert.",
        author: "Jonas Schneider",
        date: "2025-08-30",
        image_url: "sustainable-city.jpg",
        author_infos: {
            name: "Jonas Schneider",
            age: 41,
            location: "Hamburg, Deutschland",
            background: "Stadtplaner und Nachhaltigkeitsberater, spezialisiert auf urbane Ökosysteme."
        }
    },
    {
        title: "Künstliche Intelligenz in der Medizin: Chancen und Risiken",
        subtitle: "Wie KI das Gesundheitswesen transformiert",
        content: "KI revolutioniert Diagnostik, Therapie und Verwaltung im Gesundheitssektor. Doch es gibt nicht nur Chancen, sondern auch Risiken wie Bias, ethische Probleme und Datenschutzfragen.",
        author: "Dr. Maria König",
        date: "2025-07-20",
        image_url: "AI.jpg",
        author_infos: {
            name: "Dr. Maria König",
            age: 45,
            location: "München, Deutschland",
            background: "Ärztin und Forscherin im Bereich medizinischer KI-Systeme."
        }
    },
    {
        title: "Remote Work: So bleibt das Teamgefühl trotz Homeoffice stark",
        subtitle: "Strategien für virtuelle Zusammenarbeit",
        content: "Homeoffice ist Alltag geworden – aber wie bleibt das Wir-Gefühl erhalten? Dieser Beitrag gibt Tipps für digitale Zusammenarbeit, Teamrituale und Tools, die Nähe trotz Distanz schaffen.",
        author: "Svenja Huber",
        date: "2025-10-01",
        image_url: "remote-work.jpg",
        author_infos: {
            name: "Svenja Huber",
            age: 29,
            location: "Köln, Deutschland",
            background: "HR-Spezialistin mit Schwerpunkt auf Remote-Kultur und Teamdynamik."
        }
    },
    {
        title: "Achtsamkeit im Alltag: Kleine Rituale mit großer Wirkung",
        subtitle: "Mehr Gelassenheit durch bewusste Pausen",
        content: "Achtsamkeit lässt sich mit kleinen Ritualen leicht in den Alltag integrieren – etwa durch Atemübungen, Spaziergänge oder Dankbarkeitstagebücher. Dieser Artikel gibt Einstiegstipps mit wissenschaftlichem Kontext.",
        author: "Clara Berg",
        date: "2025-09-25",
        image_url: "mindfullness.jpg",
        author_infos: {
            name: "Clara Berg",
            age: 37,
            location: "Stuttgart, Deutschland",
            background: "Psychologin und Autorin mit Fokus auf Achtsamkeit und mentale Gesundheit."
        }
    }
];
