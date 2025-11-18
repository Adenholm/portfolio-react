import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cats = {
  Tiger: {
    name: "Panthera tigris",
    code: "1501705388883-4ed8a543392c",
    desc: "tiger in the water",
  },
  Lion: {
    name: "Panthera leo",
    code: "1519066629447-267fffa62d4b",
    desc: "lion and lioness resting",
  },
  Leopard: {
    name: "Panthera pardus",
    code: "1566489564594-f2163930c034",
    desc: "blue-eyed leopard resting",
  },
  Jaguar: {
    name: "Panthera onca",
    code: "1601544359642-c76c4f7c3221",
    desc: "jaguar closeup",
  },
  SnowLeopard: {
    name: "Panthera uncia",
    code: "1689847190291-f8e0823f13ab",
    desc: "snow leopard lying low",
  },
  Cheetah: {
    name: "Acinonyx jubatus",
    code: "1693702366986-cbfbd1cf0450",
    desc: "cheetah at dusk",
  },
  Cougar: {
    name: "Puma concolor",
    code: "1661004527094-07d861089aed",
    desc: "cougar walking in snow",
  },
};

const items = Object.entries(cats);

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      <div className="relative w-240 h-72">
        {/* STACK OF CARDS */}
        {items.map(([label, data], i) => {
          const isActive = i === index;

          return (
            <AnimatePresence key={i}>
              {isActive && (
                <div className="flex flex-row gap-16 absolute top-0 left-0 w-full h-full">
                  <motion.div
                    key={index}
                    className="w-full h-full"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      y: -40,
                      rotate: Math.random() * 20 - 10,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      zIndex: 100 - i, // stacking effect
                    }}
                  >
                    {/* Image rotates when card exits, but not when entering */}
                    <motion.img
                      src={`https://images.unsplash.com/photo-${data.code}?w=600`}
                      alt={data.desc}
                      className="w-full h-72 object-cover rounded-xl shadow-xl"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                  <motion.div
                  key={index}
                    className="w-full h-full flex flex-col gap-4"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      zIndex: 100 - i, // stacking effect
                    }}>
                    {/* Text stays stable — no rotation */}
                    <h2 className="text-2xl font-bold">{label}</h2>
                    <p className="text-sm opacity-70 italic">{data.name}</p>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          );
        })}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-6">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl"
        >
          ←
        </button>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl"
        >
          →
        </button>
      </div>

      <div className="text-sm opacity-50">
        {index + 1}/{items.length}
      </div>
    </div>
  );
}
