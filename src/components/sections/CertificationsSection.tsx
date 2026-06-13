import { motion } from 'framer-motion';
import { fadeIn, viewportOnce } from '@/lib/animations';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { certifications, typeBadge, typeLabel } from '@/data/certifications';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, BookOpen, GraduationCap } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const typeIcon = {
  certification: Award,
  course: BookOpen,
  specialization: GraduationCap,
};

export function CertificationsSection() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="py-20 lg:py-28 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-green/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-blue/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Credentials"
          title="Certifications & Courses"
          description="Validated expertise and continuous learning."
        />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-5">
              {certifications.map((cert) => {
                const Icon = typeIcon[cert.type];
                return (
                  <CarouselItem key={cert.id} className="pl-4 sm:pl-5 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="h-full glass rounded-2xl border border-border/20 hover:border-primary/20 overflow-hidden transition-all duration-300 hover:glow-primary group">
                      {/* Image */}
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.6rem] font-bold border backdrop-blur-sm ${typeBadge[cert.type]}`}>
                            <Icon className="w-3 h-3" />
                            {typeLabel[cert.type]}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="text-[0.6rem] font-bold font-mono-tech text-primary bg-primary/10 backdrop-blur-sm px-2 py-0.5 rounded-full border border-primary/20">
                            {cert.date}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 space-y-3">
                        <h3 className="text-base font-bold tracking-tight font-display group-hover:text-primary transition-colors leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {cert.issuer}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {cert.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="font-mono-tech text-[0.6rem] px-1.5 py-0.5 bg-secondary/40 border border-border/20 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-neon-green transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            View credential
                          </a>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-14 hidden sm:flex border-primary/20 hover:border-primary/40 hover:bg-primary/10" />
            <CarouselNext className="-right-14 hidden sm:flex border-primary/20 hover:border-primary/40 hover:bg-primary/10" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
