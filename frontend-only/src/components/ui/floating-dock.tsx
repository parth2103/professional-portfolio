import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href?: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href?: string }[];
  className?: string;
}) => {
  return (
    <div className={cn("block md:hidden", className)}>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="relative group"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 cursor-pointer hover:bg-white/30 transition-all duration-200"
              title={item.title}
            >
              <div className="h-6 w-6 text-white">{item.icon}</div>
            </div>
            {/* Tooltip for mobile */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href?: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 px-4 pb-3 md:flex justify-center",
        className,
      )}
    >
      <AnimatePresence>
        {items.map((item, idx) => {
          let ref = useRef<HTMLDivElement>(null);

          let distance = useTransform(mouseX, (val) => {
            let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

            return val - bounds.x - bounds.width / 2;
          });

          let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
          let heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

          let width = useSpring(widthTransform, {
            mass: 0.1,
            stiffness: 150,
            damping: 12,
          });

          let height = useSpring(heightTransform, {
            mass: 0.1,
            stiffness: 150,
            damping: 12,
          });

          return (
            <motion.div
              ref={ref}
              key={item.title}
              style={{ width, height }}
              className="relative"
            >
              <motion.div
                className="flex h-full w-full items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors cursor-pointer relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={item.title}
              >
                <div className="h-6 w-6">{item.icon}</div>
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                  {item.title}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};
