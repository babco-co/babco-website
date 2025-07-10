import Link from "next/link";
import Header from "@/components/header/header";
import { Spacer } from "@/components/spacer";
import { sanityFetch } from "@/sanity/lib/live";
import { AICONIC } from "@/components/svg/ai-coinc";
import Team from "../(home)/components/team";
import { Metadata } from "next";
import {
  AI_PAGE_HERO_QUERY,
  AI_PAGE_QUERY,
  AI_SERVICES_QUERY,
} from "./queries";
import { AIPage, AIPageHero, AIServiceListItem } from "./types";

// Generate metadata from Sanity
export async function generateMetadata(): Promise<Metadata> {
  try {
    const [pageResponse, heroResponse] = await Promise.all([
      sanityFetch({
        query: AI_PAGE_QUERY,
      }) as Promise<{ data: AIPage | null }>,
      sanityFetch({
        query: AI_PAGE_HERO_QUERY,
      }) as Promise<{ data: AIPageHero | null }>,
    ]);

    const pageData = pageResponse.data;
    const heroData = heroResponse.data;

    // Use page SEO metadata if available, otherwise fallback to hero data
    const metaTitle =
      pageData?.seoMetadata?.metaTitle ||
      `${heroData?.title || "Ai•conic"} | AI Services`;
    const metaDescription =
      pageData?.seoMetadata?.metaDescription ||
      heroData?.subtitle ||
      "We shape AI strategy, optimize workflows, and craft intelligent brand experiences that perform.";

    return {
      title: metaTitle,
      description: metaDescription,
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        type: "website",
        // Add ogImage if available
        images: pageData?.seoMetadata?.ogImage
          ? [
              {
                url: pageData.seoMetadata.ogImage.asset._ref,
                alt: pageData.seoMetadata.ogImage.alt || metaTitle,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: metaTitle,
        description: metaDescription,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);

    // Fallback metadata if Sanity fetch fails
    return {
      title: "AI Services | Ai•conic",
      description:
        "We shape AI strategy, optimize workflows, and craft intelligent brand experiences that perform.",
      openGraph: {
        title: "AI Services | Ai•conic",
        description:
          "We shape AI strategy, optimize workflows, and craft intelligent brand experiences that perform.",
        type: "website",
      },
    };
  }
}

export default async function ServicesPage() {
  const [servicesResponse, heroResponse] = await Promise.all([
    sanityFetch({
      query: AI_SERVICES_QUERY,
    }) as Promise<{ data: AIServiceListItem[] }>,
    sanityFetch({
      query: AI_PAGE_HERO_QUERY,
    }) as Promise<{ data: AIPageHero | null }>,
  ]);

  const services = servicesResponse.data;
  const heroData = heroResponse.data;

  // Fallback hero data if nothing in Sanity
  const hero = heroData || {
    title: "Ai•conic",
    showTrademark: true,
    subtitle:
      "We don't just design AI products—we shape AI strategy, optimize workflows, and craft intelligent brand experiences that perform.",
    sectionTitle: "AI Services",
  };

  return (
    <div className="w-full min-h-screen font-helvetica bg-background-light dark:bg-background-dark">
      <Spacer className="w-full mt-5 px-5">
        <Header />
      </Spacer>

      <Spacer horizontal vertical className="mt-[200px] overflow-hidden">
        {/* Header Section - Now editable via Sanity */}
        <div className="mb-[168px]">
          {hero.showTrademark && (
            <div className="flex flex-row items-center justify-start mb-16">
              <AICONIC className="fill-text-primary-light dark:fill-text-primary-dark" />
              <span className="text-base md:text-xl font-bold align-top mb-4">
                ™
              </span>
              <div
                className="hidden sm:block w-[80px] lg:w-[140px] h-[2px] flex-shrink-0 bg-black/70 dark:bg-white/70"
                style={{ transform: "rotate(-65.363deg)" }}
              />
            </div>
          )}

          <p className="text-3xl font-[200] leading-[42.21px] text-black dark:text-medium-gray max-w-6xl">
            {hero.subtitle}
          </p>
        </div>

        {/* Services Section */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10">
          <h2 className="w-full md:w-1/3 text-xl font-bold leading-[24px] mb-8 text-text-primary-light dark:text-text-primary-dark">
            {hero.sectionTitle}
          </h2>

          <div className="w-full md:w-2/3 space-y-[90px]">
            {services.map((service: AIServiceListItem) => (
              <div key={service._id} className="flex items-start space-x-8">
                {/* Service Number */}
                <div className="flex-shrink-0">
                  <span className="text-[40px] font-bold text-text-primary-light dark:text-text-primary-dark">
                    {service.serviceNumber}
                  </span>
                  <span className="text-[40px] font-[200] text-light-gray dark:text-medium-gray ml-2">
                    /
                  </span>
                </div>

                {/* Service Content */}
                <div className="flex-1">
                  <Link href={`/contact-us`} className="group block">
                    <h3 className="text-4xl font-[200] leading-[35px] mb-3 text-text-primary-light dark:text-text-primary-dark group-hover:text-brand-light dark:group-hover:text-brand-dark transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-lg font-light leading-[25px] text-light-gray dark:text-medium-gray">
                      {service.description}
                    </p>
                  </Link>

                  {/* Features */}
                  {/* {service.features && service.features.length > 0 && (
                    <div className="mt-4">
                      <ul className="text-sm text-light-gray dark:text-medium-gray space-y-1">
                        {service.features.map(
                          (feature: string, index: number) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-brand-light dark:bg-brand-dark rounded-full mr-3"></span>
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Spacer>

      <Spacer className="mx-3 sm:mx-5 border-[0.5px] border-border-primary-light dark:border-border-primary-dark rounded-[10px] bg-white/50 dark:bg-[#0C0C0C]">
        <Team />
      </Spacer>
    </div>
  );
}
