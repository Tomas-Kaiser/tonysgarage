import { reviews } from "@/lib/site";
import { QuoteIcon, StarIcon } from "./icons";

function ReviewCard({ quote, name }: { quote: string; name: string }) {
  return (
    <figure className="flex w-[20rem] shrink-0 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:w-[24rem]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-brand" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} className="size-4" />
          ))}
        </div>
        <QuoteIcon className="size-8 text-white/10" />
      </div>
      <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-zinc-200">“{quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-brand font-display text-lg font-bold text-white">
          {name[0]}
        </span>
        <span className="font-semibold text-white">{name}</span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const loop = [...reviews, ...reviews];
  return (
    <div className="group relative mt-16 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-5 px-2.5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loop.map((r, i) => (
          <div key={i} aria-hidden={i >= reviews.length} className="flex">
            <ReviewCard {...r} />
          </div>
        ))}
      </div>
    </div>
  );
}
