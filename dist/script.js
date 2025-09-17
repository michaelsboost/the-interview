function cardGame() {
  return {
    cardFlipped: false,
    cardsAnswered: 0,
    totalCards: 0,
    selectedCategory: null,
    currentCard: { question: "Click next card to begin", category: "Getting Started" },
    currentCategory: "Getting Started",

    // NEW: Interview categories
    categories: [
      "First Date",
      "Job Interview – Behavioral",
      "Job Interview – Role Fit",
      "Apartment Application (to Landlord)",
      "College/Scholarship Interview",
      "Client Discovery (Freelance)",
      "Roommate Compatibility",
      "Startup Pitch / Investor",
      "Performance Review Prep",
      "Networking Events",
      "Parent-Teacher Conferences",
      "Visa/Immigration Interviews",
      "Therapy/Coaching Prep",
      "Conflict Resolution (Personal or Professional)",
      "Public Speaking – Beginner",
      "Public Speaking – Intermediate",
      "Public Speaking – Advanced",
      "Mentorship or Leadership Conversations"
    ],

    // Quick coaching reminders per category
    categoryTips: {
      "Job Interview – Behavioral": "Use STAR: Situation, Task, Action, Result.",
      "Job Interview – Role Fit": "Highlight skills, tools, outcomes, and why this role.",
      "First Date": "Be curious; ask follow-ups; share briefly then ask back.",
      "Apartment Application (to Landlord)": "Be transparent about income, references, and expectations.",
      "College/Scholarship Interview": "Show mission fit, impact, and growth mindset.",
      "Client Discovery (Freelance)": "Clarify goals, scope, budget, timeline, success metrics.",
      "Roommate Compatibility": "Align on cleanliness, quiet hours, guests, bills.",
      "Startup Pitch / Investor": "State problem, solution, traction, market, moat, ask.",
      "Performance Review Prep": "Use data, outcomes, and ‘start/stop/continue’ to frame impact.",
      "Networking Events": "Keep it concise; end with a clear ask and a follow-up plan.",
      "Parent-Teacher Conferences": "Listen actively, share specifics, align on one clear next step.",
      "Visa/Immigration Interviews": "Be concise, truthful, and ready with dates and documents.",
      "Therapy/Coaching Prep": "Be honest, specific, and focus on feelings—not just events.",
      "Conflict Resolution (Personal or Professional)": "Name facts, state impact, propose a specific next step.",
      "Public Speaking – Beginner": "Open strong, speak plainly, one clear takeaway.",
      "Public Speaking – Intermediate": "Anticipate tough questions; use data, stories, and pauses.",
      "Public Speaking – Advanced": "Lead with values, address objections, land a specific ask.",
      "Mentorship or Leadership Conversations": "Listen deeply, set one clear next action, review outcomes."
    },

    askedQuestions: {},
    availableQuestions: {},
    allAskedQuestions: new Set(),

    // QUESTION BANK (25 per category)
    questions: [
      {
        category: "First Date",
        questions: [
          "What kind of week restores you—quiet recovery or active plans? Why?",
          "What does a healthy relationship look like day-to-day for you?",
          "How do you prefer to handle conflict when it shows up?",
          "What are you optimizing for in life this year?",
          "What’s a boundary that matters to you and why?",
          "How do you like to give and receive affection?",
          "What’s your relationship with money and budgeting?",
          "What’s a non-negotiable health habit for you?",
          "Tell me about a friendship you’re proud of—what makes it work?",
          "What role does family play in your decisions?",
          "Describe a weekend that would feel perfect to you.",
          "Where have your values stayed the same—even as you’ve changed?",
          "What’s something you’re learning right now and why?",
          "How do you recharge after a stressful day?",
          "What does commitment mean to you at this stage of life?",
          "How do you like to celebrate small wins?",
          "What’s a deal-breaker for you, and what’s a negotiable?",
          "How do you balance independence with togetherness?",
          "What traditions or routines matter to you?",
          "How do you approach faith, spirituality, or meaning?",
          "What’s your stance on kids, pets, or neither?",
          "How do you think about career vs. lifestyle tradeoffs?",
          "What’s a past relationship lesson you’re grateful for?",
          "What does trust look like in practice to you?",
          "What would make this first date feel successful to you?"
        ]
      },
      {
        category: "Job Interview – Behavioral",
        questions: [
          "Describe a time you had to learn something fast to deliver. (STAR)",
          "Tell me about a conflict with a teammate and how you resolved it.",
          "Give an example of taking ownership when things went wrong.",
          "When did you influence without formal authority? What happened?",
          "Describe a time you made a process faster or cheaper with measurable impact.",
          "Tell me about a decision you made with incomplete data.",
          "Share a time you received tough feedback and what you changed.",
          "When did you set an ambitious goal and miss? What did you learn?",
          "Describe a project you led end-to-end. What was the outcome?",
          "Tell me about helping a struggling colleague succeed.",
          "When did you simplify something complex for a non-expert audience?",
          "What’s a risk you took that paid off? How did you de-risk it?",
          "Describe a time you managed competing priorities successfully.",
          "Tell me about a mistake you made and how you addressed it.",
          "When did you innovate under constraints?",
          "Describe a situation where you improved team communication.",
          "Tell me about handling an unhappy customer or stakeholder.",
          "When did you have to say no? How did you communicate it?",
          "Describe a time you automated or eliminated low-value work.",
          "Tell me about leading through change or ambiguity.",
          "When did you mentor or coach someone to growth?",
          "Describe a time you advocated for quality under deadline pressure.",
          "Tell me about resolving a cross-functional misalignment.",
          "When did you measure impact effectively? What metrics?",
          "Describe a time you anticipated a problem and prevented it."
        ]
      },
      {
        category: "Job Interview – Role Fit",
        questions: [
          "Why this role, at this company, right now?",
          "What outcomes would you aim to deliver in the first 90 days?",
          "Which tools or techniques are your strongest, and where are you leveling up?",
          "How do you prioritize when everything feels urgent?",
          "Describe your ideal manager relationship.",
          "What metrics would prove you’re successful in this role?",
          "Walk me through your process from intake to delivery.",
          "How do you stay current in your field?",
          "What tradeoffs do you consider when quality, speed, and cost conflict?",
          "What kind of team environment helps you do your best work?",
          "What’s a recent piece of work you’re proud of and why?",
          "What’s one blind spot you’re actively working on?",
          "How do you give and receive feedback?",
          "What motivates you day to day?",
          "How do you approach documentation and knowledge transfer?",
          "Describe your communication style with technical and non-technical audiences.",
          "What constraints help you do your best work—and which block you?",
          "How do you onboard to a new codebase/process/domain quickly?",
          "What would you do if your priorities changed mid-sprint/quarter?",
          "How do you evaluate whether a meeting is necessary or not?",
          "What do you need from leadership to succeed here?",
          "Where do you want to be in two years, and how does this role bridge you there?",
          "What’s your approach to testing/validation and quality assurance?",
          "How do you ensure accessibility, privacy, or compliance where relevant?",
          "What does success in the first week look like for you?"
        ]
      },
      {
        category: "Apartment Application (to Landlord)",
        questions: [
          "What’s your current housing situation and why are you moving?",
          "What’s your monthly income and typical income stability?",
          "Any pets, smokers, instruments, or special accommodations?",
          "What’s your preferred lease length and move-in date?",
          "How many occupants and how will bills be split?",
          "References from prior landlords or employers—who and for how long?",
          "How do you approach noise, quiet hours, and community rules?",
          "What’s your routine for cleanliness and trash management?",
          "Have you ever broken a lease? If so, what happened and what changed?",
          "What are your expectations for maintenance response times?",
          "How do you handle conflicts with neighbors?",
          "What would make this apartment feel like a long-term fit for you?",
          "Do you foresee frequent package deliveries or special parking needs?",
          "Any work-from-home requirements (quiet hours, internet speed)?",
          "How do you plan to handle rent payments (timing and method)?",
          "Do you carry renters insurance or plan to?",
          "Have you ever been evicted or had late payments? Context?",
          "Do you have any storage, bike, or accessibility needs?",
          "How often do you host gatherings, and what size?",
          "What utilities do you expect included vs. separate?",
          "Are there any repairs or upgrades you consider essential?",
          "How long do you imagine staying if things go well?",
          "Are you comfortable with periodic inspections as required?",
          "Can you provide proof of income and ID today?",
          "Anything else you want me to know as your potential landlord?"
        ]
      },
      {
        category: "College/Scholarship Interview",
        questions: [
          "Why this program and how does it fit your long-term goals?",
          "Tell me about a challenge that reshaped how you learn.",
          "What community or service impact are you most proud of?",
          "How will you contribute to campus life outside the classroom?",
          "Which class or project best shows your intellectual curiosity?",
          "Describe a time you changed your mind after new evidence.",
          "How do you handle competing priorities during exams or deadlines?",
          "What perspective or experience will you bring that we lack?",
          "Who mentors you and what have you changed because of them?",
          "What does leadership mean to you in practice?",
          "Where do you want to grow the most in the next year?",
          "If awarded this scholarship, what outcomes will it enable?",
          "How do you approach collaboration vs. independent work?",
          "Describe a meaningful failure and what it taught you.",
          "What ethical question interests you and why?",
          "Tell me about a time you served someone without recognition.",
          "What research or creative topic would you pursue here?",
          "How do you manage stress and well-being during heavy terms?",
          "What does being part of this institution’s mission mean to you?",
          "Which campus resources would you use immediately and how?",
          "How have you built inclusive communities in the past?",
          "What’s the most interesting thing you’ve read or watched recently?",
          "How do you plan to give back to this community as an alum?",
          "What question do you wish we’d asked you—and how would you answer?",
          "What makes you a uniquely strong fit for this opportunity?"
        ]
      },
      {
        category: "Client Discovery (Freelance)",
        questions: [
          "What problem are we solving and for whom (be specific)?",
          "How will you measure success in 3 and 12 months?",
          "What constraints (budget, timeline, compliance) should I know now?",
          "Who are the decision-makers and how do approvals work?",
          "What’s in scope vs. out of scope for v1?",
          "What prior attempts were made and what did/didn’t work?",
          "What existing assets (brand, code, data) can we leverage?",
          "What risks keep you up at night about this project?",
          "What does a great handoff look like at the end?",
          "Preferred cadence and channels for updates?",
          "If we need to trade scope for time/cost, what moves first?",
          "What would make you say, ‘This was absolutely worth it’?",
          "Who are the end users and what jobs are they hiring this for?",
          "What integrations or dependencies must we account for?",
          "Are there legal, security, or privacy requirements to bake in?",
          "What are the top 3 user stories we must nail?",
          "How will we validate assumptions before full build?",
          "What competitive alternatives do users have today?",
          "What internal stakeholders could block success and why?",
          "What does post-launch support look like?",
          "What analytics will we track on day one?",
          "What’s the realistic budget range and payment schedule?",
          "Are there brand tone/voice or accessibility standards?",
          "What’s the decision date to start, and who signs?",
          "If this goes extremely well, what’s next?"
        ]
      },
      {
        category: "Roommate Compatibility",
        questions: [
          "What’s your schedule (work, sleep, guests) most days?",
          "How do you split chores and what chores do you prefer?",
          "What’s your approach to shared items (condiments, TP, supplies)?",
          "How do you feel about overnight guests and frequency?",
          "Any allergies, dietary rules, or fragrances to consider?",
          "What’s your cleanliness standard for kitchen/bath?",
          "How will we split bills and track payments?",
          "Quiet hours you need on weekdays/weekends?",
          "What’s a roommate situation that worked well and why?",
          "How do you like to resolve tensions when they arise?",
          "What’s your policy on parties and noise?",
          "What’s the one thing you really need from a roommate?",
          "How do you handle shared spaces vs. private zones?",
          "Do you cook often and how do you manage fridge/freezer space?",
          "How do you manage packages, mail, and deliveries?",
          "What’s your approach to decorations or furniture choices?",
          "How do you feel about pets and pet care responsibilities?",
          "How do we handle cleaning supplies restock and costs?",
          "Any deal-breakers we should surface now?",
          "How do you travel—will you be away frequently?",
          "What’s your stance on thermostat settings and utilities?",
          "How do you handle unexpected guests or family visits?",
          "What’s your ideal way to communicate small issues?",
          "How do you prefer to celebrate holidays at home?",
          "If a conflict escalates, what’s our step-by-step plan?"
        ]
      },
      {
        category: "Startup Pitch / Investor",
        questions: [
          "What painful, frequent problem are you solving and for whom?",
          "Why now—what changed in the market, tech, or regulation?",
          "What’s your wedge and how does it expand to a large market?",
          "Why your team—unique insight or unfair advantage?",
          "What traction or signals validate demand?",
          "Unit economics: how do you make money and at what margins?",
          "Competitive landscape: why do you win and keep winning?",
          "Go-to-market: first three scalable channels and CAC/LTV expectations?",
          "What are the top two risks and how are you de-risking them?",
          "Roadmap next 12 months: milestones and capital plan.",
          "What’s the ask (amount, terms, use of funds)?",
          "What does a plausible path to profitability look like?",
          "What is your TAM/SAM/SOM and how did you size them?",
          "What retention or engagement metrics matter and current values?",
          "What does onboarding look like and where does it drop off?",
          "What is the moat—data, network effects, switching costs, IP?",
          "What is your pricing strategy and rationale?",
          "How do macro or regulatory trends create tailwinds or headwinds?",
          "What’s your hiring plan and key gaps in the team?",
          "What are the unit economics at scale vs. today?",
          "How will you deploy this round by milestone and risk?",
          "What’s the exit vision—remain independent or potential acquirers?",
          "What experiments are next to validate key assumptions?",
          "How do you prevent churn and drive expansion revenue?",
          "What’s the single biggest reason this startup will succeed?"
        ]
      },
      {
        category: "Performance Review Prep",
        questions: [
          "What’s your proudest accomplishment since your last review—outcome and impact?",
          "Which metrics best demonstrate your contribution this cycle?",
          "Describe a time you exceeded expectations. What changed as a result?",
          "Where did you fall short and what did you learn?",
          "What new skills/tools did you adopt and how did they help the team?",
          "Give an example of cross-functional collaboration that moved a goal forward.",
          "How did you prioritize when everything felt urgent?",
          "Tell me about feedback you implemented and the effect it had.",
          "What did you automate or streamline to save time or cost?",
          "How did you mentor, unblock, or level up a teammate?",
          "Describe a decision you made with incomplete info and how you de-risked it.",
          "What customer/stakeholder pain did you resolve and how do you know?",
          "Which goal from last review remains open and why?",
          "What experiment failed and what changed because of it?",
          "How did you contribute to team culture or process health?",
          "What will you stop, start, and continue next quarter?",
          "Where do you need manager/org support to be more effective?",
          "What role do you want in 6–12 months and what milestones lead there?",
          "How did you communicate progress—cadence, artifacts, clarity?",
          "What tradeoffs did you make between speed, quality, and scope?",
          "Which project best shows your ownership end-to-end?",
          "Where did you demonstrate leadership without formal authority?",
          "How have you grown in handling ambiguity or change?",
          "What measurable outcomes justify a raise or promotion conversation?",
          "What’s your top focus for the next 90 days and success criteria?"
        ]
      },
      {
        category: "Networking Events",
        questions: [
          "Give your 30-second intro—who you help and how.",
          "What’s the most interesting project you’re working on now?",
          "Which problem space do you care about and why?",
          "How do you describe your ideal collaborator or client?",
          "What’s a recent learning that changed your approach?",
          "Share one specific ask you have for this room.",
          "What kind of introductions would be most valuable to you?",
          "Which conference/talk/book shaped your thinking lately?",
          "How do you like people to follow up after meeting you?",
          "What’s a small win you’re celebrating this month?",
          "Which metric tells you you’re on the right track?",
          "What’s a common misconception about your field?",
          "If I introduced you to someone, what should I say about you?",
          "How do you evaluate whether a new connection is a fit to pursue?",
          "What’s a challenge you’re actively seeking advice on?",
          "What tools or workflows make your work meaningfully better?",
          "What signals tell you a project is worth committing to?",
          "How do you handle the ‘what do you do?’ question in casual settings?",
          "What kind of problems do people come to you to solve?",
          "What’s a talk or post you could give tomorrow and nail?",
          "How do you prefer to add value to a new connection?",
          "What’s your follow-up plan after this event (timeline and content)?",
          "Which industries/roles are you most interested in meeting today?",
          "What’s one way someone here could help you in 5 minutes?",
          "What’s something you can offer this community right now?"
        ]
      },
      {
        category: "Parent-Teacher Conferences",
        questions: [
          "How would you describe your child’s learning style and strengths at home?",
          "What strategies have worked to support your child’s focus or behavior?",
          "If grades dip, how do you open a constructive conversation?",
          "Which specific accommodations might help your child succeed?",
          "What goals should we align on for the next grading period?",
          "How does your child talk about school—any patterns or themes?",
          "What’s one classroom routine that seems to help your child?",
          "How do you prefer to receive updates—cadence and channel?",
          "What signals tell you your child is overwhelmed?",
          "How can we coordinate consequences/rewards across home and school?",
          "What motivates your child—recognition, choice, challenge, or structure?",
          "Are there any peer or social dynamics we should monitor?",
          "What is your child proud of academically this term?",
          "Where do you see gaps between effort and outcomes?",
          "What reading or practice habits work best at home?",
          "How should we handle missed work or make-up plans?",
          "What’s a realistic plan if behavior escalates unexpectedly?",
          "Any changes at home that might affect classroom behavior?",
          "How can we build self-advocacy skills for your child?",
          "What resource (tutor, counselor, IEP/504) should we consider?",
          "How can we track progress—rubrics, checkpoints, or logs?",
          "What does a successful next conference look like to you?",
          "What’s the single most important support you want from me?",
          "How will we celebrate improvements, not just outcomes?",
          "Is there anything we didn’t cover that you’d like to discuss?"
        ]
      },
      {
        category: "Visa/Immigration Interviews",
        questions: [
          "Why do you want to live, work, or study in this country?",
          "What specific program or employer are you joining and why?",
          "How will you support yourself financially during your stay?",
          "What ties do you have to your home country?",
          "Explain any gaps in travel, study, or employment history.",
          "What is your day-to-day plan once you arrive?",
          "Who is your sponsor or petitioner and what’s your relationship?",
          "What documentation will you bring to substantiate your claims?",
          "Have you ever been refused a visa? Context and resolution.",
          "What is your housing plan upon arrival?",
          "How does this stay fit into your long-term goals?",
          "What will you do if your initial plan changes unexpectedly?",
          "How will you maintain legal status and comply with regulations?",
          "What coursework/job responsibilities will you undertake?",
          "Do you have dependents or family accompanying you?",
          "How will you handle healthcare and insurance needs?",
          "What is your expected return date or next status step?",
          "How have you prepared for cultural and language differences?",
          "What is your academic or professional background for eligibility?",
          "How will you fund tuition or living expenses (proof)?",
          "Why did you choose this institution/employer over others?",
          "What prior international travel do you have and why?",
          "Who will support you locally if issues arise?",
          "What will you do when your authorized stay ends?",
          "Is there anything else the officer should know about your case?"
        ]
      },
      {
        category: "Therapy/Coaching Prep",
        questions: [
          "What brings you here right now—what changed or hurts most?",
          "Describe a recent moment that triggered a strong emotional response.",
          "What would feel different in 3 months if this goes well?",
          "Which patterns keep repeating that you want to change?",
          "How do stress and conflict show up in your body and habits?",
          "What are your top values—and where are you out of alignment?",
          "When do you feel most grounded and clear-minded?",
          "What boundaries do you need to set or strengthen?",
          "What’s one belief you’re questioning lately?",
          "What relationships energize you vs. drain you?",
          "What does progress look like week to week?",
          "Where do you self-sabotage—and what precedes it?",
          "What’s a small experiment you’re willing to try this week?",
          "How do you talk to yourself in tough moments?",
          "What past experience still shapes your present reactions?",
          "What support systems do you have—and which do you need?",
          "How do you want to handle setbacks compassionately?",
          "What do you avoid feeling or discussing—and why?",
          "What narratives about yourself might be outdated?",
          "How do you define ‘enough’—time, love, money, rest?",
          "What coping strategies help short-term but harm long-term?",
          "What would a kinder daily routine look like?",
          "What are you willing to let go of to grow?",
          "What does a good session outcome look like today?",
          "What’s the first small step after this conversation?"
        ]
      },
      {
        category: "Conflict Resolution (Personal or Professional)",
        questions: [
          "How do you open a tough conversation without blame?",
          "What’s your first step when someone isn’t meeting expectations?",
          "How do you separate facts from stories you’re telling yourself?",
          "What’s a boundary you can state clearly and kindly?",
          "How do you acknowledge the other person’s perspective?",
          "What’s your desired outcome—and what are acceptable alternatives?",
          "How do you avoid escalation when emotions run high?",
          "What specific behavior change are you asking for?",
          "How do you handle defensiveness without withdrawing or attacking?",
          "What repair attempt can you make if you contributed to the problem?",
          "How will you know the conflict is actually resolved?",
          "What consequence is fair if the behavior persists?",
          "How can you reframe ‘you always’ into a specific example?",
          "What’s a collaborative next step you can propose now?",
          "How do you ensure follow-up and accountability?",
          "What assumptions might you be making—how can you test them?",
          "How do you choose the right time and setting for the talk?",
          "What words escalate you—and how will you replace them?",
          "How can you practice active listening in the moment?",
          "What if agreement isn’t possible—what’s your walk-away?",
          "How will you manage your body language and tone?",
          "What would a mediator or neutral party add here?",
          "How can you focus on shared goals, not positions?",
          "What apology would you accept—what makes it feel real?",
          "What lesson will you carry to prevent repeat conflicts?"
        ]
      },
      {
        category: "Public Speaking – Beginner",
        questions: [
          "If you had 30 seconds to hook us, how would you open your talk?",
          "State your core message in one sentence—what do you want us to remember?",
          "How would you explain your topic to a non-expert friend?",
          "What simple story from your own experience could introduce this topic?",
          "How will you signal your transitions so listeners don’t get lost?",
          "How would you close in a way that feels clear and complete?",
          "If you only had one slide, what would you say while it’s on screen?",
          "How would you adjust your pace if you notice people leaning in vs. checking out?",
          "What’s one question you’d ask the audience to re-engage them?",
          "How will you handle nerves in the first 60 seconds—what will you say and do?",
          "If someone arrives late, how would you summarize your talk so far in 20 seconds?",
          "How would you describe your talk’s structure in plain language?",
          "If you forgot a point, how would you recover smoothly?",
          "What’s a concrete example that makes your main idea feel real?",
          "How will you encourage the audience to take one next step after your talk?",
          "How will you make eye contact so it feels natural, not stare-down?",
          "What will your posture and stance communicate at the start?",
          "How would you use your hands to support (not distract from) your message?",
          "If you had to cut your talk by two minutes, what would you trim and why?",
          "How will you vary your tone so it doesn’t sound monotone?",
          "How would you rephrase a jargon-heavy sentence in everyday language?",
          "What’s your plan if the microphone fails—how do you keep calm and carry on?",
          "How will you invite questions so people feel safe to ask?",
          "If you see puzzled faces, what quick clarification would you offer?",
          "How would you thank the audience and land your final line confidently?"
        ]
      },
      {
        category: "Public Speaking – Intermediate",
        questions: [
          "How would you open for a skeptical audience that doubts your premise?",
          "What’s your 10-minute outline—how do you allocate time for Q&A?",
          "Which data point best supports your argument, and how will you frame it?",
          "How will you contrast the ‘before vs. after’ to show clear benefits?",
          "If someone challenges your claim, how do you respond without getting defensive?",
          "How would you adapt this talk for executives vs. practitioners?",
          "What’s a memorable metaphor you’d use to simplify a complex idea?",
          "How do you handle an off-topic question while keeping momentum?",
          "What’s your plan to manage filler words when you get excited or nervous?",
          "How would you use a brief pause to emphasize a key line?",
          "If your slide deck is busy, how would you verbally guide attention?",
          "What body language signals will you use to invite participation?",
          "How will you pace and sequence examples so each builds on the last?",
          "If a demo fails, how do you narrate the takeaway anyway?",
          "Which part of your talk most risks losing the room—how will you shore it up?",
          "How would you connect your message to the audience’s current goals?",
          "What short success story would you tell to build credibility without bragging?",
          "How do you maintain eye contact when speaking to a large room?",
          "How would you restate a hostile question to reduce tension before answering?",
          "How will you end with a clear call to action that feels realistic?",
          "If you have to speed up due to time, what’s your concise path to the finish?",
          "How would you handle back-to-back questions from the same person fairly?",
          "What’s your backup if your clicker or teleprompter stops working?",
          "How will your voice (volume, pace, tone) change across sections of your talk?",
          "What specific feedback would you ask for after this talk to improve next time?"
        ]
      },
      {
        category: "Public Speaking – Advanced",
        questions: [
          "How would you persuade an audience that starts out opposed to your view?",
          "What ‘case for change’ would you make to move a complacent group to action?",
          "Which counterargument is strongest against you—and how do you address it head-on?",
          "What story could shift the room’s emotion from doubt to curiosity?",
          "How will you use contrast and stakes to make inaction feel costly?",
          "What single proof (demo, testimonial, data) would you choose to build trust fast?",
          "How would you reframe the problem so your solution becomes the obvious next step?",
          "How do you tailor your message to different decision-makers in the same room?",
          "If you had to ask for a commitment today, how would you phrase it?",
          "How would you handle a hostile interrupter while keeping the audience with you?",
          "What values does your audience hold, and how will you bridge your ask to those values?",
          "How will you structure your narrative so each point makes the next inevitable?",
          "What is your strongest one-line close—and how will your delivery land it?",
          "How would you design a brief interaction that makes the audience feel the problem?",
          "What visual analogy would you use to collapse a complex concept into a glimpse?",
          "How will your posture, movement, and gaze signal authority without rigidity?",
          "If the room’s energy drops, what high-leverage moment will you create to reset?",
          "How do you incorporate a dissenting perspective to strengthen your case?",
          "What small, low-risk next step could you propose to reduce decision friction?",
          "How will you manage your own adrenaline so your voice stays steady under fire?",
          "What’s your contingency if a key stakeholder publicly disagrees mid-talk?",
          "How would you adapt your close if you sense the audience isn’t ready to commit?",
          "What is the boldest question you can ask that advances your goal respectfully?",
          "How will you follow up after the talk to sustain momentum toward action?",
          "If you could only keep three slides, which and why—how do you deliver around them?"
        ]
      },
      {
        category: "Mentorship or Leadership Conversations",
        questions: [
          "What outcome does your mentee want—and why now?",
          "What strengths can you amplify immediately?",
          "Where are they stuck—skill, will, or context?",
          "What’s one habit that would change their trajectory?",
          "What specific feedback can you give that’s kind and useful?",
          "How will you co-create a 30-60-90 plan?",
          "What resources or introductions would unlock progress?",
          "How will you hold them accountable without micromanaging?",
          "What does success look like at the next check-in?",
          "What growth edge do they avoid—and how can you scaffold it?",
          "How can you model the behavior you’re asking for?",
          "What decision-making framework can you teach them?",
          "Where can they lead without permission this week?",
          "How will you celebrate small wins to build momentum?",
          "What feedback are you hearing repeatedly—pattern vs. one-off?",
          "How can you create safety for hard truths?",
          "What constraint (time, scope, ownership) will stretch them well?",
          "How will you measure impact—not just activity?",
          "What’s your plan if commitments slip twice?",
          "What conversations do they need to practice out loud?",
          "How can they delegate or automate low-value work?",
          "What narrative about themselves needs updating?",
          "Where should they say no—and how?",
          "What’s the next visible opportunity to showcase growth?",
          "What’s your exit plan—making the mentee independent?"
        ]
      }
    ],
    
    init() {
      this.questions.forEach(category => {
        this.askedQuestions[category.category] = [];
        this.availableQuestions[category.category] = [...category.questions];
      });
      this.totalCards = this.questions.reduce((t, c) => t + c.questions.length, 0);
    },
    flipCard() {
      if (this.currentCard.question !== "Click next card to begin") {
        this.cardFlipped = !this.cardFlipped;
      }
    },
    selectCategory(category) {
      this.selectedCategory = this.selectedCategory === category ? null : category;
    },
    nextCard() {
      let availableCategories = this.selectedCategory
        ? this.questions.filter(cat => cat.category === this.selectedCategory)
        : this.questions;

      availableCategories = availableCategories.filter(cat => this.availableQuestions[cat.category].length > 0);

      if (availableCategories.length === 0) {
        this.currentCard = {
          category: "All Done!",
          question: "You've answered all available questions in " +
                    (this.selectedCategory ? this.selectedCategory : "all categories") +
                    ". Reset the game or select a different category."
        };
        this.currentCategory = "All Done!";
        this.cardFlipped = true;
        return;
      }

      const category = availableCategories[Math.floor(Math.random() * availableCategories.length)];
      const qIdx = Math.floor(Math.random() * this.availableQuestions[category.category].length);
      const question = this.availableQuestions[category.category][qIdx];

      this.askedQuestions[category.category].push(question);
      this.availableQuestions[category.category] =
        this.availableQuestions[category.category].filter(q => q !== question);
      this.allAskedQuestions.add(question);

      this.currentCard = { category: category.category, question };
      this.currentCategory = category.category;
      this.cardsAnswered++;
      this.cardFlipped = true;
    },
    resetGame() {
      this.cardFlipped = false;
      this.cardsAnswered = 0;
      this.selectedCategory = null;
      this.currentCard = { question: "Click next card to begin", category: "Getting Started" };
      this.currentCategory = "Getting Started";
      this.resetTracking();
    },
    resetTracking() {
      this.questions.forEach(category => {
        this.askedQuestions[category.category] = [];
        this.availableQuestions[category.category] = [...category.questions];
      });
      this.allAskedQuestions.clear();
    },
    getCategoryProgress(categoryName) {
      const category = this.questions.find(cat => cat.category === categoryName);
      if (!category) return { answered: 0, total: 0 };
      return { answered: this.askedQuestions[categoryName].length, total: category.questions.length };
    }
  }
}