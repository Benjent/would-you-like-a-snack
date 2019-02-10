const criteria = {
    // Concept
    CONCEPT: "Concept album",
    STORYLINE: "Storyline",
    SOUNDTRACK: "Soundtrack album",
    LIVE: "Live album",
    
    // Language
    CROATIAN_SUNG: "Croatian sung",
    FRENCH_SUNG: "French sung",
    GERMAN_SUNG: "German sung",
    ITALIAN_SUNG: "Italian sung",
    SPANISH_SUNG: "Spanish sung",
    SWEDISH_SUNG: "Swedish sung",
    ZEUHL: "Zeuhl",
    
    // Theme
    SCI_FI: "Sci-fi-influenced",
    FANTASY: "Fantasy-influenced",
    MEDIEVAL: "Medieval-influenced",
    OCCULT: "Occult",
    SPIRITUAL: "Spiritual",

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
    GLITTER: "Glittering",
    BAROQUE: "Baroque vibes",
    RENAISSANCE: "Renaissance",
    ORIENTAL: "Oriental",
    AMBIENT: "Ambient",

    // Album structure
    LENGTHY_TRACKS: "Lengthy tracks",
    PATCHWORK: "Patchwork of tracks",
    TRANSITION: "Tracks have transitions",
    SYMPHONIC: "Symphonic",

    // Album era-sound
    CRISPY_SIXTIES: "Crispy 60s sound",
    GREASY_SEVENTIES: "Greasy early 70s sound",
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

    // Miscellaneous
    UNCOMMON_INSTRUMENTS: "Uncommon instruments",
    FEMALE: "Female vocals",
    SOUND_COLLAGES: "Uses sound collages",
    ORCHESTRAL_PARTS: "Orchestral parts"
}

// ALWAYS sync above model with below model to sort the VM criteria
const criteriaOrder = [
    // Concept
    criteria.CONCEPT,
    criteria.STORYLINE,
    criteria.SOUNDTRACK,
    criteria.LIVE,
    
    // Language
    criteria.CROATIAN_SUNG,
    criteria.FRENCH_SUNG,
    criteria.GERMAN_SUNG,
    criteria.ITALIAN_SUNG,
    criteria.SPANISH_SUNG,
    criteria.SWEDISH_SUNG,
    criteria.ZEUHL,
    
    // Theme
    criteria.SCI_FI,
    criteria.FANTASY,
    criteria.MEDIEVAL,
    criteria.OCCULT,
    criteria.SPIRITUAL,

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
    criteria.BAROQUE,
    criteria.RENAISSANCE,

    // Album structure
    criteria.LENGTHY_TRACKS,
    criteria.PATCHWORK,
    criteria.TRANSITION,
    criteria.SYMPHONIC,

    // Album era-sound
    criteria.CRISPY_SIXTIES,
    criteria.GREASY_SEVENTIES,
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
    criteria.FEMALE,
    criteria.SOUND_COLLAGES,
    criteria.ORCHESTRAL_PARTS,
]