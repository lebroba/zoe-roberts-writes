import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Bookmark, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import MindsetQuiz from "@/components/MindsetQuiz";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import NewsletterBanner from "@/components/NewsletterBanner";
import { useTranslation } from "react-i18next";

// Define animation variants outside of components so both can use them
const itemAnimation = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
const Freebies = () => {
  const { t } = useTranslation();
  
  const freebieItems = [{
    id: 1,
    titleKey: "freebies.items.sampleChapter.title",
    descriptionKey: "freebies.items.sampleChapter.description",
    typeKey: "freebies.items.sampleChapter.type",
    fileType: "PDF",
    fileSize: "1.2 MB",
    icon: <BookOpen className="h-5 w-5" />,
    downloadLink: "#"
  }, {
    id: 2,
    titleKey: "freebies.items.characterWorksheet.title",
    descriptionKey: "freebies.items.characterWorksheet.description",
    typeKey: "freebies.items.characterWorksheet.type",
    fileType: "PDF",
    fileSize: "0.8 MB",
    icon: <FileText className="h-5 w-5" />,
    downloadLink: "#"
  }, {
    id: 3,
    titleKey: "freebies.items.journalPages.title",
    descriptionKey: "freebies.items.journalPages.description",
    typeKey: "freebies.items.journalPages.type",
    fileType: "PDF",
    fileSize: "1.5 MB",
    icon: <Bookmark className="h-5 w-5" />,
    downloadLink: "#"
  }, {
    id: 4,
    titleKey: "freebies.items.activitySheets.title",
    descriptionKey: "freebies.items.activitySheets.description",
    typeKey: "freebies.items.activitySheets.type",
    fileType: "PDF",
    fileSize: "2.3 MB",
    icon: <FileText className="h-5 w-5" />,
    downloadLink: "#"
  }, {
    id: 5,
    titleKey: "freebies.items.exclusivePreview.title",
    descriptionKey: "freebies.items.exclusivePreview.description",
    typeKey: "freebies.items.exclusivePreview.type",
    fileType: "PDF",
    fileSize: "1.7 MB",
    icon: <BookOpen className="h-5 w-5" />,
    downloadLink: "#"
  }, {
    id: 6,
    titleKey: "freebies.items.discussionGuide.title",
    descriptionKey: "freebies.items.discussionGuide.description",
    typeKey: "freebies.items.discussionGuide.type",
    fileType: "PDF",
    fileSize: "0.9 MB",
    icon: <FileText className="h-5 w-5" />,
    downloadLink: "#"
  }];
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Featured freebie section with email capture
  const featuredFreebie = {
    title: t("freebies.featuredTitle"),
    description: t("freebies.featuredDescription"),
    imageSrc: "/lovable-uploads/a7480295-0f37-484a-b740-8d543d10d754.png",
    fileType: "PDF",
    fileSize: "1.5 MB"
  };
  return <Layout>
      <div className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-playfair font-bold text-navy mb-8 text-center">{t("freebies.title")}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            {t("freebies.description")}
          </p>
          
          {/* Featured Freebie with Email Capture */}
          <div className="mb-20">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                    {t("freebies.featuredTitle")}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {t("freebies.featuredDescription")}
                  </p>
                  <EmailCaptureForm freebieTitle={featuredFreebie.title} />
                  <p className="text-xs text-gray-500 mt-2">
                    {t("freebies.emailSafety")}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <MindsetQuiz />
                </div>
              </div>
            </div>
          </div>
          
          {/* Downloadable Resources Section */}
          <h2 className="text-3xl font-playfair font-bold text-navy mb-6 text-center">{t("freebies.freeResourcesTitle")}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            {t("freebies.freeResourcesDescription")}
          </p>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" animate="show">
            {freebieItems.map(item => <FreebieCard key={item.id} freebie={item} />)}
          </motion.div>
          
          <div className="mt-16">
            <NewsletterBanner />
          </div>
        </div>
      </div>
    </Layout>;
};

// Email capture form component
const EmailCaptureForm = ({
  freebieTitle
}: {
  freebieTitle: string;
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple validation
    if (!email || !email.includes('@')) {
      toast({
        title: t("freebies.invalidEmail"),
        description: t("freebies.invalidEmailDescription"),
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // In a real application, this would connect to an email service
    // Simulate an API call
    setTimeout(() => {
      toast({
        title: t("freebies.success"),
        description: t("freebies.checkEmailForDownload", { title: freebieTitle })
      });
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };
  return <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input type="email" placeholder={t("freebies.yourEmailAddress")} value={email} onChange={e => setEmail(e.target.value)} required className="flex-grow" />
        <Button type="submit" className="bg-gold hover:bg-soft-gold text-navy font-medium" disabled={isSubmitting}>
          {isSubmitting ? <span className="flex items-center">
              <span className="animate-spin mr-2 h-4 w-4 border-2 border-navy border-t-transparent rounded-full" />
              {t("freebies.processing")}
            </span> : <span className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              {t("freebies.downloadFreeChapter")}
            </span>}
        </Button>
      </div>
    </form>;
};
interface FreebieItem {
  id: number;
  titleKey: string;
  descriptionKey: string;
  typeKey: string;
  fileType: string;
  fileSize: string;
  icon: React.ReactNode;
  downloadLink: string;
}

const FreebieCard = ({
  freebie
}: {
  freebie: FreebieItem;
}) => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const handleDownloadClick = () => {
    setShowEmailForm(true);
  };
  const handleEmailSubmit = (email: string) => {
    // Simple validation
    if (!email || !email.includes('@')) {
      toast({
        title: t("freebies.invalidEmail"),
        description: t("freebies.invalidEmailDescription"),
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would connect to an email service
    toast({
      title: t("freebies.success"),
      description: t("freebies.checkEmailForDownload", { title: t(freebie.titleKey) })
    });
    setShowEmailForm(false);
  };
  return <motion.div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300" variants={itemAnimation}>
      <div className="flex items-start">
        <div className="bg-soft-gold bg-opacity-20 p-3 rounded-full mr-4">
          {freebie.icon}
        </div>
        <div>
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-navy text-white mb-2">
            {t(freebie.typeKey)}
          </span>
          <h3 className="text-xl font-playfair font-bold text-navy mb-2">{t(freebie.titleKey)}</h3>
          <p className="text-gray-700 mb-4 text-sm">{t(freebie.descriptionKey)}</p>
          
          {!showEmailForm ? <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <span>{freebie.fileType} • {freebie.fileSize}</span>
              </div>
              <Button onClick={handleDownloadClick} className="bg-navy hover:bg-light-navy text-white">
                <Download className="mr-2 h-4 w-4" />
                {t("freebies.download")}
              </Button>
            </div> : <div className="mt-2">
              <div className="flex items-center gap-2">
                <Input type="email" placeholder={t("freebies.yourEmailAddress")} className="text-sm" onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleEmailSubmit((e.target as HTMLInputElement).value);
              }
            }} />
                <Button onClick={() => {
              const input = document.querySelector('input[type="email"]') as HTMLInputElement;
              handleEmailSubmit(input.value);
            }} className="bg-gold hover:bg-soft-gold text-navy" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">{t("freebies.enterEmail")}</p>
            </div>}
        </div>
      </div>
    </motion.div>;
};
export default Freebies;
