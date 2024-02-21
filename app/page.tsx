import DoctorList from "@/components/DoctorList";
import Hero from "@/components/Hero";
import Search from "@/components/Search";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Search/>
      <DoctorList/>
    </div>
  );
}
