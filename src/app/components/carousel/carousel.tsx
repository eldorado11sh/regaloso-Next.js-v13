'use client'
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React,  { PropsWithChildren, useEffect, useState } from "react";
import PrevControl from "./prevControl";
import NextControl from "./nextControl";
import Dots from "./dots";

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
      <PrevControl canScrollPrev={canScrollPrev} onPrev={() => emblaApi?.scrollPrev()} />
      <NextControl canScrollNext={canScrollNext} onNext={() => emblaApi?.scrollNext()} />
    </>
  );
};
export default Carousel;
