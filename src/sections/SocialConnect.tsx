"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";

export const SocialConnect = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState<boolean | null>(null);
  const [isQuestionVisible, setIsQuestionVisible] = useState<boolean>(true);

  // The correct answer for the radio buttons
  const correctAnswer = "Event Loop";

  // Radio button options (single word)
  const options = ["Event Loop", "Callback", "Closure", "Promise"];

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
        title="Can You Crack This React Question?"
        description="What is the mechanism that handles asynchronous JavaScript operations?"
        className="mb-4 text-white"
      />

      {/* Question and options */}
      {isQuestionVisible && (
        <div className="p-2 text-white space-y-6">
          <p className="text-sm text-white/70">
            Select the correct mechanism that handles asynchronous JavaScript operations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {options.map((option) => (
              <div
                key={option}
                className={`flex items-center space-x-3 cursor-pointer p-4 text-center rounded-md transition duration-300 ${
                  selectedOption === option
                    ? isAnsweredCorrectly
                      ? "text-green-500"
                      : "text-red-500"
                    : "text-white"
                } ${!isAnsweredCorrectly && selectedOption === option ? "animate-shake" : ""}`} // Apply shake animation on incorrect answer
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
        <div className="p-6 text-center text-white space-y-6 bg-white/10 backdrop-blur-xl rounded-xl shadow-xl animate-fadeIn transition-all duration-700 mt-8 mb-8">
          <p className="text-2xl font-semibold text-white">🎉 Well done!</p>
          <p className="text-lg text-white/80">You got the correct answer! Now, let's connect.</p>
          <div className="mt-4 space-y-2">
            <p className="text-white">I'm always open to collaboration opportunities. Reach out to me!</p>
          </div>
        </div>
      )}

      {/* If the answer is incorrect, show the retry message */}
      {!isQuestionVisible && !isAnsweredCorrectly && (
        <div className="p-6 text-center text-white space-y-6 bg-white/10 backdrop-blur-xl rounded-xl shadow-xl animate-fadeIn transition-all duration-700 mt-8 mb-8">
          <p className="text-xl font-bold text-red-500">Oops! Incorrect answer</p>
          <p className="text-white/80">Please try again and select the correct option.</p>
        </div>
      )}
    </Card>
  );
};
