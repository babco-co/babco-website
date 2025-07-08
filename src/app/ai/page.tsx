import Header from "@/components/header/header";
import { Spacer } from "@/components/spacer";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/images/Ai·conic.svg";

export interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

export interface SanitySlug {
  current: string;
  _type: string;
}

export interface SanityBlock {
  _type: string;
  _key: string;
  children: Array<{
    _type: string;
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
  }>;
  style?: string;
  listItem?: string;
  level?: number;
}

export interface AIService {
  _id: string;
  title: string;
  slug: SanitySlug;
  serviceNumber: string;
  description: string;
  fullDescription?: SanityBlock[];
  features?: string[];
  icon?: SanityImage;
  isActive: boolean;
  order: number;
  metadata?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export interface AIServiceDetailed extends AIService {
  fullDescription: SanityBlock[];
  metadata: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export type AIServiceListItem = Pick<
  AIService,
  | "_id"
  | "title"
  | "slug"
  | "serviceNumber"
  | "description"
  | "features"
  | "icon"
  | "order"
>;

export const AI_SERVICES_QUERY = defineQuery(`*[
  _type == "aiService" 
  && isActive == true
] | order(order asc) {
  _id,
  title,
  slug,
  serviceNumber,
  description,
  features,
  icon,
  order
}`);

export default async function ServicesPage() {
  const { data: services } = (await sanityFetch({
    query: AI_SERVICES_QUERY,
  })) as { data: AIServiceListItem[] };

  return (
    <div className="w-full min-h-screen font-helvetica bg-background-light dark:bg-background-dark">
      <Spacer className="w-full mt-5 px-5">
        <Header />
      </Spacer>

      <Spacer horizontal className="mt-[200px] overflow-hidden">
        {/* Header Section */}
        <div className="mb-[168px]">
          <div className="flex flex-row items-center justify-start mb-16">
            <Image src={logo} alt="logo" />
            <span className="text-base md:text-xl font-bold align-top mb-4">™</span>
            <div
              className="hidden sm:block w-[80px] lg:w-[140px] h-[2px] flex-shrink-0 bg-black/70 dark:bg-white/70"
              style={{ transform: "rotate(-65.363deg)" }}
            />
          </div>

          <p className="text-3xl font-[200] leading-[42.21px] text-black dark:text-medium-gray max-w-6xl">
            We don&apos;t just design AI products—we shape AI strategy, optimize
            workflows, and craft intelligent brand experiences that perform.
          </p>
        </div>

        {/* Services Section */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10">
          <h2 className="w-full md:w-1/3 text-xl font-bold leading-[24px] mb-8 text-text-primary-light dark:text-text-primary-dark">
            AI Services
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
                  <Link
                    href={`/services/${service.slug.current}`}
                    className="group block"
                  >
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
    </div>
  );
}
