import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";

/**
 * EXPORTS + IMPORTS (ES Modules)
 *
 * - Named export (what we use here):
 *   export const contactData = [...]
 *   export const storeHoursData = [...]
 *   Import it with braces and the SAME name:
 *   import { contactData, storeHoursData } from "@/components/Sections/Contact/ContactData";
 *
 * - Default export (used when the file mainly exports ONE thing):
 *   export default contactData
 *   Import it WITHOUT braces (you can rename it freely):
 *   import contactData from "@/components/Sections/Contact/ContactData";
 *
 * Rule of thumb:
 * - Use `export` (named) when a file may export multiple things (data, helpers, etc.).
 * - Use `export default` when there is a single primary thing (often a React component).
 */
export const contactData = [
  {
    id: 1,
    Icon: FaMapMarkerAlt,
    title: "Our Location",
    info: "140 Adeilaide St East",
  },
  {
    id: 2,
    Icon: FaPhoneAlt,
    title: "Phone",
    info: "647-687-7841",
  },
  {
    id: 3,
    Icon: FaEnvelope,
    title: "Email",
    info: "bilalhassen799@gmail.com",
  },
];

export const storeHoursData = {
  Icon: FaRegClock,
  title: "Store Hours",
  hours: [
    { id: 1, day: "Monday - Friday", time: "7:00 AM - 7:00 PM" },
    { id: 2, day: "Saturday", time: "8:00 AM - 8:00 PM" },
    { id: 3, day: "Sunday", time: "9:00 AM - 5:00 PM" },
  ],
};
