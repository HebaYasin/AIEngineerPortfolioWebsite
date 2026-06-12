export interface FunFact {
  emoji: string;
  text: string;
}

export interface Hobby {
  icon: string;
  label: string;
  detail: string;
}

export interface Preference {
  label: string;
  value: string;
  vibe: string;
}

export const aboutData = {
  name: 'Alex',
  photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
  tagline: 'half engineer, half sleep-deprived gremlin',
  location: 'San Francisco, CA',
  nationality: 'Taiwanese-American',
  personality: 'INTP-T but make it chaotic — I will hyperfixate on a bug for 14 hours straight and then forget to eat lunch',
  currentVibe: 'powered by oat milk lattes and existential curiosity',
  bio: [
    "Yo, I'm Alex. I build AI systems by day and ruin my sleep schedule by night. Originally from Taipei, now in SF arguing with Kubernetes clusters and my cat about who's actually in charge.",
    "When I'm not fine-tuning LLMs or debugging RAG pipelines, you'll find me speedrunning Elden Ring DLCs, making questionable late-night ramen, or going down Wikipedia rabbit holes about deep-sea creatures at 2am.",
    "I genuinely believe the best code is written after your third coffee when the caffeine-induced mania kicks in. My PRs have more meme comments than actual review feedback.",
  ],
  funFacts: [
    { emoji: '☕', text: '4-6 cups of coffee/day is my baseline, not my peak' },
    { emoji: '🐱', text: 'My cat Mimosa has attended more standups than some humans' },
    { emoji: '🎮', text: 'Elden Ring platinum holder — yes I am that person' },
    { emoji: '🍜', text: 'Ramen is a personality trait, not a food group' },
    { emoji: '🌙', text: 'Peak productivity hours: 11pm - 3am' },
    { emoji: '📊', text: 'Have a spreadsheet ranking every boba shop within 10mi' },
  ],
  hobbies: [
    { icon: 'Gamepad2', label: 'Gaming', detail: 'Soulslikes, roguelikes, anything that makes me suffer' },
    { icon: 'UtensilsCrossed', label: 'Cooking', detail: 'Asian fusion experiments at 11pm' },
    { icon: 'BookOpen', label: 'Reading', detail: 'Sci-fi, ML papers (yes, for fun)' },
    { icon: 'Music', label: 'Music', detail: 'Lo-fi beats & synthwave coding playlists' },
    { icon: 'Dumbbell', label: 'Gym', detail: '"I lift things up and put them down"' },
    { icon: 'Plane', label: 'Travel', detail: '14 countries and counting' },
  ],
  preferences: [
    { label: 'Editor', value: 'VS Code', vibe: 'with vim keybinds obviously' },
    { label: 'Theme', value: 'Dark mode', vibe: 'light mode is a crime' },
    { label: 'Drink', value: 'Oat milk latte', vibe: 'basic and proud' },
    { label: 'OS', value: 'macOS + WSL', vibe: 'best of both worlds' },
    { label: 'Music', value: 'Synthwave', vibe: 'drive forever vibes' },
    { label: 'Language', value: 'Python', vibe: 'it just hits different' },
  ],
  currentlyPlaying: 'Hades II (I will not elaborate)',
  currentlyReading: 'Project Hail Mary by Andy Weir',
};
