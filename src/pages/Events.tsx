
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Book Signing: The Echo of Silence",
      date: "May 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Powell's Books, Portland, OR",
      description: "Join Zoe Roberts for a reading and signing of her latest novel, The Echo of Silence. Q&A session to follow.",
      registrationLink: "#"
    },
    {
      id: 2,
      title: "Literary Festival Panel: Contemporary Fiction",
      date: "June 3, 2025",
      time: "2:00 PM - 3:30 PM",
      location: "Seattle Public Library, Seattle, WA",
      description: "Zoe Roberts joins a panel discussion on the evolving landscape of contemporary literary fiction with fellow authors Emma Chen and Marcus Johnson.",
      registrationLink: "#"
    },
    {
      id: 3,
      title: "Writing Workshop: Character Development",
      date: "June 22, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Hugo House, Seattle, WA",
      description: "A hands-on workshop focused on creating complex, believable characters. Limited to 20 participants.",
      registrationLink: "#"
    },
    {
      id: 4,
      title: "In Conversation with Zoe Roberts",
      date: "July 12, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Elliott Bay Book Company, Seattle, WA",
      description: "Award-winning journalist Maria Santos sits down with Zoe Roberts to discuss her body of work, creative process, and the themes that drive her storytelling.",
      registrationLink: "#"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Book Tour: Whispers in the Garden",
      date: "November 8, 2024",
      location: "The Strand Bookstore, New York, NY"
    },
    {
      id: 6,
      title: "University Lecture Series",
      date: "October 15, 2024",
      location: "University of Washington, Seattle, WA"
    },
    {
      id: 7,
      title: "Summer Reading Series",
      date: "August 5, 2024",
      location: "Bryant Park, New York, NY"
    }
  ];

  return (
    <Layout>
      <div className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-playfair font-bold text-navy mb-8 text-center">Events</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            Join Zoe Roberts at upcoming readings, signings, workshops, and literary events around the country.
          </p>
          
          <div className="mb-16">
            <h2 className="text-2xl font-playfair font-bold text-navy mb-8">Upcoming Events</h2>
            
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-playfair font-bold text-navy mb-3">{event.title}</h3>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4 text-gray-700">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-gold" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  
                  <Button asChild className="bg-navy hover:bg-light-navy text-white">
                    <a href={event.registrationLink}>Register</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-playfair font-bold text-navy mb-8">Past Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-playfair font-bold text-navy mb-2">{event.title}</h3>
                  <div className="flex items-center mb-2 text-gray-700">
                    <Calendar className="mr-2 h-4 w-4 text-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="mr-2 h-4 w-4 text-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
