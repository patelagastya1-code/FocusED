import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AppBlocker from "../../imports/AppBlocker-1";
import ToDoList from "../../imports/ToDoList-1";
import Stats from "../../imports/Stats-1";
import Groups from "../../imports/Groups-1";

const mockups = [
  { component: AppBlocker, name: "App Blocker" },
  { component: ToDoList, name: "To-Do List" },
  { component: Stats, name: "Stats" },
  { component: Groups, name: "Groups" },
];

export function PhoneCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? mockups.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === mockups.length - 1 ? 0 : prev + 1));
  };

  const CurrentMockup = mockups[currentIndex].component;

  return (
    <div className="relative flex items-center justify-center gap-8">
      <button
        onClick={goToPrevious}
        className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-90 transition-all shadow-lg"
        aria-label="Previous mockup"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="relative flex justify-center items-center">
        <div className="w-[393px] h-[852px]">
          <CurrentMockup />
        </div>
      </div>

      <button
        onClick={goToNext}
        className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-90 transition-all shadow-lg"
        aria-label="Next mockup"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
