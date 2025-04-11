
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, Rocket, Star, LightbulbIcon, Award } from "lucide-react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Quiz questions
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
  const [isQuizComplete, setIsQuizComplete] = useState(false);
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
    setIsQuizComplete(false);
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
      calculateResult(newAnswers);
      setIsQuizComplete(true);
      setShowResults(true);
    }
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
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResults(false);
    setIsQuizComplete(false);
    form.reset();
  };

  const resultData = result ? resultDescriptions[result] : null;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-12 mb-16">
      <div className="p-8">
        {!isQuizStarted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-playfair font-bold text-navy mb-6">Power-Up Your Mind Quiz</h2>
            <div className="flex justify-center mb-6">
              <Award className="h-16 w-16 text-gold" />
            </div>
            <p className="mb-8 text-gray-700">
              Discover whether you have a growth or fixed mindset with this quick quiz. 
              Understanding your mindset is the first step toward developing the mental 
              tools you need to achieve your goals!
            </p>
            <Button 
              onClick={startQuiz} 
              className="bg-navy hover:bg-light-navy text-white px-8 py-4 text-lg"
            >
              Start Quiz
            </Button>
          </motion.div>
        ) : !showResults ? (
          <motion.div
            key={`question-${currentQuestion}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-playfair font-semibold text-navy">Power-Up Your Mind Quiz</h2>
                <span className="text-sm font-medium text-gray-500">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gold h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleNext)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="currentAnswer"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-xl font-medium text-navy">
                        {quizQuestions[currentQuestion].question}
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          className="space-y-3 mt-4"
                        >
                          {quizQuestions[currentQuestion].options.map((option, idx) => (
                            <div key={idx} className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-gold hover:bg-soft-gold/10 transition-colors">
                              <RadioGroupItem value={option.value} id={`option-${idx}`} />
                              <Label htmlFor={`option-${idx}`} className="cursor-pointer flex-1 text-gray-700">
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-4 flex justify-end">
                  <Button
                    type="submit"
                    disabled={!form.watch("currentAnswer")}
                    className="bg-navy hover:bg-light-navy text-white"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? "See Results" : "Next Question"}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        ) : (
          <Dialog open={showResults} onOpenChange={setShowResults}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-playfair font-bold text-navy flex items-center justify-center gap-2">
                  {resultData?.icon}
                  <span>{resultData?.title}</span>
                </DialogTitle>
                <DialogDescription className="text-center pt-4">
                  <div className={`p-4 ${resultData?.color} rounded-lg mb-4`}>
                    {resultData?.description}
                  </div>
                </DialogDescription>
              </DialogHeader>
              <Collapsible open={showTips} onOpenChange={setShowTips}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Tips for Your Mindset Type
                    <span>{showTips ? "↑" : "↓"}</span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-gray-50 rounded-lg mt-2">
                  {result === "growth" && (
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Continue to embrace challenges as opportunities to grow</li>
                      <li>Share your growth mindset approach with others</li>
                      <li>Remember that the journey is as important as the destination</li>
                    </ul>
                  )}
                  {result === "mixed" && (
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Notice when you slip into fixed mindset thinking</li>
                      <li>Practice reframing challenges as learning opportunities</li>
                      <li>Celebrate your efforts, not just your achievements</li>
                    </ul>
                  )}
                  {result === "fixed" && (
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Start seeing challenges as opportunities to improve</li>
                      <li>Replace "I can't do this" with "I can't do this yet"</li>
                      <li>Embrace the process of learning, not just the outcome</li>
                    </ul>
                  )}
                </CollapsibleContent>
              </Collapsible>
              <DialogFooter className="sm:justify-between flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  onClick={restartQuiz}
                  className="sm:w-auto w-full"
                >
                  Retake Quiz
                </Button>
                <Button 
                  asChild
                  className="bg-navy hover:bg-light-navy text-white sm:w-auto w-full"
                >
                  <a href="/books" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Explore Growth Mindset Book
                  </a>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
        
        {isQuizComplete && (
          <Card className="mt-8 border-gold/20">
            <CardHeader className="bg-soft-gold/20">
              <CardTitle className="text-xl font-playfair text-navy flex items-center gap-2">
                <Award className="h-5 w-5" />
                {resultData?.title} Resources
              </CardTitle>
              <CardDescription>
                Based on your quiz results, here are some resources to help you further develop your mindset.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                {resultData?.actionText}
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <Button 
                  asChild
                  className="bg-navy hover:bg-light-navy text-white"
                >
                  <a href="/books" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Get the Book
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-white"
                >
                  <a href="/contact" className="flex items-center gap-2">
                    Join Newsletter
                  </a>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 text-sm text-gray-500">
              <p>
                "Power-Up Your Mind: Growth Mindset Strategies and Activities for Tweens" provides engaging 
                activities to help children develop a growth mindset.
              </p>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MindsetQuiz;
