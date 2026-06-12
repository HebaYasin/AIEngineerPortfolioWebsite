import { motion } from 'framer-motion';
import { fadeIn, viewportOnce } from '@/lib/animations';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { testimonials } from '@/data/testimonials';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-20 lg:py-28 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-purple/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Testimonials"
          title="What People Say"
          description="Feedback from colleagues and collaborators."
        />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative max-w-2xl mx-auto"
        >
          <Carousel
            opts={{ align: 'center', loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.id}>
                  <div className="glass rounded-2xl border border-border/20 p-8 sm:p-10 relative overflow-hidden">
                    <Quote className="w-10 h-10 text-primary/15 absolute top-5 left-5" aria-hidden="true" />
                    <blockquote className="text-lg sm:text-xl text-foreground/90 leading-relaxed pl-4 pt-4 font-light italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-6 pt-6 border-t border-border/20 flex items-center gap-4">
                      <Avatar className="h-11 w-11 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                          {t.authorInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-bold text-foreground">
                          {t.authorName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t.authorTitle}, {t.authorCompany}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-14 hidden sm:flex border-primary/20 hover:border-primary/40 hover:bg-primary/10" />
            <CarouselNext className="-right-14 hidden sm:flex border-primary/20 hover:border-primary/40 hover:bg-primary/10" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
