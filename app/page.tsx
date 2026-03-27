
import HeroSection from "@/components/sections/heroSection";
import ComparisonSection from "@/components/sections/comparisonSection";
import TracksSection from "@/components/sections/tuitionSection";
import JourneySection from "@/components/sections/JourneySection";
import ApplySection from "@/components/sections/ApplySection";
import ParentsSection from "@/components/sections/ParentsSection";
import {
  StudentsSection,
  SchoolsSection,
} from "@/components/sections/StudentSchoolSection";
import PartnersSection from "@/components/sections/PartnersSection";
import OutcomesSection from "@/components/sections/vpSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <HeroSection />
      <ComparisonSection />
      <OutcomesSection />
      <TracksSection />
      <JourneySection />
      <ApplySection />
      <ParentsSection />
      <StudentsSection />
      <SchoolsSection />
      <PartnersSection />
    </main>
  );
}
