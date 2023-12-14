import React from "react";
import Navbar from "./component/Homepage/Navbar";
import Footer from "./component/Homepage/Footer";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import BlogDetailPage from "./component/Blog/BlogDetailPage";
import ForRent from "./pages/ForRent";
import ForSale from "./pages/ForSale";
import ForInvestment from "./pages/ForInvestment";
import SearchForSale from "./component/forsale/SearchForSale";
import PropertyDetailPage from "./component/forrent/PropertyDetailPage";
import About from "./pages/About";
import AddListingPage from "./pages/AddListingPage";
import ContactUs from "./pages/ContactUs";
import ContactUsValidation from "./pages/ContactUsValidation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import DashboardPage from "./component/dashboard/DashboardPage";
import ListingSteps from "./pages/ListingForms/ListingSteps";
import ReviewPage from "./component/review/ReviewPage";
import SalePropertyDetailPage from "./component/forsale/SalePropertyDetailPage";
import InvestmentPropertyDetailPage from "./component/forinvestment/InvestmentPropertyDetailPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/BlogDetailPage/:id" element={<BlogDetailPage />} />
        <Route path="/forrent" element={<ForRent />} />
        <Route path="/forsale" element={<ForSale />} />
        <Route path="/forinvestment" element={<ForInvestment />} />
        <Route path="/searchforsale" element={<SearchForSale />} />
        <Route path="/propertyDetailPage/:id" element={<PropertyDetailPage />} />
        <Route path="/salepropertyDetailPage/:id" element={<SalePropertyDetailPage />} />
        <Route path="/investmentpropertyDetailPage/:id" element={<InvestmentPropertyDetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/addlisting" element={<AddListingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contactusvalidation" element={<ContactUsValidation />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/add-listing-steps" element={<ListingSteps />} />
        <Route path="/reviewpage" element={<ReviewPage/>} />

        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
