"use client";

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  const steps = [
    { number: 1, label: "Shipping" },
    { number: 2, label: "Payment" },
    { number: 3, label: "Review" },
    { number: 4, label: "Confirmation" },
  ];

  return (
    <div className="bg-white border-b border-gray-200 py-8">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  step.number <= currentStep
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step.number}
              </div>

              {/* Step Label */}
              <div className="hidden sm:block ml-3">
                <p
                  className={`text-sm font-medium ${
                    step.number <= currentStep
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                >
                  {step.label}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all ${
                    step.number < currentStep ? "bg-red-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
