import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import JobListings from "@/components/home/JobListings";
import SuccessStories from "@/components/home/SuccessStories";
import VideoTestimonials from "@/components/home/VideoTestimonials";
import HowItWorks from "@/components/home/HowItWorks";
import SocialProofCounters from "@/components/home/SocialProofCounters";
import SubmitTestimonial from "@/components/home/SubmitTestimonial";
import Newsletter from "@/components/home/Newsletter";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofCounters />
        <HowItWorks />
        <JobListings />
        <SuccessStories />
        <VideoTestimonials />
        <SubmitTestimonial />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
