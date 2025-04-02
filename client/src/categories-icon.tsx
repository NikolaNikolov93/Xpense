import { JSX } from "react";
import {
  FaHome,
  FaCar,
  FaShoppingCart,
  FaUtensils,
  FaFilm,
  FaHeartbeat,
  FaTshirt,
  FaPlane,
  FaMoneyBill,
  FaGraduationCap,
  FaGift,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";

export const CATEGORY_ICONS: Record<string, JSX.Element> = {
  Housing: <FaHome />,
  Transportation: <FaCar />,
  Groceries: <FaShoppingCart />,
  "Dining out": <FaUtensils />,
  Entertainment: <FaFilm />,
  "Health & Fitness": <FaHeartbeat />,
  Shopping: <FaTshirt />,
  Travel: <FaPlane />,
  "Debt & Loans": <FaMoneyBill />,
  Education: <FaGraduationCap />,
  "Gifts & Donations": <FaGift />,
  "Personal Care": <FaUser />,
  Other: <FaEllipsisH />,
};
