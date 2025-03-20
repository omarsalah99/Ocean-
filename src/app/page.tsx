import Button from "@/Component/Button";
import FeatureCard from "@/Component/FeatureCard";
import Heading from "@/Component/Heading";
import { clients } from "@/constants/Clients";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { features, featuresBlock } from "@/constants/Featuers";
import FeatureBlock from "@/Component/FeatureBlock";
import PricingSection from "@/Component/PricingSection";
import { testimonials } from "@/constants/Testimonials";
import TestimonialCard from "@/Component/TestimonialsCard";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased flex items-center justify-center">
      <div className="relative container">
        <Image
          src="/bg.png"
          alt="Background"
          width={1920}
          height={1080}
          className="absolute -z-50 -top-20 left-0 opacity-10 w-full min-h-screen md:max-h-[670px] md:h-full lg:min-h-screen  "
        />
        {/* Home Section */}
        <section className="relative" id="home">
          <figure className="bubble w-96 h-96 lg:w-[520px] bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 h-96 lg:w-[430px] bg-sky-600 bottom-16 md:bottom-44 -right-20 md:right-20" />
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col justify-center items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">
                new features is now availabel.
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p>
              <Heading title="A CRM dashboard for engineering teams" />
              <p className="max-w-[46rem] leading-none sm:text-lg sm:leading-8  ">
                Boost engineering team&rsquo;s productivity with Ocean CRM
                dashboard that streamlines project management, collaboration,
                and data-driven decision-making.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button>
                  get started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="#pricing">
                  <Button variant="outline">view pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/Hero-image.svg"
              width={670}
              height={370}
              alt="banner"
              className="mx-auto shadow-xl"
            />
          </div>
        </section>
        {/* Home Section */}
        {/* Clients Section */}
        <section
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
          id="clients"
        >
          {clients.map((client, index) => (
            <Image
              src={client.imageUrl}
              width={100}
              height={100}
              alt={client.alt}
              className="mx-auto w-20 md:w-full"
              key={index}
            />
          ))}
        </section>
        {/* Clients Section */}
        {/* Featuers Section */}
        <section
          id="features"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28"
        >
          {/* Part 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src="/bg2.png"
              width={1920}
              height={1080}
              alt="second banner"
              className="absolute -z-50 w-[1400px] h-[670px] top-0 left-0 opacity-5"
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Powerful features to help you manage all your leads." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Apsum dolor sit amet consectetur. Aliquam elementum elementum in
                ultrices. Dui maecenas ut eros turpis ultrices metus morbi
                aliquet vel.
              </p>
              <Button>get started</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((item, index) => (
                <FeatureCard key={index} {...item} />
              ))}
            </div>
          </div>
          {/* Part 1 */}
          {/* Part 2 */}
          {featuresBlock.map((item, index) => (
            <FeatureBlock key={index} {...item} />
          ))}
          {/* Part 2 */}
        </section>
        {/* Featuers Section */}
        {/* Pricing Section */}
        <PricingSection />
        {/* Pricing Section */}
        {/* Testimonial Section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet our Customers" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>
        {/* Testimonial Section */}
        {/* Content Section */}
        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Let’s try our service now!" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Experience the power of Ocean CRM dashboard for engineering
                teams. Boost productivity and streamline collaboration. Get
                started today!
              </p>
            </div>
            <Button>
              get started
              <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
        {/* Content Section */}
      </div>
    </main>
  );
}
