"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";

export const SocialConnect = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState<boolean | null>(null);
  const [isQuestionVisible, setIsQuestionVisible] = useState<boolean>(true);

  // The correct answer for the radio buttons
  const correctAnswer = "useEffect";

  // Radio button options (single word)
  const options = ["useEffect", "useLayoutEffect", "useState", "ReactDOM"];

  // Handling the answer selection
  const handleAnswerSelection = (answer: string) => {
    setSelectedOption(answer);

    // Check if the selected answer is correct
    if (answer === correctAnswer) {
      setIsAnsweredCorrectly(true);
      setTimeout(() => {
        setIsQuestionVisible(false); // Hide question and options after 2 seconds
      }, 2000);
    } else {
      setIsAnsweredCorrectly(false);
    }
  };

  return (
    <Card className="h-[380px] p-6 col-span-1 md:col-span-3 shadow-lg to-gray-900 overflow-hidden md:h-[320px] relative">
      <CardHeader
        title="Challenge Yourself!"
        description="What is the primary React Hook for handling side effects?"
        className="mb-6 text-white text-center"
      />

      {/* Question and options */}
      {isQuestionVisible && (
        <div className="p-4 text-white space-y-6">
          <p className="text-sm text-justify text-white/70">
            Choose the correct hook for handling side effects in React.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((option) => (
              <div
                key={option}
                className={`flex items-center space-x-3 cursor-pointer p-4 text-center rounded-md transition duration-300 ${
                  selectedOption === option
                    ? isAnsweredCorrectly
                      ? "text-green-500"
                      : "text-red-500"
                    : "text-white"
                }`}
                onClick={() => handleAnswerSelection(option)}
              >
                {/* Custom Radio Button */}
                <div
                  className={`w-5 h-5 rounded-full border-2 flex justify-center items-center ${
                    selectedOption === option
                      ? isAnsweredCorrectly
                        ? "border-green-500 bg-green-500"
                        : "border-red-500 bg-red-500"
                      : "border-white"
                  }`}
                >
                  {selectedOption === option && (
                    <div className="w-3 h-3 rounded-full bg-white" />
                  )}
                </div>

                <span className="text-sm">{option}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* If the answer is correct, show the success message */}
      {!isQuestionVisible && isAnsweredCorrectly && (
        <div className="p-4 text-center text-white space-y-4">
          <p className="text-xl font-bold">Great job!</p>
          <p>You've answered correctly! Now, let’s connect.</p>
          <div className="mt-4">
            <p>Feel free to reach out for collaboration opportunities!</p>
            <p className="mt-2">Contact me through my email or LinkedIn.</p>
          </div>
        </div>
      )}

      {/* If the answer is incorrect, show the retry message */}
      {!isQuestionVisible && !isAnsweredCorrectly && (
        <div className="p-4 text-center text-white space-y-4">
          <p className="text-xl font-bold text-red-500">Oops! Incorrect answer</p>
          <p>Please try again and select the correct option.</p>
        </div>
      )}
    </Card>
  );
};
