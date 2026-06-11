import { motion } from 'framer-motion';
import { fadeIn, viewportOnce } from '@/lib/animations';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { testimonials } from '@/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
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
    <section aria-labelledby="testimonials-heading" className="py-16 lg:py-20 bg-[hsl(220,18%,6%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Card className="bg-card border-border/50">
                    <CardContent className="p-6 sm:p-8 relative">
                      <Quote className="w-8 h-8 text-primary/20 absolute top-4 left-4" aria-hidden="true" />
                      <blockquote className="text-base sm:text-lg text-foreground/90 leading-relaxed italic pl-6 pt-2">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <Separator className="my-4 bg-border/30" />
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-muted text-muted-foreground text-xs font-semibold">
                            {t.authorInitials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {t.authorName}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t.authorTitle}, {t.authorCompany}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-14 hidden sm:flex" />
            <CarouselNext className="-right-14 hidden sm:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
