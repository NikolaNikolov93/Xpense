import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Select,
  Input,
} from "./GenerateRerpot.styles";
import Button from "../button/Button";
import { useForm } from "../../hooks/useForm";
import { CATEGORIES } from "../../constants";
import { useNavigate } from "react-router-dom";

const GenerateReport: React.FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  /**
   * Reusable custom from handling hook
   */
  const { formData, handleChange, resetForm } = useForm({
    initialValues: {
      fromDate: "",
      toDate: "",
      sortOrder: "",
      category: "",
    },
  });

  //hook used to navigate to the set URL
  const navigate = useNavigate();

  //Genarate report hanlder --> Encodes the form data and navigates the user
  const handleGenerateReport = () => {
    const fromDate = encodeURIComponent(formData.fromDate);
    const toDate = encodeURIComponent(formData.toDate);
    const sortOrder = encodeURIComponent(formData.sortOrder);
    const category = encodeURIComponent(formData.category);
    resetForm();
    closeModal();
    navigate(
      `/report?fromDate=${fromDate}&toDate=${toDate}&sortOrder=${sortOrder}&category=${category}`
    );
  };

  return (
    <ModalContent>
      <ModalHeader>
        <h2>Generate Report</h2>
      </ModalHeader>
      <ModalBody>
        <label>From:</label>
        <Input
          name="fromDate"
          type="date"
          value={formData.fromDate}
          onChange={handleChange}
        />

        <label>To:</label>
        <Input
          name="toDate"
          type="date"
          value={formData.toDate}
          onChange={handleChange}
        />

        <label>Sort By:</label>
        <Select
          name="sortOrder"
          value={formData.sortOrder}
          onChange={handleChange}
        >
          <option value="newest">Newest to Oldest</option>
          <option value="oldest">Oldest to Newest</option>
          <option value="highAmount">Amount High to Low</option>
          <option value="lowAmount">Amount Low to High</option>
        </Select>

        <label>Filter by Category:</label>
        <Select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">All Categories</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </ModalBody>
      <ModalFooter>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={handleGenerateReport}>Generate</Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default GenerateReport;
