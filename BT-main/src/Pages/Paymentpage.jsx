
import React, { useState } from 'react';
import { CreditCard, Building2, Wallet } from 'lucide-react';

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  const banks = [
    // Public Sector Banks
    { category: "Public Sector Banks", banks: [
      "State Bank of India",
      "Bank of Baroda",
      "Bank of India",
      "Bank of Maharashtra",
      "Canara Bank",
      "Central Bank of India",
      "Indian Bank",
      "Indian Overseas Bank",
      "Punjab National Bank",
      "Punjab & Sind Bank",
      "Union Bank of India",
      "UCO Bank"
    ]},
    // Private Sector Banks
    { category: "Private Sector Banks", banks: [
      "Axis Bank",
      "Bandhan Bank",
      "CSB Bank",
      "City Union Bank",
      "DCB Bank",
      "Dhanlaxmi Bank",
      "Federal Bank",
      "HDFC Bank",
      "ICICI Bank",
      "IDBI Bank",
      "IDFC First Bank",
      "IndusInd Bank",
      "Jammu & Kashmir Bank",
      "Karnataka Bank",
      "Karur Vysya Bank",
      "Kotak Mahindra Bank",
      "Nainital Bank",
      "RBL Bank",
      "South Indian Bank",
      "Tamilnad Mercantile Bank",
      "YES Bank"
    ]},
    // Foreign Banks
    // { category: "Foreign Banks", banks: [
    //   "Standard Chartered Bank",
    //   "HSBC Bank",
    //   "Deutsche Bank",
    //   "Citibank",
    //   "Bank of America"
    // ]}
  ];

  return (
    <div className="border bg-gray-200 shadow-2xl lg:w-[600px]  w-96 m-20 mx-auto p-5 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Select Payment Method</h1>
      
      {/* Payment Methods */}
      <div className="space-y-4">
        {/* Net Banking */}
        <div className=" rounded-lg p-4 hover:border-blue-500 cursor-pointer">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="paymentMethod"
              value="netbanking"
              checked={selectedMethod === 'netbanking'}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="w-4 h-4"
            />
            <Building2 className="w-5 h-5" />
            <span className="font-medium">Net Banking</span>
          </label>
          
          {selectedMethod === 'netbanking' && (
            <div className="mt-4 ml-7">
              <select 
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="w-full p-2 border rounded bg-white"
              >
                <option value="">Select your bank</option>
                {banks.map((category) => (
                  <optgroup key={category.category} label={category.category}>
                    {category.banks.map((bank) => (
                      <option key={bank} value={bank}>
                        {bank}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Credit Card */}
        <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="paymentMethod"
              value="credit"
              checked={selectedMethod === 'credit'}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="w-4 h-4"
            />
            <CreditCard className="w-5 h-5" />
            <span className="font-medium">Credit Card</span>
          </label>
          
          {selectedMethod === 'credit' && (
            <div className="mt-4 ml-7 space-y-3">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-2 border rounded"
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/3 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/3 p-2 border rounded"
                />
              </div>
              {/* <input
                type="text"
                placeholder="Card Holder Name"
                className="w-full p-2 border rounded"
              /> */}
            </div>
          )}
        </div>

        {/* Debit Card */}
        <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="paymentMethod"
              value="debit"
              checked={selectedMethod === 'debit'}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="w-4 h-4"
            />
            <Wallet className="w-5 h-5" />
            <span className="font-medium">Debit Card</span>
          </label>
          
          {selectedMethod === 'debit' && (
            <div className="mt-4 ml-7 space-y-3">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-2 border rounded"
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/3 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/3 p-2 border rounded"
                />
              </div>
              {/* <input
                type="text"
                placeholder="Card Holder Name"
                className="w-full p-2 border rounded"
              /> */}
            </div>
          )}
        </div>
      </div>
      
    
      {/* upi id */}
      <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="paymentMethod"
              value="UPIID"
              checked={selectedMethod === 'UPIID'}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="w-4 h-4"
            />
            <span className="font-medium">UPI ID</span>
          </label>
          
          {selectedMethod === 'UPIID' && (
            <div className="mt-4 ml-7 space-y-2 flex align-middle lg:gap-5 gap-3 lg:w-96 w-48">
              <input
                type="text"
                placeholder="Enter UPI ID"
                className="w-full p-2 border rounded"
              />
              <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors w-32">Verify</button>
            </div>
          )}
    </div>

      {/* Payment Button */}
      {selectedMethod && (
        <button 
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => {
            const message = selectedMethod === 'netbanking' && selectedBank
              ? `Processing ${selectedMethod} payment through ${selectedBank}...`
              : `Processing ${selectedMethod} payment...`;
            alert(message);
          }}
        >
          Pay Now
        </button>
      )}
    </div>
  );
}