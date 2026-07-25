/**
 * Zoe's biography, as she supplied it (2026-07-24).
 *
 * Stored verbatim. This replaces the entirely fabricated bio the generated
 * site shipped, which claimed a National Book Critics Circle Award, a
 * PEN/Faulkner Award, an MFA from the University of Washington, and four
 * novels that do not exist.
 *
 * Do not edit her wording without asking. One known editorial question is
 * flagged inline below.
 */

export const BIO: string[] = [
  "Zoe Roberts is known for her love of learning and creating children's self-development books. Born and raised in the suburbs of the Nation's Capital, her writing is influenced by current events, mental and physical well-being, and multicultural themes. Zoe's background in business leadership and people development was influenced by her lifelong passion for learning and self-development.",

  // Supplied as: "When Zoe became a young widow and an instant single mother.
  // She poured her energy into..." — a sentence fragment followed by a full
  // sentence. Kept as written pending Zoe's call on whether to join them.
  "When Zoe became a young widow and an instant single mother. She poured her energy into building a loving and positive home for her son. Zoe's journey through loss made her resilient, and she wanted to share how a growth mindset and traumatic growth could transform anyone. She now shares her passion for hope and potential with others. Her work inspires her readers to embrace challenges, dream big, and believe in themselves.",

  "Through life's challenges and her personal journey, Zoe provides opportunities for others to believe in new horizons. She inspires others, professionally and personally. Zoe approaches each day with a mindset of learning. She understands and acknowledges that our potential is limitless; we just need to be guided by hope and determination.",

  "Now, with her children's book, she is excited to help tweens and teens discover their own strength from within. Her heartfelt approach to writing and empowering lessons will spark confidence and creativity in young readers. Like her son, Zoe wants every child to reach for the stars, no matter the obstacles they face.",

  "When she's not writing, Zoe enjoys nature walks, travel, and spending quality time with her family.",
];

/** Short version for the home page teaser. */
export const BIO_TEASER =
  "Zoe Roberts writes children's self-development books. After becoming a young widow and a single mother, she built her work around a simple conviction: that a growth mindset can change what a child believes is possible for them.";

/**
 * Author portrait. Null until Zoe supplies a real photograph.
 *
 * The generated site used two different fabricated images here: an Unsplash
 * stock photo of an unrelated person, and an AI-generated portrait. Both are
 * gone. Rendering nothing is correct until a real photo exists.
 */
export const PORTRAIT: { src: string; alt: string } | null = null;
