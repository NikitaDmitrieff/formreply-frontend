"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Types & constants                                                   */
/* ------------------------------------------------------------------ */

const INQUIRY_TYPES = [
  "Pricing Request",
  "Support Issue",
  "Meeting Request",
  "Partnership Inquiry",
  "General Question",
  "Job Application",
  "Feedback/Complaint",
] as const;
type InquiryType = (typeof INQUIRY_TYPES)[number];

const TONES = ["Professional", "Friendly", "Casual"] as const;
type Tone = (typeof TONES)[number];

/* ------------------------------------------------------------------ */
/*  Template generation                                                 */
/* ------------------------------------------------------------------ */

interface TemplateVars {
  companyName: string;
  yourName: string;
}

function getGreeting(tone: Tone): string {
  return tone === "Professional"
    ? "Dear [Name],"
    : tone === "Friendly"
    ? "Hi [Name]!"
    : "Hey [Name],";
}

function getSignoff(tone: Tone, yourName: string): string {
  const name = yourName || "[Your Name]";
  if (tone === "Professional") return `Best regards,\n${name}`;
  if (tone === "Friendly") return `Best,\n${name}`;
  return `Cheers,\n${name}`;
}

function generateTemplates(
  inquiryType: InquiryType,
  tone: Tone,
  vars: TemplateVars
): string[] {
  const co = vars.companyName || "[Your Company]";
  const greeting = getGreeting(tone);
  const signoff = getSignoff(tone, vars.yourName);

  const templates: Record<InquiryType, Record<Tone, string[]>> = {
    "Pricing Request": {
      Professional: [
        `${greeting}\n\nThank you for your interest in ${co}. I appreciate you reaching out about our pricing.\n\nOur plans are designed to scale with your needs. To provide you with the most accurate quote, I'd like to understand a few things:\n\n- How many team members would be using the product?\n- Which features are most important to your workflow?\n- Do you have a timeline in mind for getting started?\n\nOnce I have a better picture of your requirements, I can put together a tailored proposal. I'm also happy to schedule a brief call to walk you through our options.\n\n${signoff}`,
        `${greeting}\n\nThank you for reaching out regarding pricing at ${co}.\n\nWe offer several tiers to match different business needs, starting from our Starter plan. Rather than sending a generic price list, I'd prefer to understand your specific situation so I can recommend the right fit.\n\nWould you have 15 minutes this week for a quick call? I can walk you through the options and answer any questions in real time. Alternatively, feel free to share more about your use case and I'll follow up with a detailed proposal.\n\n${signoff}`,
        `${greeting}\n\nI appreciate your inquiry about ${co}'s pricing structure.\n\nWe believe in transparent pricing that reflects the value we deliver. Our packages range from individual plans to enterprise solutions, and each includes a 14-day free trial so you can evaluate the fit before committing.\n\nI'd be happy to send over a detailed breakdown tailored to your needs. Could you share a bit more about the size of your team and your primary use case? That way, I can ensure the quote reflects exactly what you need — nothing more, nothing less.\n\n${signoff}`,
      ],
      Friendly: [
        `${greeting}\n\nThanks for reaching out about pricing at ${co} — great to hear from you!\n\nWe've got a few different plans depending on what you need. Rather than throwing numbers at you, I'd love to learn a bit about what you're looking for so I can point you to the best option.\n\nA few quick questions:\n- How big is your team?\n- What's the main problem you're trying to solve?\n- Any budget range in mind?\n\nHappy to hop on a quick call too if that's easier!\n\n${signoff}`,
        `${greeting}\n\nThanks so much for your interest in ${co}!\n\nI'd love to help you find the right plan. We keep our pricing straightforward — no hidden fees or surprise charges. The best way to get you an accurate quote is to understand what you actually need.\n\nWant to grab a 15-minute call this week? I can walk you through everything and answer questions on the spot. If you prefer email, just let me know your team size and top priorities and I'll send over a recommendation.\n\n${signoff}`,
        `${greeting}\n\nSo glad you're interested in what we're building at ${co}!\n\nPricing really depends on your setup, but I can tell you we work hard to keep things fair and flexible. We also offer a free trial so you can test drive everything before deciding.\n\nTell me a bit more about what you're working on, and I'll put together something that makes sense for you. No pressure, no hard sell — just honest recommendations.\n\n${signoff}`,
      ],
      Casual: [
        `${greeting}\n\nThanks for asking about pricing! Happy to help.\n\nIt really depends on what you need — we've got a few options. Quick questions:\n- How many people on your team?\n- What are you mainly looking to use ${co} for?\n\nShoot me those details and I'll get you a number. Or we can jump on a quick call if you prefer.\n\n${signoff}`,
        `${greeting}\n\nHey, thanks for reaching out about pricing at ${co}!\n\nWe try to keep things simple — a few plans, no weird hidden costs. The easiest way to figure out what works is a quick 10-minute chat. I can walk you through everything and answer any questions.\n\nWant to pick a time this week? Or just tell me a bit about what you need and I'll send over the details.\n\n${signoff}`,
        `${greeting}\n\nThanks for the message! Pricing is one of those "it depends" things, but I promise we keep it straightforward.\n\nWe've also got a free trial, so you can try things out before committing to anything. Tell me a bit about your situation and I'll point you in the right direction — no sales pitch, just the info you need.\n\n${signoff}`,
      ],
    },
    "Support Issue": {
      Professional: [
        `${greeting}\n\nThank you for bringing this to our attention. I understand how frustrating technical issues can be, and I want to help resolve this as quickly as possible.\n\nI've reviewed the details you provided and have a few questions to help me diagnose the issue:\n\n1. When did you first notice this problem?\n2. Does it occur consistently, or intermittently?\n3. Have you tried clearing your browser cache or using a different browser?\n\nIn the meantime, I've flagged this with our technical team. I'll provide you with an update within 24 hours, or sooner if we identify the root cause.\n\n${signoff}`,
        `${greeting}\n\nThank you for contacting ${co} support. I'm sorry to hear you're experiencing this issue.\n\nBased on your description, this may be related to a known configuration matter that we can resolve quickly. Could you please provide:\n\n- Your account email or ID\n- A screenshot of the error (if applicable)\n- The browser and device you're using\n\nOnce I have these details, I can escalate this to the appropriate team and work toward a resolution. You can expect a follow-up from me within one business day.\n\n${signoff}`,
        `${greeting}\n\nI appreciate you taking the time to report this issue. Ensuring a smooth experience with ${co} is our top priority.\n\nI'd like to begin troubleshooting right away. To help me investigate:\n\n- Could you walk me through the exact steps that lead to the issue?\n- Is this affecting just your account, or have other team members noticed it as well?\n\nIf this is time-sensitive, please don't hesitate to let me know and I'll prioritize accordingly. I'm committed to getting this resolved for you.\n\n${signoff}`,
      ],
      Friendly: [
        `${greeting}\n\nSorry you're running into trouble — let's get this sorted out!\n\nFrom what you described, I have a couple of ideas about what might be going on. Could you tell me:\n\n- When did it start happening?\n- Does it happen every time, or just sometimes?\n- Any error messages popping up?\n\nI'm going to dig into this right away. I'll get back to you as soon as I have answers — hopefully within a few hours!\n\n${signoff}`,
        `${greeting}\n\nOh no, sorry about that! I totally get how annoying that must be.\n\nLet me look into this for you. A quick screenshot or screen recording would be super helpful if you can grab one. Also, let me know what browser you're on and I'll try to reproduce it on my end.\n\nI'll keep you posted — expect to hear from me soon!\n\n${signoff}`,
        `${greeting}\n\nThanks for letting us know about this — we want to make sure everything works smoothly for you!\n\nI've taken a quick look and have a couple of things to try. First, could you try logging out and back in? Sometimes that clears things up. If that doesn't work, send me the details of what you see and I'll get our team on it right away.\n\nWe'll get this fixed!\n\n${signoff}`,
      ],
      Casual: [
        `${greeting}\n\nUgh, sorry about that. Let's fix this.\n\nCan you tell me a bit more about what's happening? A screenshot would be awesome if you have one handy. Also:\n- What browser are you using?\n- When did it start?\n\nI'll look into it and get back to you ASAP.\n\n${signoff}`,
        `${greeting}\n\nThanks for flagging this — definitely not the experience we want you to have.\n\nQuick thing to try: clear your cache and refresh. If that doesn't help, shoot me a screenshot and I'll dig in. I'll keep you in the loop once I know more.\n\n${signoff}`,
        `${greeting}\n\nSorry you're dealing with this. Let me take a look.\n\nA couple quick questions: when did it start, and does it happen every time? If you can send a screenshot, even better. I'll get on this right away and circle back with you.\n\n${signoff}`,
      ],
    },
    "Meeting Request": {
      Professional: [
        `${greeting}\n\nThank you for your interest in scheduling a meeting with ${co}. I'd be pleased to find a time that works for both of us.\n\nTo make our conversation as productive as possible, could you share:\n\n- Your preferred dates and times (including your timezone)?\n- The primary topics you'd like to cover?\n- Whether you'd prefer a video call, phone call, or in-person meeting?\n\nAlternatively, feel free to book a time directly on my calendar: [calendar link]\n\nI look forward to speaking with you.\n\n${signoff}`,
        `${greeting}\n\nI appreciate you reaching out to arrange a meeting. I'd welcome the opportunity to discuss how ${co} can be of service.\n\nI have availability this week on [day] and [day] between 10am and 4pm EST. If those don't work, I'm happy to find an alternative. Please let me know your timezone and preferred format (video or phone), and I'll send over a calendar invite.\n\nLooking forward to connecting.\n\n${signoff}`,
        `${greeting}\n\nThank you for requesting a meeting with our team at ${co}.\n\nTo ensure we cover everything efficiently, I'd like to prepare ahead of time. Could you share a brief agenda or the key questions you'd like to address? This way, I can have the right information — and potentially the right people — ready for our call.\n\nPlease suggest a few time slots that work for you, and I'll confirm promptly.\n\n${signoff}`,
      ],
      Friendly: [
        `${greeting}\n\nThanks for reaching out — I'd love to chat!\n\nI'm pretty flexible this week. What days and times work best for you? And do you prefer Zoom, Google Meet, or a good old phone call?\n\nIf it's easier, here's my calendar link: [calendar link]. Just grab whatever slot works!\n\nLooking forward to it!\n\n${signoff}`,
        `${greeting}\n\nGreat to hear from you! I'd be happy to set up a meeting.\n\nWhat would you like to talk about? That way I can make sure I come prepared with everything you need. I'm generally available [days] — just let me know what works and I'll send a calendar invite!\n\n${signoff}`,
        `${greeting}\n\nAbsolutely, let's set something up! I'm always happy to connect.\n\nHow does a 30-minute call sound? I've got openings this week — just let me know your timezone and preferred time, and I'll make it happen. If you want to skip the back-and-forth, feel free to pick a slot here: [calendar link]\n\nTalk soon!\n\n${signoff}`,
      ],
      Casual: [
        `${greeting}\n\nSure, let's chat! I'm free [days] this week — what works for you?\n\nZoom or phone — your pick. Or just grab a time here: [calendar link]\n\nTalk soon!\n\n${signoff}`,
        `${greeting}\n\nYeah, I'd be down for a call! What's it about? Just want to make sure I'm prepared.\n\nI'm pretty open this week. Send me a couple of times and I'll lock one in.\n\n${signoff}`,
        `${greeting}\n\nLet's do it! I'm around most of this week. Pick a time that works and I'll be there.\n\nQuick heads up — what are you hoping to cover? That way I won't waste your time rambling about the wrong stuff.\n\n${signoff}`,
      ],
    },
    "Partnership Inquiry": {
      Professional: [
        `${greeting}\n\nThank you for your interest in exploring a partnership with ${co}. We're always open to collaborations that create mutual value.\n\nTo evaluate the potential fit, I'd appreciate if you could share:\n\n- A brief overview of your company and your core offering\n- The type of partnership you envision (referral, integration, co-marketing, etc.)\n- The audience or market you serve\n- Any specific outcomes you're hoping to achieve\n\nOnce I review these details, I'll set up a call with the right person on our team to discuss next steps.\n\n${signoff}`,
        `${greeting}\n\nI appreciate you reaching out about a potential partnership. Collaboration is something we take seriously at ${co}, and we're selective about ensuring strong alignment.\n\nCould you provide a brief proposal or overview of what you have in mind? Specifically, I'd like to understand the value proposition for both sides and any relevant metrics or case studies from similar partnerships you've executed.\n\nI'll review the details and get back to you within 3 business days with our assessment.\n\n${signoff}`,
        `${greeting}\n\nThank you for considering ${co} as a potential partner. We've found that the best partnerships start with a clear understanding of shared goals.\n\nI'd like to propose a brief introductory call where we can both share our vision and explore whether there's a natural fit. Before we schedule, could you send a one-pager or link to your company so I can familiarize myself with your work?\n\nLooking forward to learning more about what you're building.\n\n${signoff}`,
      ],
      Friendly: [
        `${greeting}\n\nThanks for reaching out about working together — always exciting to explore new partnerships!\n\nI'd love to hear more about what you have in mind. Could you tell me:\n- What does your company do?\n- What kind of partnership are you thinking (integrations, co-marketing, referrals)?\n- What would success look like for you?\n\nOnce I know a bit more, I can loop in the right people on our end. Excited to explore this!\n\n${signoff}`,
        `${greeting}\n\nLove that you're thinking about partnering up with ${co}! We're always on the lookout for great collaborations.\n\nThe best first step is usually a quick call so we can both share what we're about and see if there's a fit. Send me a link to your site and a couple of sentences about what you're envisioning, and I'll get something on the calendar.\n\nLooking forward to it!\n\n${signoff}`,
        `${greeting}\n\nThis sounds interesting — thanks for thinking of ${co}!\n\nWe've done some great partnerships in the past, and the ones that work best are the ones where both sides genuinely benefit. Tell me a bit about your audience and what you're hoping to achieve, and I'll see if we can make something work.\n\nWould a 20-minute call next week make sense?\n\n${signoff}`,
      ],
      Casual: [
        `${greeting}\n\nCool, thanks for reaching out about working together!\n\nTell me more about what you're thinking. What does your company do, and what kind of collab are you imagining? Once I get the picture, I can figure out if there's a fit and who you should talk to on our end.\n\n${signoff}`,
        `${greeting}\n\nHey, partnership stuff is always fun to explore. What did you have in mind?\n\nShoot me a quick overview of your company and the kind of thing you're thinking. If it clicks, we'll set up a call and go from there.\n\n${signoff}`,
        `${greeting}\n\nThanks for thinking of us! I'm curious — what kind of partnership are you imagining?\n\nSend me a link to your site and a quick summary of the idea. If it sounds like a fit, I'll connect you with the right person here at ${co}.\n\n${signoff}`,
      ],
    },
    "General Question": {
      Professional: [
        `${greeting}\n\nThank you for reaching out to ${co}. I'm happy to help answer your question.\n\nBased on your inquiry, here's what I can share:\n\n[Your answer here]\n\nIf you need additional information or have follow-up questions, please don't hesitate to ask. I'm here to help.\n\nYou might also find our help center useful: [help center link]\n\n${signoff}`,
        `${greeting}\n\nI appreciate you contacting us. That's a great question.\n\nHere's what you need to know:\n\n[Your answer here]\n\nIf this doesn't fully address your question, I'd be happy to schedule a brief call to discuss in more detail. Otherwise, feel free to reply to this email with any follow-ups.\n\n${signoff}`,
        `${greeting}\n\nThank you for your inquiry. I want to make sure I give you a thorough answer.\n\nTo address your question:\n\n[Your answer here]\n\nFor additional resources, I'd recommend checking out our documentation at [link] or our FAQ page. If you need anything else, I'm just an email away.\n\n${signoff}`,
      ],
      Friendly: [
        `${greeting}\n\nThanks for reaching out — happy to help!\n\nGreat question. Here's the deal:\n\n[Your answer here]\n\nDoes that cover it? If you have more questions, just ask — I'm here!\n\n${signoff}`,
        `${greeting}\n\nThanks for getting in touch with ${co}!\n\nI've got you covered. Here's what you need to know:\n\n[Your answer here]\n\nIf that raises more questions (it happens!), just reply and I'll help you out. We also have a handy help center at [link] if you like to explore on your own.\n\n${signoff}`,
        `${greeting}\n\nGlad you asked! Let me help you out.\n\nHere's my best answer:\n\n[Your answer here]\n\nHope that helps! If not, I'm happy to dig deeper. Just let me know.\n\n${signoff}`,
      ],
      Casual: [
        `${greeting}\n\nGood question! Here's what I've got:\n\n[Your answer here]\n\nLet me know if that answers it. Happy to explain more if needed.\n\n${signoff}`,
        `${greeting}\n\nThanks for asking! Quick answer:\n\n[Your answer here]\n\nNeed more detail? Just reply and I'll fill you in.\n\n${signoff}`,
        `${greeting}\n\nHey, thanks for reaching out. Here's the short version:\n\n[Your answer here]\n\nIf you want the long version, I'm happy to chat more. Just let me know.\n\n${signoff}`,
      ],
    },
    "Job Application": {
      Professional: [
        `${greeting}\n\nThank you for your interest in joining ${co}. We appreciate you taking the time to apply.\n\nWe've received your application and our hiring team will review it thoroughly. Our typical review process takes 5-7 business days. If your qualifications align with the role, we'll reach out to schedule an initial conversation.\n\nIn the meantime, I encourage you to learn more about our culture and team on our website. If you have any questions about the process, please don't hesitate to reach out.\n\n${signoff}`,
        `${greeting}\n\nThank you for applying to ${co}. We're glad our mission resonates with you.\n\nI want to set clear expectations: we review every application carefully, which means our process takes approximately one week. We'll be in touch regardless of the outcome — you won't be left wondering.\n\nIf you'd like to share any additional materials (portfolio, references, or anything else you think is relevant), feel free to reply to this email.\n\nWe appreciate your patience and interest.\n\n${signoff}`,
        `${greeting}\n\nI wanted to personally acknowledge your application to ${co}. We know job searching takes effort, and we respect the time you've invested.\n\nOur team will review your qualifications against the role requirements and reach out within the next 7 business days with next steps. If selected for an interview, you can expect a 30-minute initial call followed by a more in-depth conversation with the team.\n\nThank you again for considering ${co}.\n\n${signoff}`,
      ],
      Friendly: [
        `${greeting}\n\nThanks so much for applying to ${co} — it's awesome to see you're interested in what we're doing!\n\nWe've got your application and our team will be reviewing it soon. We try to get back to everyone within about a week. If you're a good fit, we'll reach out to set up a chat.\n\nIn the meantime, feel free to check out our blog and social channels to get a feel for the team. And if you have questions, just ask!\n\n${signoff}`,
        `${greeting}\n\nWe got your application — thanks for applying!\n\nWe're a small team, which means we read every single application personally. We'll be in touch within a week either way, so you won't be left hanging.\n\nIf there's anything else you want us to see (projects, portfolio, blog posts), feel free to send them over!\n\n${signoff}`,
        `${greeting}\n\nThanks for throwing your hat in the ring at ${co}! We appreciate the interest.\n\nOur hiring process is pretty straightforward: we review applications, have a casual intro chat, then a deeper conversation with the team. We'll reach out soon to let you know where things stand.\n\nFingers crossed!\n\n${signoff}`,
      ],
      Casual: [
        `${greeting}\n\nThanks for applying! We got your info and we'll take a good look.\n\nWe usually get back to people within a week. If it's a fit, we'll set up a chat. Pretty low-key process — no whiteboard interviews or anything scary.\n\nSit tight and we'll be in touch!\n\n${signoff}`,
        `${greeting}\n\nHey, thanks for your interest in ${co}! We've got your application.\n\nWe'll review it this week and circle back. If there's anything else you want to share (projects, links, etc.), just reply here.\n\nTalk soon!\n\n${signoff}`,
        `${greeting}\n\nGot your application — thanks! We'll check it out and get back to you within a week or so.\n\nIf you want to send anything else along (portfolio, GitHub, whatever), feel free. No pressure though.\n\n${signoff}`,
      ],
    },
    "Feedback/Complaint": {
      Professional: [
        `${greeting}\n\nThank you for taking the time to share your feedback with ${co}. We take all feedback seriously, and your experience matters to us.\n\nI've reviewed the details you provided, and I want you to know that I understand your frustration. Here's what we're going to do:\n\n1. I'm escalating this to our [relevant team] for immediate review\n2. We'll investigate the root cause and implement a fix\n3. I'll follow up with you within 48 hours with a concrete update\n\nIn the meantime, if there's anything I can do to improve your experience right now, please let me know. Your satisfaction is our priority.\n\n${signoff}`,
        `${greeting}\n\nI appreciate your candid feedback regarding your experience with ${co}. Hearing where we fall short is essential to our improvement.\n\nYour concerns are valid, and I want to assure you they won't be overlooked. I've logged this with our team and will personally ensure it receives attention.\n\nWould it be helpful to schedule a call so I can better understand the full scope of your experience? I want to make sure we address everything properly, not just the surface issue.\n\nThank you for giving us the opportunity to make this right.\n\n${signoff}`,
        `${greeting}\n\nThank you for sharing this feedback. I understand this wasn't the experience you expected from ${co}, and I apologize for the inconvenience.\n\nWe hold ourselves to a high standard, and your feedback highlights an area where we need to do better. I've shared your comments with the relevant team and asked them to prioritize a resolution.\n\nYou'll hear back from me within [timeframe] with an update. In the meantime, please don't hesitate to reach out if there's anything else I can help with.\n\n${signoff}`,
      ],
      Friendly: [
        `${greeting}\n\nFirst off — thanks for telling us about this. I know it's not fun to send a complaint, and we genuinely appreciate you taking the time.\n\nI hear you, and I'm sorry this happened. That's not the experience we want anyone to have at ${co}. Let me dig into this and figure out what went wrong.\n\nI'll get back to you within a day or two with an update. If there's anything I can do right now to help, just say the word.\n\n${signoff}`,
        `${greeting}\n\nThanks for being honest with us — we'd much rather hear about problems than have people quietly walk away.\n\nI'm sorry about what happened. I'm going to look into this personally and make sure we sort it out. You deserve a better experience, and we're going to make sure you get one.\n\nExpect to hear from me soon with a real update — not just a "we're looking into it" email.\n\n${signoff}`,
        `${greeting}\n\nI really appreciate you sharing this. Feedback — even the tough kind — is how we get better.\n\nI'm sorry you had this experience with ${co}. I've flagged it with the team, and we're going to address it. I'll personally follow up within 48 hours to let you know what we've done.\n\nIs there anything I can do for you right now?\n\n${signoff}`,
      ],
      Casual: [
        `${greeting}\n\nThanks for letting us know — sorry you had a rough experience. That's not what we're going for.\n\nI'm going to look into what happened and get back to you soon. If there's anything I can fix right now, just tell me.\n\n${signoff}`,
        `${greeting}\n\nAppreciate the honesty. Sorry about this — we dropped the ball and I want to make it right.\n\nI'll dig into it and follow up within a couple days with an actual update. In the meantime, let me know if there's anything I can do.\n\n${signoff}`,
        `${greeting}\n\nThanks for the feedback. I'm sorry about the experience — definitely not our standard.\n\nI've flagged it with the team. We'll look into it and I'll circle back with what we find. Appreciate your patience.\n\n${signoff}`,
      ],
    },
  };

  return templates[inquiryType][tone];
}

