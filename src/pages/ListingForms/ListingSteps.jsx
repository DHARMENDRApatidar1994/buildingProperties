import React from "react";
import MultiStep from "react-multistep";
import EnterAddressForm from "./EnterAddress";
import PropertyDetails from "./PropertDetails";
import Premium from "./Premium";
import Preview from "./Preview";
import HeroListProperty from "../../assets/Images/AddListing/HeroListProperty.png";
const ListingSteps = () => {
  return (
    <>
      <div>
        <img src={HeroListProperty} alt="" />
      </div>
      <div className="">
        <MultiStep activeStep={0}>
          <EnterAddressForm />
          <PropertyDetails />
          <Premium />
          <Preview />
        </MultiStep>
      </div>
    </>
  );
};

export default ListingSteps;
