import { motion } from "framer-motion";
import { SearchBar } from "../ui/SearchBar";

export function Hero() {
  return (
    <section className="relative pt-4 pl-6 sm:pl-8 md:pl-12 pr-2 sm:pr-3 md:pr-4 pb-12 md:pb-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-16 lg:gap-20 items-center px-0 sm:px-4 md:pl-10 md:pr-0">
        {/* CONTENT COLUMN - 6 columns */}
        <div className="md:col-span-6 flex flex-col items-start text-left order-2 md:order-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <h1 className="mb-6 leading-tight">
              <span className="font-script text-foreground/90 text-4xl md:text-5xl lg:text-6xl xl:text-7xl block whitespace-nowrap normal-case mb-1">
                Khám phá
              </span>
              <span className="font-script text-primary text-4xl md:text-5xl lg:text-6xl xl:text-7xl block whitespace-nowrap normal-case leading-[1.1]">
                Cây Cỏ Việt Nam
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-[55ch]">
              Hơn 10.000 loài thực vật qua những trang sách của cố Giáo Sư Phạm
              Hoàng Hộ
            </p>

            <SearchBar className="mt-4" placeholder="Tìm kiếm thực vật..." />
          </motion.div>
        </div>

        {/* IMAGE COLUMN - 6 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
          className="md:col-span-6 relative flex items-center justify-center order-1 md:order-2 min-w-0"
        >
          <img
            src="/images/hero-botanical.png"
            alt="Botanical Hero"
            className="w-full h-auto max-h-[80vh] object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
