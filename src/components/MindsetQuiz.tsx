import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // --> Added Input for email
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, Rocket, Star, LightbulbIcon, Award, Mail } from "lucide-react"; // --> Added Mail icon
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Quiz questions (Keep as is)
const quizQuestions = [
  {
    id: "q1",
    question: "When you face a challenging task, you usually:",
    options: [
      { value: "growth", label: "Get excited by the opportunity to learn something new" },
      { value: "fixed", label: "Worry about whether you'll be able to do it well" }
    ]
  },
  {
    id: "q2",
    question: "When you receive criticism, you typically:",
    options: [
      { value: "fixed", label: "Take it personally and feel discouraged" },
      { value: "growth", label: "See it as helpful feedback to improve" }
    ]
  },
  {
    id: "q3",
    question: "When you see someone more talented than you, you tend to:",
    options: [
      { value: "growth", label: "Feel inspired and look for ways to learn from them" },
      { value: "fixed", label: "Feel threatened or intimidated by their abilities" }
    ]
  },
  {
    id: "q4",
    question: "When you make a mistake, you usually:",
    options: [
      { value: "fixed", label: "Try to hide it or make excuses" },
      { value: "growth", label: "See it as a learning opportunity" }
    ]
  },
  {
    id: "q5",
    question: "When learning something new, you believe:",
    options: [
      { value: "growth", label: "Your abilities can improve with practice and effort" },
      { value: "fixed", label: "You either have a natural talent for it or you don't" }
    ]
  }
];

type ResultType = "growth" | "fixed" | "mixed" | null;

// Result Descriptions (Keep as is)
const resultDescriptions = {
  growth: {
    title: "Growth Mindset",
    description: "You tend to believe that your abilities can be developed through dedication and hard work. This view creates a love of learning and resilience that is essential for great accomplishment.",
    icon: <Rocket className="h-10 w-10 text-navy" />,
    color: "bg-green-100",
    actionText: "Strengthen your growth mindset even further with Zoe's book!"
  },
  mixed: {
    title: "Mixed Mindset",
    description: "You show elements of both growth and fixed mindsets. You sometimes embrace challenges and value effort, while other times you may doubt your ability to improve.",
    icon: <LightbulbIcon className="h-10 w-10 text-navy" />,
    color: "bg-yellow-100",
    actionText: "Develop a stronger growth mindset with Zoe's proven strategies!"
  },
  fixed: {
    title: "Fixed Mindset",
    description: "You tend to believe that your qualities are fixed traits that cannot change. This can make you avoid challenges and give up easily when facing obstacles.",
    icon: <Star className="h-10 w-10 text-navy" />,
    color: "bg-blue-100",
    actionText: "Transform your mindset with the techniques in Zoe's book!"
  }
};

const MindsetQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<ResultType>(null);
  const [showResults, setShowResults] = useState(false);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false); // --> Still used to track completion
  const [showEmailForm, setShowEmailForm] = useState(false); // --> New state: Controls showing the email form
  const [email, setEmail] = useState(""); // --> New state: Stores the entered email
  const [showTips, setShowTips] = useState(false);

  const form = useForm({
    defaultValues: {
      currentAnswer: ""
    }
  });

  const startQuiz = () => {
    setIsQuizStarted(true);
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResults(false);
    setShowEmailForm(false); // --> Reset email form state
    setEmail(""); // --> Reset email
    setIsQuizComplete(false);
    setShowTips(false); // --> Reset tips visibility
  };

  const handleNext = (data: { currentAnswer: string }) => {
    const newAnswers = {
      ...answers,
      [quizQuestions[currentQuestion].id]: data.currentAnswer
    };
    setAnswers(newAnswers);
    form.reset();

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // --> Quiz is done, mark complete and show email form instead of results
      setIsQuizComplete(true);
      setShowEmailForm(true);
    }
  };

  // --> New function to handle email submission
  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default page reload
    if (!email || !/\S+@\S+\.\S+/.test(email)) { // Basic non-empty & format check
        alert("Please enter a valid email address."); // Simple validation feedback
        return;
    }

    console.log("Email captured:", email);
    // ** IMPORTANT: Replace console.log with your actual API call **
    // e.g., sendEmailToYourAPI(email)
    //      .then(() => { /* Success logic */ })
    //      .catch(() => { /* Error handling */ });

    // Once email is (simulated) captured, calculate and show results
    calculateResult(answers);
    setShowEmailForm(false); // Hide the email form
    setShowResults(true); // Show the results dialog
  };

  const calculateResult = (quizAnswers: Record<string, string>) => {
    let growthCount = 0;
    let fixedCount = 0;

    Object.values(quizAnswers).forEach(answer => {
      if (answer === "growth") growthCount++;
      if (answer === "fixed") fixedCount++;
    });

    let resultType: ResultType;
    if (growthCount >= 4) {
      resultType = "growth";
    } else if (fixedCount >= 4) {
      resultType = "fixed";
    } else {
      resultType = "mixed";
    }
    setResult(resultType);
  };

  const restartQuiz = () => {
    // --> Reset all relevant states
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResults(false);
    setShowEmailForm(false);
    setEmail("");
    setIsQuizComplete(false);
    setIsQuizStarted(false); // --> Go back to the initial start screen
    form.reset();
  };

  const resultData = result ? resultDescriptions[result] : null;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-12 mb-16"> {/* --> Increased shadow slightly */}
      <div className="p-8">
        {/* Initial Start Screen */}
        {!isQuizStarted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-playfair font-bold text-navy mb-6">Power-Up Your Mind Quiz</h2> {/* --> Slightly larger title */}
            <div className="flex justify-center mb-6">
              <Award className="h-16 w-16 text-gold" />
            </div>
            <p className="mb-4 text-gray-700 text-lg"> {/* --> Slightly larger text */}
              Discover whether you (or your tween!) lean towards a growth or fixed mindset with this quick quiz.
            </p>
            {/* --> Added parent-centric text */}
            <p className="mb-8 text-gray-600">
                Understanding this is the first step toward developing the mental tools needed to tackle challenges and achieve goals!
            </p>
            <Button
              onClick={startQuiz}
              className="bg-navy hover:bg-light-navy text-white px-10 py-5 text-xl rounded-lg shadow-md hover:shadow-lg transition-shadow" // --> Larger, rounded button
            >
              Start Quiz
            </Button>
          </motion.div>
        ) : null}

        {/* Quiz Question Screen */}
        {isQuizStarted && !isQuizComplete && !showEmailForm ? (
          <motion.div
            key={`question-${currentQuestion}`}
            initial={{ opacity: 0, x: 50 }} // --> Slide in from right
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }} // --> Slide out to left
            transition={{ duration: 0.4 }}
          >
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-playfair font-semibold text-navy">Power-Up Your Mind Quiz</h2>
                <span className="text-sm font-medium text-gray-500">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5"> {/* --> Slightly thicker bar */}
                <div
                  className="bg-gradient-to-r from-yellow-400 to-gold h-2.5 rounded-full transition-all duration-300" // --> Gradient progress bar
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleNext)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="currentAnswer"
                  rules={{ required: 'Please select an option' }} // --> Added basic validation rule
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-xl font-semibold text-navy text-center block"> {/* --> Centered question */}
                        {quizQuestions[currentQuestion].question}
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          className="space-y-3 pt-4"
                        >
                          {quizQuestions[currentQuestion].options.map((option, idx) => (
                            <Label // --> Use Label as the clickable container
                                htmlFor={`option-${currentQuestion}-${idx}`} // --> Ensure unique ID across questions
                                className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${field.value === option.value ? 'border-gold bg-soft-gold/20 shadow-sm' : 'border-gray-200 hover:border-gold/50 hover:bg-soft-gold/10'}`}
                            >
                              <RadioGroupItem value={option.value} id={`option-${currentQuestion}-${idx}`} className="border-gray-400" />
                              <span className="flex-1 text-gray-700">{option.label}</span> {/* --> Changed Label to span */}
                            </Label>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 flex justify-end"> {/* --> Increased top padding */}
                  <Button
                    type="submit"
                    disabled={!form.watch("currentAnswer")}
                    className="bg-navy hover:bg-light-navy text-white px-8 py-3 text-lg rounded-md shadow hover:shadow-md transition-shadow disabled:opacity-50" // --> Slightly adjusted styling
                  >
                    {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"} {/* --> Changed final button text */}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        ) : null}

        {/* --> Email Capture Screen */}
        {showEmailForm ? (
          <motion.div
            key="email-form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h2 className="text-2xl font-playfair font-bold text-navy mb-4">You're Done! Almost There...</h2>
            <p className="text-gray-700 mb-6 max-w-md mx-auto">
              Enter your email below to instantly unlock your personalized mindset results and get actionable tips from Zoe!
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-4 max-w-sm mx-auto">
               <div className="relative">
                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                 <Input
                   type="email"
                   placeholder="Enter your email address"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required // --> HTML5 required attribute
                   className="pl-10 pr-4 py-3 text-base border-gray-300 focus:border-navy focus:ring-navy rounded-md shadow-sm" // --> Adjusted padding & style
                 />
               </div>
               <Button
                 type="submit"
                 className="w-full bg-gold hover:bg-yellow-500 text-navy px-8 py-3 text-lg rounded-md shadow hover:shadow-md transition-shadow" // --> Gold button for emphasis
               >
                 Unlock My Results!
               </Button>
               <p className="text-xs text-gray-500 pt-2">We respect your privacy. No spam, ever.</p>
             </form>
          </motion.div>
        ) : null}

        {/* --> Results Dialog (Now controlled by showResults state, triggered after email submit) */}
        <Dialog open={showResults} onOpenChange={setShowResults}>
          <DialogContent className="sm:max-w-lg p-0"> {/* --> Increased max-width, removed padding for custom structure */}
            {resultData && (
                <>
                  <DialogHeader className={`p-6 ${resultData.color} rounded-t-lg`}>
                    <DialogTitle className="text-center text-2xl font-playfair font-bold text-navy flex items-center justify-center gap-3">
                      {resultData.icon}
                      <span>Your Result: {resultData.title}</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="p-6 space-y-4">
                    <DialogDescription className="text-center text-base text-gray-700">
                      {resultData.description}
                    </DialogDescription>

                    <Collapsible open={showTips} onOpenChange={setShowTips} className="w-full">
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full justify-between border-navy/50 text-navy hover:bg-navy/5 hover:text-navy">
                          Show Tips for Your Mindset Type
                          <span className={`transform transition-transform duration-200 ${showTips ? 'rotate-180' : 'rotate-0'}`}>↓</span>
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 bg-gray-50 rounded-lg mt-2 border">
                        {/* --> Tips content remains the same based on result */}
                        {result === "growth" && (
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Continue to embrace challenges as opportunities to grow</li>
                            <li>Share your growth mindset approach with others</li>
                            <li>Mentor someone who might be struggling with a fixed mindset</li>
                            <li>Seek out constructive feedback regularly</li>
                          </ul>
                        )}
                        {result === "mixed" && (
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Identify specific situations where fixed mindset thoughts appear</li>
                            <li>Practice reframing challenges: "I can't do this" becomes "I can't do this *yet*"</li>
                            <li>Focus on the process of learning, not just the outcome</li>
                            <li>Celebrate effort and progress, however small</li>
                          </ul>
                        )}
                        {result === "fixed" && (
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Start by acknowledging fixed mindset thoughts without judgment</li>
                            <li>Choose one small challenge this week and approach it as a learning chance</li>
                            <li>Ask for help when you're stuck – it's a sign of strength!</li>
                            <li>Learn about the science behind brain plasticity – you *can* change!</li>
                          </ul>
                        )}
                      </CollapsibleContent>
                    </Collapsible>

                    <div className="pt-4 text-center">
                        <p className="text-lg font-semibold text-navy mb-3">{resultData.actionText}</p>
                        <Button
                          asChild
                          className="bg-navy hover:bg-light-navy text-white px-6 py-3 text-base rounded-md shadow hover:shadow-md transition-shadow"
                        >
                          <a href="/books" className="flex items-center justify-center gap-2">
                            <BookOpen className="h-5 w-5" />
                            Explore Zoe's Book
                          </a>
                        </Button>
                    </div>
                  </div>
                  <DialogFooter className="p-4 bg-gray-50 border-t sm:justify-between flex-col sm:flex-row gap-2 rounded-b-lg">
                    <Button
                      variant="ghost" // --> Ghost variant for less emphasis
                      onClick={restartQuiz}
                      className="text-gray-600 hover:text-navy hover:bg-gray-100"
                    >
                      Retake Quiz
                    </Button>
                     {/* --> Changed this button's text and potential link */}
                     <Button
                        asChild
                        variant="outline"
                        className="border-navy/50 text-navy hover:bg-navy/5 hover:text-navy"
                      >
                       <a href="/resources"> {/* --> Link to resources, blog, etc. */}
                         Get More Growth Mindset Tips
                       </a>
                    </Button>
                  </DialogFooter>
                </>
            )}
          </DialogContent>
        </Dialog>

       {/* --> Removed the separate Card component that showed after quiz completion, as results are now in the Dialog */}

      </div>
    </div>
  );
};

export default MindsetQuiz;