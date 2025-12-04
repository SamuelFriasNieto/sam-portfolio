'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CometCard } from "@/components/ui/comet-card";
import React, { use } from "react";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrls: string[];
  projectLink: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrls,
  projectLink,
}: ProjectCardProps) => {
  const autoplay = Autoplay({ delay: 2000 });

  const {t} = useTranslation();

  return (
    <div className="z-10">
      <CometCard rotateDepth={5} translateDepth={2} className="w-fit  ">
        <Carousel
          plugins={[autoplay]}
          opts={{ loop: true }}
          className="w-[800px]"
        >
          <CarouselContent>
            {imageUrls.map((url, index) => {
                return (
                  <CarouselItem key={index}>
                    <div className="relative w-[800px] h-[400px] rounded-t-2xl overflow-hidden">
                      <Image
                        src={url}
                        alt={`Project Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                );
            })}
          </CarouselContent>
        </Carousel>

        <div className="px-10 py-5 z-10 bg-card/30 rounded-b-2xl">
          <p className="font-bold text-xl mb-1">{title}</p>
          <p className="text-md">{description}</p>
        </div>
      </CometCard>
      <p className="text-end w-full text-muted-foreground transition-transform hover:scale-105 cursor-pointer hover:translate-x-2 mt-10">
        {t('projects.projectLink')}{" "}
        <MdOutlineKeyboardDoubleArrowRight size={20} className="inline-block" />
      </p>
    </div>
  );
};

export default ProjectCard;
