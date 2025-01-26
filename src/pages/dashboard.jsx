import { useState } from "react";
import wedding from "../../public/images/images (3).jpeg";
import construction from "../../public/images/images.jpeg";
import business from "../../public/images/images (1).jpeg";
import education from "../../public/images/images (2).jpeg";
import HomeCard from "../components/homeCards";
import Modal from "../components/modal";
import Footer from "../components/footer";
import Navbar from "../components/header";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    subCategory: "",
    deposit: "",
    loanPeriod: "",
  });

  const handleClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateLoan = () => {
    const { deposit, loanPeriod } = formData;
    if (!deposit || !loanPeriod) {
      alert("Please fill all fields!");
      return;
    }

    const estimatedBreakdown = (parseFloat(deposit) * 1.1) / loanPeriod;
    alert(`Estimated Monthly Payment: ${estimatedBreakdown.toFixed(2)}`);
  };

  return (
    <>
      <Navbar />
      <section className="bg-white text-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <HomeCard
              title={"Wedding Loan"}
              description={""}
              image={wedding}
              text={"See more"}
              onClick={() => handleClick("Wedding Loan")}
            />
            <HomeCard
              title={"Construction Loan"}
              description={""}
              image={construction}
              text={"See more"}
              onClick={() => handleClick("Construction Loan")}
            />
            <HomeCard
              title={"Business Loan"}
              description={""}
              image={business}
              text={"See more"}
              onClick={() => handleClick("Business Loan")}
            />
            <HomeCard
              title={"Education Loan"}
              description={""}
              image={education}
              text={"See more"}
              onClick={() => handleClick("Education Loan")}
            />
          </div>
        </div>
      </section>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold text-black mb-4">{selectedCategory}</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-black">Subcategory:</label>
              <input
                type="text"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleInputChange}
                className="border rounded p-2 w-full focus:ring focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-black">Initial Deposit:</label>
              <input
                type="number"
                name="deposit"
                value={formData.deposit}
                onChange={handleInputChange}
                className="border rounded p-2 w-full focus:ring focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-black">Loan Period (months):</label>
              <input
                type="number"
                name="loanPeriod"
                value={formData.loanPeriod}
                onChange={handleInputChange}
                className="border rounded p-2 w-full focus:ring focus:ring-gray-500"
              />
            </div>
          </form>
          <button
            onClick={calculateLoan}
            className="bg-black text-white rounded px-4 py-2 mt-4 hover:bg-gray-800"
          >
            Calculate Loan
          </button>
        </Modal>
      )}
      <Footer />
    </>
  );
}




