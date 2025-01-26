import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AdminCard from "../components/admincards";

const AdminPage = () => {
  return (
    <section className="text-gray-700 font-sans">
      {/* Admin Heading Section */}
      <header className="bg-black text-white p-6 text-center shadow-md fixed top-0 left-0 w-full z-50">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </header>

      {/* Loan Categories Section */}
      <div className="max-w-screen-lg mx-auto pt-24 px-4">
        <h2 className="text-2xl font-semibold mb-4">Loan Categories</h2>
        <p className="mb-6 text-gray-600">
          Choose from the following categories to learn more:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/adminwedding" className="no-underline">
            <AdminCard
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvc98LKZkGdr3pOL8iaCo6dici7OQoxmKog&s"
              altText="Wedding Loans"
              title="Wedding Loans"
              description="Valima, Furniture, Valima Food, Jahez"
            />
          </Link>

          <Link to="/adminconstruction" className="no-underline">
            <AdminCard
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HIdH7y7vm4sVSywUgu5o5JEzR2OC9AoR4Q&s"
              altText="Home Construction Loans"
              title="Home Construction Loans"
              description="Structure, Finishing, Loan"
            />
          </Link>

          <Link to="/adminbusiness" className="no-underline">
            <AdminCard
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVSTt2S5_BaAgcKctd5bHIAKpr50C7xKQJd1hZAFYbm-1iaoa23odTMdyN9dmCcHe3wM&usqp=CAU"
              altText="Business Startup Loans"
              title="Business Startup Loans"
              description="Buy Stall, Shop Machinery"
            />
          </Link>

          <Link to="/admineducation" className="no-underline">
            <AdminCard
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDp8YPQ-PWqLzPXaLbQeQ2f7ydiQTsJMVyww&s"
              altText="Education Loans"
              title="Education Loans"
              description="University Fees, Child Fees Loan"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
