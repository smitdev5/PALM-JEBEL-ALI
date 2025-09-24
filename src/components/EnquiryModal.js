// components/EnquiryModal.jsx
import { useState, useContext, createContext } from "react";
import { X } from "lucide-react";

// Context for global modal access
const EnquiryModalContext = createContext();

export const useEnquiryModal = () => useContext(EnquiryModalContext);

export const EnquiryModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <EnquiryModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && <EnquiryModal onClose={closeModal} />}
    </EnquiryModalContext.Provider>
  );
};

const EnquiryModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-black text-white p-8 rounded-xl w-full max-w-md relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold mb-6 tracking-wide text-[#997736] ">
          ENQUIRE NOW
        </h2>

        <form className="space-y-5">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 focus:border-[#997736] outline-none"
          />

          {/* Mobile Number Input */}
          <div className="flex items-center border border-gray-600 focus:border-[#997736] rounded-md">
            <span className="px-3 py-3 bg-gray-800 text-sm">🇮🇳</span>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="flex-1 px-3 py-3 bg-transparent  outline-none"
            />
          </div>

          {/* Consent Text */}
          <p className="text-xs text-gray-400 leading-relaxed">
            I Consent To The Processing of Provided Data According To Privacy
            Policy | Terms & Conditions. I Authorize Preferred Partner and its
            representatives to Call, SMS, Email or WhatsApp Me About Its
            Products and Offers. This Consent Overrides Any Registration For
            DNC/NDNC.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#997736] hover:bg-[#997736]/70 text-black font-semibold py-3 rounded-md transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
