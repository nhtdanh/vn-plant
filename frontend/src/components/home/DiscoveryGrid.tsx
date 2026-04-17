import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryGroup } from "../../utils/taxon.utils";

interface DiscoveryCardProps {
  category: string;
  image: string;
  className?: string;
  aspectClassName?: string;
  href?: string;
}

function DiscoveryCard({
  category,
  image,
  className,
  aspectClassName = "aspect-[4/5]",
  href = "/browse",
}: DiscoveryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <motion.div
      className={`group relative overflow-hidden bg-muted cursor-pointer ${aspectClassName} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt={category}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
        animate={{
          filter: isHovered ? "brightness(0.85)" : "brightness(1)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Gradient Overlay - Hidden by default, appears on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        animate={{ opacity: isHovered ? 0.95 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Text Overlay - Center, appears on hover */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[24px] md:text-[28px] font-sans font-bold uppercase tracking-[0.2em] text-white/95 text-center leading-tight">
          {category}
        </span>
      </motion.div>
    </motion.div>
  );

  return <Link to={href}>{content}</Link>;
}

export function DiscoveryGrid() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const cards = [
    {
      displayName: "DƯƠNG XỈ",
      categoryName: "Dương xỉ",
      image: "/images/discovery-fern.png",
    },
    {
      displayName: "HẠT TRẦN",
      categoryName: "Hạt trần",
      image: "/images/discovery-gymnosperm.png",
    },
    {
      displayName: "HẠT KÍN",
      categoryName: "Hạt kín",
      image: "/images/discovery-angiosperm.png",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="max-w-[1440px] mx-auto px-4 md:px-0">
        {/* BUTTON SECTION */}
        <div className="flex justify-end mb-8">
          <Link to="/browse">
            <motion.button
              className="flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-widest text-primary relative"
              onHoverStart={() => setIsButtonHovered(true)}
              onHoverEnd={() => setIsButtonHovered(false)}
            >
              <motion.span
                animate={{
                  opacity: isButtonHovered ? 1 : 0,
                  marginRight: isButtonHovered ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={14} />
              </motion.span>

              <motion.span
                animate={{ x: isButtonHovered ? 8 : 0 }}
                transition={{ duration: 0.3 }}
              >
                Xem tất cả
              </motion.span>

              <motion.span
                animate={{
                  opacity: isButtonHovered ? 0 : 1,
                  marginLeft: isButtonHovered ? -20 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={14} />
              </motion.span>
            </motion.button>
          </Link>
        </div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {cards.map((card) => {
            const group = getCategoryGroup(card.categoryName);
            const href = group ? `/browse?groups=${group}` : "/browse";

            return (
              <DiscoveryCard
                key={card.categoryName}
                category={card.displayName}
                image={card.image}
                href={href}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
