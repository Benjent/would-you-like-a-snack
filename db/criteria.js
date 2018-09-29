const criteria = {
    // Concept
    CONCEPT: "Concept album",
    STORYLINE: "Storyline",
    SOUNDTRACK: "Soundtrack album",
    LIVE: "Live album",
    
    // Language
    FRENCH_SUNG: "French sung",
    ITALIAN_SUNG: "Italian sung",
    SPANISH_SUNG: "Spanish sung",
    SWEDISH_SUNG: "Swedish sung",
    ZEUHL: "Zeuhl",
    
    // Theme
    SCI_FI: "Sci-fi touch",
    FANTASY: "Fantasy touch",
    MEDIEVAL: "Medieval touch",
    OCCULT: "Occult",

    // Genre-based
    ROCK: "Rock-based with a Prog touch",
    JAZZ: "Jazz-based with a Prog touch",
    FOLK: "Folk-based with a Prog touch",
    ELECTRO: "Electro-based with a Prog touch",
    ART_POP: "Art Pop",

    // Genre borrowing
    BLENDS: "Blends many music genres",
    C_JAZZ: "Contains Jazz elements",
    C_FOLK: "Contains Folk elements",
    C_ELECTRO: "Contains electronic elements",
    C_PSYCHEDELIC: "Contains psychedelic elements",

    // Musically
    ODD_RHYTHM: "Odd rhythm signatures",
    TECHNICAL: "Technical",
    INSTRUMENTAL: "Mainly instrumental",
    EXPERIMENTAL: "Experimental",
    JAM: "Jam-oriented",
    SOPHISTICATED: "Sophisticated",

    // Style
    JAZZY_GROOVY: "Jazzy groovy",
    ROCK_OPERA: "Rock opera",
    FANFARE: "Fanfare",
    SPACY: "Spacy",
    GLITTER: "Star-symphonic",

    // Album structure
    LENGHTY_TRACKS: "Lengthy tracks",
    PATCHWORK: "Patchwork of tracks",
    TRANSITION: "Tracks have transitions",
    SYMPHONIC: "Symphonic",

    // Album era-sound
    CRISPY_SIXTIES: "Crispy 60s sound",
    SOFT_SEVENTIES: "Soft late 70s sound",
    NEO_EIGHTIES: "Neo 80s sound",

    // Album loudness
    SOFT: "Rather soft",
    HEAVY: "Rather heavy",
    HUMBLE: "Humble",
    SPECTACULAR: "Spectacular",

    // Temperature
    FUNNY: "Funny",
    TOUCHING_VOCALS: "Touching vocals",
    ORIENTAL: "Oriental",
    AMBIENT: "Ambient",

    // Miscellaneous
    UNCOMMON_INSTRUMENTS: "Uncommon instruments",
    SOUND_COLLAGES: "Uses sound collages",
    ORCHESTRAL_PARTS: "Orchestral parts",
    BAROQUE: "Baroque vibes"
}

// ALWAYS sync above model with below model to sort the VM criteria
const criteriaOrder = [
    // Concept
    criteria.CONCEPT,
    criteria.STORYLINE,
    criteria.SOUNDTRACK,
    criteria.LIVE,
    
    // Language
    criteria.FRENCH_SUNG,
    criteria.ITALIAN_SUNG,
    criteria.SPANISH_SUNG,
    criteria.SWEDISH_SUNG,
    criteria.ZEUHL,
    
    // Theme
    criteria.SCI_FI,
    criteria.FANTASY,
    criteria.MEDIEVAL,
    criteria.OCCULT,

    // Genre-based
    criteria.ROCK,
    criteria.JAZZ,
    criteria.FOLK,
    criteria.ELECTRO,
    criteria.ART_POP,

    // Genre borrowing
    criteria.BLENDS,
    criteria.C_JAZZ,
    criteria.C_FOLK,
    criteria.C_ELECTRO,
    criteria.C_PSYCHEDELIC,

    // Musically
    criteria.ODD_RHYTHM,
    criteria.TECHNICAL,
    criteria.INSTRUMENTAL,
    criteria.EXPERIMENTAL,
    criteria.JAM,
    criteria.SOPHISTICATED,

    // Style
    criteria.JAZZY_GROOVY,
    criteria.ROCK_OPERA,
    criteria.FANFARE,
    criteria.SPACY,
    criteria.GLITTER,
    criteria.ORIENTAL,
    criteria.AMBIENT,

    // Album structure
    criteria.LENGHTY_TRACKS,
    criteria.PATCHWORK,
    criteria.TRANSITION,
    criteria.SYMPHONIC,

    // Album era-sound
    criteria.CRISPY_SIXTIES,
    criteria.SOFT_SEVENTIES,
    criteria.NEO_EIGHTIES,

    // Album loudness
    criteria.SOFT,
    criteria.HEAVY,
    criteria.HUMBLE,
    criteria.SPECTACULAR,

    // Temperature
    criteria.FUNNY,
    criteria.TOUCHING_VOCALS,

    // Miscellaneous
    criteria.UNCOMMON_INSTRUMENTS,
    criteria.SOUND_COLLAGES,
    criteria.ORCHESTRAL_PARTS,
    criteria.BAROQUE
]