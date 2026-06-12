import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp, popIn, viewportOnce } from '@/lib/animations';
import { aboutData } from '@/data/about';
import { SectionHeader } from '@/components/shared/SectionHeader';
import {
  Gamepad2, UtensilsCrossed, BookOpen, Music, Dumbbell, Plane,
  MapPin, Flag, Coffee, ChevronDown, Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const hobbyIconMap: Record<string, LucideIcon> = {
  Gamepad2, UtensilsCrossed, BookOpen, Music, Dumbbell, Plane,
};

function PlayingCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.button
      onClick={() => setFlipped(!flipped)}
      className="relative w-full h-24 rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      aria-label={flipped ? `Currently reading: ${aboutData.currentlyReading}` : `Currently playing: ${aboutData.currentlyPlaying}`}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl glass border border-neon-purple/20 p-4 flex flex-col items-center justify-center gap-1"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <span className="text-[0.6rem] uppercase tracking-widest text-neon-purple font-bold">Now playing</span>
        <span className="text-sm font-bold text-foreground font-display text-center">{aboutData.currentlyPlaying}</span>
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-2xl glass border border-neon-blue/20 p-4 flex flex-col items-center justify-center gap-1"
        initial={{ rotateY: -180 }}
        animate={{ rotateY: flipped ? 0 : -180 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <span className="text-[0.6rem] uppercase tracking-widest text-neon-blue font-bold">Now reading</span>
        <span className="text-sm font-bold text-foreground font-display text-center">{aboutData.currentlyReading}</span>
      </motion.div>
    </motion.button>
  );
}

export function AboutMeSection() {
  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 lg:py-28 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-neon-green/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="About Me"
          title="Get to Know Me"
          description="The human behind the pull requests."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Photo + quick facts column */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-5">
            {/* Photo card */}
            <div className="glass rounded-2xl border border-border/20 overflow-hidden group">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={aboutData.photo}
                  alt="Alex Chen"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold font-display gradient-text">{aboutData.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5 italic">{aboutData.tagline}</p>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-neon-green" />
                  {aboutData.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Flag className="w-4 h-4 text-neon-purple" />
                  {aboutData.nationality}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Coffee className="w-4 h-4 text-neon-yellow" />
                  {aboutData.currentVibe}
                </div>
              </div>
            </div>

            {/* Now playing / reading flip card */}
            <PlayingCard />
          </motion.div>

          {/* Main content column */}
          <motion.div variants={fadeInUp} className="lg:col-span-8 space-y-5">
            {/* Bio card */}
            <div className="glass rounded-2xl border border-border/20 p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-neon-yellow" />
                <span className="text-xs font-bold uppercase tracking-widest text-neon-yellow">The lore</span>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {/* Always show first paragraph */}
                <p>{aboutData.bio[0]}</p>
                {/* Expandable remaining paragraphs */}
                <AnimatePresence>
                  {bioExpanded && aboutData.bio.slice(1).map((para, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {para}
                    </motion.p>
                  ))}
                </AnimatePresence>
              </div>
              <button
                onClick={() => setBioExpanded(!bioExpanded)}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-neon-purple transition-colors"
                aria-expanded={bioExpanded}
              >
                {bioExpanded ? 'less lore' : 'more lore'}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${bioExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Fun facts */}
            <div className="glass rounded-2xl border border-border/20 p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-neon-pink">fun facts(tm)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutData.funFacts.map((fact, i) => (
                  <motion.div
                    key={i}
                    variants={popIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30 border border-border/10 hover:border-primary/15 transition-colors"
                  >
                    <span className="text-lg shrink-0">{fact.emoji}</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hobbies + Preferences row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Hobbies */}
              <div className="glass rounded-2xl border border-border/20 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-neon-green">outside terminal</span>
                </div>
                <div className="space-y-2.5">
                  {aboutData.hobbies.map((hobby) => {
                    const Icon = hobbyIconMap[hobby.icon] ?? Sparkles;
                    return (
                      <div key={hobby.label} className="flex items-center gap-3 group">
                        <span className="w-8 h-8 rounded-lg bg-neon-green/10 border border-neon-green/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4 text-neon-green" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{hobby.label}</p>
                          <p className="text-xs text-muted-foreground">{hobby.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Preferences */}
              <div className="glass rounded-2xl border border-border/20 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-neon-blue">.env config</span>
                </div>
                <div className="space-y-2.5">
                  {aboutData.preferences.map((pref) => (
                    <div key={pref.label} className="flex items-center justify-between gap-2 p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
                      <span className="text-xs font-mono-tech text-muted-foreground uppercase">{pref.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">{pref.value}</span>
                        <span className="text-[0.6rem] text-muted-foreground italic hidden sm:inline">{pref.vibe}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
