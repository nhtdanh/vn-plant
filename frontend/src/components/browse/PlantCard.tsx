import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import type { Taxon } from "../../types";
import {
  getRankDisplayName,
  getRankBadgeColor,
  capitalize,
} from "../../utils/taxon.utils";
import { Badge } from "../ui/badge";

interface PlantCardProps {
  plant: Taxon;
}

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <Link 
      to={`/plant/${plant.slug}`}
      onClick={() => {
        sessionStorage.setItem('browse-returning', 'true');
        sessionStorage.setItem('browse-scroll-position', window.scrollY.toString());
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden border-2 border-foreground/10 bg-background hover:border-black/50 transition-colors duration-300 h-full flex flex-col cursor-pointer"
      >
        {/* IMAGE CONTAINER */}
        <div className="relative aspect-square bg-foreground/5 overflow-hidden">
          {plant.primaryImageUrl ? (
            <motion.img
              src={plant.primaryImageUrl}
              alt={plant.canonicalName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <Leaf className="w-10 h-10 text-muted-foreground/30" />
            </div>
          )}

          {/* RANK BADGE - TOP LEFT CORNER */}
          <div className="absolute top-3 left-3">
            {(() => {
              const { bg, text } = getRankBadgeColor(plant.rank);
              return (
                <Badge
                  variant="default"
                  className={`${bg} ${text} text-xs font-semibold border border-black/10`}
                >
                  {getRankDisplayName(plant.rank).toUpperCase()}
                </Badge>
              );
            })()}
          </div>

          {/* OVERLAY ON HOVER */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <span className="text-white text-sm font-medium">Xem chi tiết</span>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col items-center">
          {/* CANONICAL/VIETNAMESE NAME */}
          <h3 className="font-medium text-foreground text-sm md:text-[15px] leading-tight line-clamp-1 text-center">
            {capitalize(
              (plant.vietnameseName || plant.canonicalName).toLowerCase(),
            )}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}