/* ------------------------------------------------------------------ */
/*  Page component                                                      */
/* ------------------------------------------------------------------ */

export default function EmailTemplateGeneratorPage() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("Pricing Request");
  const [tone, setTone] = useState<Tone>("Professional");
  const [companyName, setCompanyName] = useState("");
  const [yourName, setYourName] = useState("");
  const [templates, setTemplates] = useState<string[]>([]);
  const [generating, setGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handler = () => {
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setShowStickyCta(scrollPercent > 0.3);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setTemplates(
        generateTemplates(inquiryType, tone, { companyName, yourName })
      );
      setGenerating(false);
    }, 600);
  };

  const handleCopy = (index: number) => {
    navigator.clipboard.writeText(templates[index]);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 py-3 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-gray-900"
          >
            <Image src="/logo.png" alt="FormReply" width={24} height={24} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/tools"
              className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors hidden sm:block"
            >
              Free tools
            </Link>
            <Link
              href="/onboarding"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          Free tool — no signup required
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Email Template Generator
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
          Generate professional reply templates for common contact form
          inquiries. Pick your inquiry type and tone, get 3 ready-to-use
          templates instantly.
        </p>
      </section>

      {/* Tool */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          {/* Input form */}
          <div className="space-y-4 mb-6">
            {/* Inquiry type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Inquiry type
              </label>
              <select
                value={inquiryType}
                onChange={(e) => {
                  setInquiryType(e.target.value as InquiryType);
                  setTemplates([]);
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              >
                {INQUIRY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Tone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tone
              </label>
              <div className="flex gap-2">
                {TONES.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTone(t);
                      setTemplates([]);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      tone === t
                        ? "bg-indigo-600 text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Company + Name */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Company / business name
                  <span className="text-gray-400 font-normal"> (optional)</span>
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Acme Inc."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your name
                  <span className="text-gray-400 font-normal"> (optional)</span>
                </label>
                <input
                  type="text"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                  placeholder="e.g. Sarah Chen"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={generating}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {generating ? "Generating templates..." : "Generate 3 Templates"}
          </button>

          {/* Output */}
          {templates.length > 0 && (
            <div className="mt-6 space-y-4">
              {templates.map((tmpl, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-700">
                      Template {i + 1}
                    </h3>
                    <button
                      onClick={() => handleCopy(i)}
                      className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                      {copiedIndex === i ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">
                      {tmpl}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      {templates.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Want personalized replies for every form submission — automatically?
            </h2>
            <p className="text-gray-600 text-sm mb-6 max-w-lg mx-auto">
              Templates are a great start, but every inquiry is different.
              FormReply reads each Typeform submission and drafts a unique,
              personalized reply in your tone — delivered to your inbox in ~10
              seconds. No templates needed.
            </p>
            <Link
              href="/onboarding"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-sm"
            >
              Start free 14-day trial →
            </Link>
            <p className="text-xs text-gray-400 mt-3">
              No card required · 5 free replies/month forever
            </p>
          </div>
        </section>
      )}

      {/* SEO content */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why you need email templates for contact form replies
          </h2>
          <div className="prose prose-gray prose-sm max-w-none text-gray-600 space-y-4">
            <p>
              Every contact form submission is a potential customer, partner, or
              hire reaching out to your business. How you respond — and how
              quickly — shapes their first impression. Yet most businesses either
              reply with a generic auto-responder or take days to craft a manual
              response.
            </p>
            <p>
              Email reply templates bridge the gap. They give you a{" "}
              <strong>professional starting point</strong> that you can
              personalize in seconds, cutting your response time from hours to
              minutes while maintaining quality and consistency.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              Best practices for contact form reply templates
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Match the tone to your brand.</strong> A law firm and a
                creative agency shouldn&apos;t sound the same. Choose a tone that
                reflects who you are.
              </li>
              <li>
                <strong>Address the specific inquiry type.</strong> A pricing
                request needs different information than a support issue.
                Generic &quot;thanks for reaching out&quot; emails feel impersonal.
              </li>
              <li>
                <strong>Include a clear next step.</strong> Every reply should
                guide the reader toward an action — book a call, provide more
                details, or try your product.
              </li>
              <li>
                <strong>Keep it concise.</strong> Three to four short paragraphs
                is the sweet spot. People scan emails, they don&apos;t read novels.
              </li>
              <li>
                <strong>Personalize the placeholders.</strong> Templates with
                [Name] and [Your Company] are starting points. Always swap in
                real details before sending.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              Common inquiry types and how to handle them
            </h3>
            <p>
              <strong>Pricing requests</strong> are your hottest leads — respond
              fast and ask qualifying questions rather than sending a price
              list. <strong>Support issues</strong> need empathy first, then a
              clear path to resolution. <strong>Meeting requests</strong> should
              minimize back-and-forth by offering specific times or a calendar
              link.
            </p>
            <p>
              <strong>Partnership inquiries</strong> require you to evaluate fit
              before committing time — ask for a brief overview.{" "}
              <strong>Job applications</strong> deserve a human acknowledgment,
              not radio silence. And <strong>feedback or complaints</strong> are
              opportunities to turn a negative experience into loyalty.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              From templates to fully automated replies
            </h3>
            <p>
              Templates save time, but they still require manual work: you read
              the submission, pick a template, personalize it, and send it.
              That&apos;s where automation changes the game.
            </p>
            <p>
              <Link
                href="/onboarding"
                className="text-indigo-600 hover:underline font-medium"
              >
                FormReply
              </Link>{" "}
              connects to your Typeform and generates a fully personalized,
              context-aware reply for every submission — automatically. No
              template picking, no copy-pasting. Just a draft in your inbox
              within 10 seconds, ready to review and send.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-gray-900"
          >
            <Image src="/logo.png" alt="FormReply" width={22} height={22} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="/blog"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/tools/reply-generator"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Reply Generator
            </Link>
            <Link
              href="/tools/form-spam-checker"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Spam Checker
            </Link>
            <Link
              href="/tools/response-time-calculator"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Response Time
            </Link>
            <Link
              href="/tools/email-template-generator"
              className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
            >
              Email Templates
            </Link>
            <Link
              href="/support"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Support
            </Link>
            <Link
              href="/privacy-and-tos"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Privacy & Terms
            </Link>
            <p className="text-sm text-gray-400">&copy; 2026 FormReply</p>
          </div>
        </div>
      </footer>

      {/* Sticky bottom CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 py-3 px-6 transition-all duration-300 ${
          showStickyCta
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <p className="text-sm text-gray-600 hidden sm:block">
            <strong>Skip the templates.</strong> FormReply writes personalized
            replies to every submission automatically.
          </p>
          <Link
            href="/onboarding"
            className="shrink-0 bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Try free →
          </Link>
        </div>
      </div>
    </main>
  );
}
