import "@/assets/styles/main.scss";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import projects from "@/config";
import { circleAnimations } from "@/utils/animations";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import CursorTrailer from "@/components/CursorTrailer";

export const metadata = {
  title: {
    template: "Paul Schade – %s",
    default: "Paul Schade",
  },
  description:
    "Frontend Developer with a focus on creating custom solutions and beautiful designs. Explore my portfolio for a glimpse into my work in blending functionality with aesthetics.",
  creator: "Paul Schade",
  author: "Paul Schade",
  keywords: ["Developer", "Portfolio", "Frontend", "Software Engineering"],
  generator: "Next.js",
  metadataBase: new URL("https://paulscha.de"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "de-DE": "/de",
    },
  },
  openGraph: {
    title: {
      template: "Paul Schade – %s",
    },
    description:
      "Frontend Developer with a focus on creating custom solutions and beautiful designs. Explore my portfolio for a glimpse into my work in blending functionality with aesthetics.",
    url: "https://paulscha.de",
    siteName: "Paul Schade",
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

var circleStyles = {
  "/": {
    color: "rgba(255,137,0,0.75)",
    animation: circleAnimations.circleMoveHome,
  },
  "/works": {
    color: "rgba(255,116,143,0.75)",
    animation: circleAnimations.circleMoveWorks,
  },
  "/about": {
    color: "rgba(98,255,0, 0.5)",
    animation: circleAnimations.circleMoveAbout,
    scale: true,
  },
  "/contact": {
    color: "rgba(10,140,143, 0.75)",
    animation: circleAnimations.circleMoveContact,
  },
  "/music": {
    color: "rgba(10,140,143, 0.75)",
    animation: circleAnimations.circleMoveContact,
  },
};

for (const project of projects.en) {
  circleStyles[`/works/${project.slug}`] = {
    color: project.accentColor,
    animation: {
      xs: project.circleStyle.xs,
      sm: project.circleStyle.xs,
      md: project.circleStyle.xs,
      lg: project.circleStyle.xs,
      xl: project.circleStyle.xl,
      xxl: project.circleStyle.xl,
    },
    scale: true,
  };
}

async function getMessages(locale) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log(error);
    notFound();
  }
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function MainLayout({ children, params }) {
  unstable_setRequestLocale(params.locale);
  const messages = await getMessages(params.locale);

  return (
    <html lang={params.locale}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/hke5bry.css" />
      </head>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <NextTopLoader color="#000000" showSpinner={false} height={3} />
          <div className="layout-default">
            <Header />
            <PageWrapper circleStyles={circleStyles}>{children}</PageWrapper>
            {/* <Footer /> */}
            <CursorTrailer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
