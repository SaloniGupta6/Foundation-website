import React from "react";
import { FaShareAlt, FaCopy } from "react-icons/fa";
import { MdQrCode2 } from "react-icons/md";

export default function DonatePage() {
  const upiId = "muskurahat@upi";
  const bankDetails = {
    accountName: "Muskurahat Foundation",
    accountNumber: "1234567890",
    ifsc: "SBIN0001234",
    bankName: "State Bank of India",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="pt-28 px-6 md:px-16 min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold text-yellow-600 dark:text-yellow-300">
          Support Our Cause
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Your donation helps us bring smiles and support to underprivileged children and communities. Every contribution matters.
        </p>
      </section>

      {/* UPI / QR Payment Section */}
      <section className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 md:p-12 space-y-8 max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-yellow-300">Donate via UPI / QR</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center space-y-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/QR_code_example.svg/800px-QR_code_example.svg.png"
              alt="QR Code"
              className="w-48 h-48 mx-auto rounded-lg border-4 border-yellow-400"
            />
            <p className="text-gray-700 dark:text-gray-300">
              Scan this QR code using any UPI app
            </p>
          </div>
          <div className="text-center space-y-3">
            <p className="text-lg font-semibold">UPI ID</p>
            <div className="flex items-center justify-center gap-2 text-lg bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
              <span>{upiId}</span>
              <button onClick={() => copyToClipboard(upiId)}>
                <FaCopy className="text-gray-600 dark:text-gray-300 hover:text-yellow-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 md:p-12 space-y-6 max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-yellow-300">Bank Transfer</h2>
        <div className="text-center text-lg space-y-2">
          <p><strong>Account Name:</strong> {bankDetails.accountName}</p>
          <p><strong>Account Number:</strong> {bankDetails.accountNumber}</p>
          <p><strong>IFSC Code:</strong> {bankDetails.ifsc}</p>
          <p><strong>Bank:</strong> {bankDetails.bankName}</p>
        </div>
      </section>

      {/* Share Section */}
      <section className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 md:p-12 space-y-6 max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-yellow-300">Share With Your Friends</h2>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition-all flex items-center justify-center mx-auto gap-2"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert("Donation link copied to clipboard!");
          }}
        >
          <FaShareAlt /> Share This Page
        </button>
      </section>
    </div>
  );
}
