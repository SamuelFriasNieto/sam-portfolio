'use client';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        hero: {
            tittle: "Robust backends, <br /> interfaces that fly.",
            description: "I'm Samuel, a Fullstack developer specializing in NodeJS and React, focusing on writing clear code, solving real problems, and making an impact on every project.",
        },
        navBar: {
            about: "About",
            projects: "Projects",
            experience: "Experience",
        },
        projects: {
            coolingRepairERP: {
                title: "CoolingRepair ERP",
                description: "Custom ERP for an air conditioning company",
            },
            projectLink: "See project description",
        },
      },
    },
    es: {
      translation: {
        hero: {
            tittle: "Backends robustos, <br /> interfaces que vuelan.",
            description: "Soy Samuel, un desarrollador Fullstack especializado en NodeJS y React, enfocandome en escribir código claro, resolver problemas reales y aportar impacto en cada proyecto.",
        },
        navBar: {
            about: "Acerca de",
            projects: "Proyectos",
            experience: "Experiencia",
        },
        projects: {
            coolingRepairERP: {
                title: "CoolingRepair ERP",
                description: "ERP a medida para una empresa de aire acondicionado",
            },
            projectLink: "Ver descripción del proyecto",
        },
      },
    },
  },
});

export default i18n;