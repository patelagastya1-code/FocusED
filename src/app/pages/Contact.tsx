import { useState } from "react";
import { supabase } from "../../lib/supabase";

export function Contact() {
  const [responses, setResponses] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: "",
    q8: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleStarChange = (field: string, value: number) => {
    setResponses({ ...responses, [field]: value });
  };

  const handleScaleChange = (field: string, value: string) => {
    setResponses({ ...responses, [field]: value });
  };

  const handleTextChange = (field: string, value: string) => {
    setResponses({ ...responses, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [responses.q1, responses.q2, responses.q3, responses.q4, responses.q5, responses.q6];
    if (requiredFields.some((value) => value === null || value === "")) {
      setSubmitMessage("Please answer questions 1 to 6 before submitting.");
      return;
    }

    if (responses.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(responses.email)) {
      setSubmitMessage("Please enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitMessage("");

      if (!supabase) {
        throw new Error("Supabase client not initialized");
      }

      const { error } = await supabase.from("feedback").insert({
        q1: responses.q1,
        q2: responses.q2,
        q3: responses.q3,
        q4: responses.q4,
        q5: responses.q5,
        q6: responses.q6,
        q7: responses.q7 || null,
        q8: responses.q8 || null,
        email: responses.email || null,
        page_url: window.location.href,
        user_agent: navigator.userAgent,
      });

      if (error) {
        throw error;
      }

      setSubmitMessage("Thank you for your feedback!");
      setResponses({
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
        q7: "",
        q8: "",
        email: "",
      });
    } catch (error: unknown) {
      const errorMessage =
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof error.message === "string"
          ? error.message
          : "Could not submit. Check .env loading, feedback table, and RLS insert policy.";

      setSubmitMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex justify-center py-24 px-4 md:px-0">
      <div className="max-w-[900px] w-full flex flex-col items-center">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-display font-medium text-sm uppercase text-primary mb-4 tracking-wide">
            We'd love your feedback
          </span>
          <h1 className="font-display font-bold text-4xl md:text-[52px] text-primary mb-6">
            Help Us Improve
          </h1>
          <p className="font-sans text-xl md:text-[22px] text-primary max-w-[600px]">
            Your feedback helps us create better resources and a better experience for students like you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full bg-white rounded-[50px] p-12 lg:p-[70px] shadow-sm border border-gray-50 space-y-12">
          {/* Q1: Overall Impression */}
          <div className="border-b border-slate-200 pb-12">
            <h3 className="font-display font-semibold text-2xl text-primary mb-2">Q1 — Overall impression</h3>
            <p className="font-sans text-lg text-primary mb-8">How would you rate your overall experience on this website?</p>
            <div className="flex gap-4 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarChange("q1", star)}
                  className={`text-4xl transition-transform ${
                    responses.q1 >= star ? "text-[#FFD700]" : "text-gray-300"
                  } hover:scale-110`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Q2: Content Clarity */}
          <div className="border-b border-slate-200 pb-12">
            <h3 className="font-display font-semibold text-2xl text-primary mb-2">Q2 — Content clarity</h3>
            <p className="font-sans text-lg text-primary mb-8">The articles and information on this site were easy to understand.</p>
            <div className="flex flex-wrap gap-3">
              {["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"].map((option, idx) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleScaleChange("q2", option)}
                  className={`px-6 py-3 rounded-full font-sans text-base transition-all ${
                    responses.q2 === option
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-primary hover:bg-slate-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Q3: Content Usefulness */}
          <div className="border-b border-slate-200 pb-12">
            <h3 className="font-display font-semibold text-2xl text-primary mb-2">Q3 — Content usefulness</h3>
            <p className="font-sans text-lg text-primary mb-8">Did you learn something new about how screen time or distraction affects you?</p>
            <div className="flex flex-wrap gap-3">
              {["Yes, definitely", "Mostly yes", "Not really", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleScaleChange("q3", option)}
                  className={`px-6 py-3 rounded-full font-sans text-base transition-all ${
                    responses.q3 === option
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-primary hover:bg-slate-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Q4: Design & Layout */}
          <div className="border-b border-slate-200 pb-12">
            <h3 className="font-display font-semibold text-2xl text-primary mb-2">Q4 — Design & layout</h3>
            <p className="font-sans text-lg text-primary mb-8">How easy was it to navigate the website and find what you were looking for?</p>
            <div className="flex flex-wrap gap-3">
              {["Very easy", "Easy", "Neutral", "Difficult", "Very difficult"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleScaleChange("q4", option)}
                  className={`px-6 py-3 rounded-full font-sans text-base transition-all ${
                    responses.q4 === option
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-primary hover:bg-slate-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Q5: Visualisations */}
          <div className="border-b border-slate-200 pb-12">
            <h3 className="font-display font-semibold text-2xl text-primary mb-2">Q5 — Visualisations</h3>
            <p className="font-sans text-lg text-primary mb-8">The charts and interactive visuals helped me understand the information better.</p>
            <div className="flex flex-wrap gap-3">
              {["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleScaleChange("q5", option)}
                  className={`px-6 py-3 rounded-full font-sans text-base transition-all ${
                    responses.q5 === option
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-primary hover:bg-slate-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Q6: Relevance */}
          <div className="border-b border-slate-200 pb-12">
            <h3 className="font-display font-semibold text-2xl text-primary mb-2">Q6 — Relevance</h3>
            <p className="font-sans text-lg text-primary mb-8">How relevant did the content feel to your life as a student?</p>
            <div className="flex flex-wrap gap-3">
              {["Very relevant", "Somewhat relevant", "Not very relevant", "Not relevant at all"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleScaleChange("q6", option)}
                  className={`px-6 py-3 rounded-full font-sans text-base transition-all ${
                    responses.q6 === option
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-primary hover:bg-slate-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Q7: Standout Content */}
          <div className="border-b border-slate-200 pb-12">
            <h3 className="font-display font-semibold text-2xl text-primary mb-2">Q7 — Standout content</h3>
            <p className="font-sans text-lg text-primary mb-4 opacity-70">(optional)</p>
            <p className="font-sans text-lg text-primary mb-6">Which part of the website did you find most useful?</p>
            <textarea
              value={responses.q7}
              onChange={(e) => handleTextChange("q7", e.target.value)}
              placeholder="Share your thoughts..."
              rows={3}
              className="w-full px-6 py-4 border border-slate-300 rounded-[20px] font-sans text-lg text-primary placeholder:text-primary/30 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>

          {/* Q8: Suggestions */}
          <div className="border-b border-slate-200 pb-12">
            <h3 className="font-display font-semibold text-2xl text-primary mb-2">Q8 — Suggestions</h3>
            <p className="font-sans text-lg text-primary mb-4 opacity-70">(optional)</p>
            <p className="font-sans text-lg text-primary mb-6">Is there anything we should change or add?</p>
            <textarea
              value={responses.q8}
              onChange={(e) => handleTextChange("q8", e.target.value)}
              placeholder="Your suggestions..."
              rows={3}
              className="w-full px-6 py-4 border border-slate-300 rounded-[20px] font-sans text-lg text-primary placeholder:text-primary/30 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>

          {/* Hear Back */}
          <div className="pb-12">
            <h3 className="font-display font-semibold text-2xl text-primary mb-2">Want to hear back?</h3>
            <p className="font-sans text-lg text-primary mb-4 opacity-70">(optional)</p>
            <p className="font-sans text-lg text-primary mb-6">If you want a response from us, share your email below.</p>
            <input
              type="email"
              value={responses.email}
              onChange={(e) => handleTextChange("email", e.target.value)}
              placeholder="your@email.com"
              className="w-full px-6 py-4 border border-slate-300 rounded-[20px] font-sans text-lg text-primary placeholder:text-primary/30 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white font-display font-semibold text-xl px-10 py-4 rounded-full hover:bg-opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit Feedback"}
          </button>

          {submitMessage && (
            <p className="text-center font-sans text-lg text-primary">
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
