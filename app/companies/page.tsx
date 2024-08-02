import React from "react";
import Hero from "../../components/CompaniesHero";
import CompaniesTestimonials from "../../components/CompaniesTestimonials";
import EmployeeForm from "../../components/EmployeeForm";
import HowItWorks from "../../components/HowItWorks";
import Services from "../../components/CompanyServices";

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <CompaniesTestimonials />
      <EmployeeForm />
    </>
  );
};

export default page;
