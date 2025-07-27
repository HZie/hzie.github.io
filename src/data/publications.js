export const publications = [
  {
    id: 1,
    title: "LLM-based Clinical Note Management System",
    venue: "CHI LBW 2024",
    summary:
      "Developed an LLM+RAG-based clinical note management system for chart summarization and retrieval.",
    description:
      "While clinical notes are essential to the field of healthcare, they pose several challenges for clinicians since it is difficult to write down medical information, review prior notes, and extract the desired information at the same time while examining a patient. Thus, we designed a system that can automatically generate clinical notes from dialogues between patients and clinicians and provide specific information upon clinicians’ query using a Large Language Model (LLM) both in real-time. To explore how this system can be used to support clinicians in practice, we conducted an interview with six clinicians followed by a design probe study with the current version of our system for feedback. Findings suggest that our system has the potential to enable clinicians to write and access clinical notes and examine the patients simultaneously with reduced cognitive loads and increased efficiency and accuracy.",
    link: "https://dl.acm.org/doi/abs/10.1145/3613905.3650784",
    period: "2023.09 - 2024.05",
    image: "/images/AscleAI.png",
  },
  {
    id: 2,
    title: "Understanding the Use of MusicAI",
    venue: "CHI LBW 2024",
    summary:
      "Conducted UX study comparing text-to-audio generation with search-based music selection.",
    description:
      "With the growing popularity of video platforms, the demand for copyright-free audio sources for adding background music to videos is also expected to increase. While text-to-audio-generation models can be useful for this purpose, little is known about how people perceive and use these models. To understand how generation models for audio are used and to identify their strengths and weaknesses compared to typical audio search engines, we conducted a user study with 16 participants, where they were asked to choose matching background music after watching muted videos. Findings show that participants appreciate the search engine for recommending search keywords and displaying multiple results although the outcome does not fully reflect the intent. In contrast, the generation model posed challenges in choosing proper prompts but excelled in finding the desired music. Based on these results, we suggest design considerations to improve the usability of the audio generation model for end-users.",
    link: "https://doi.org/10.1145/3613905.3650785",
    period: "2023.09 - 2024.05",
    image: "/images/MuseForge.png",
  },

  {
    id: 3,
    title: "Mood Chart Application",
    venue: "Journal of Korea Multimedia Society",
    summary:
      "Designed chatbot-based mood tracking app using KoBERT for emotion detection.",
    description:
      "The overall level of depression in Korean society has become substantially high. It suggests the urgency of preventing the prognosis of severe depression as well as detecting at-risk populations. The previous studies showed that reporting a mood chart regularly is essential for the early detection of depressive disorder. In this regard, the current study aims to design and implement a mobile application which makes it easier to access mood charts than the traditional paper-based method. Specifically, the application includes an AI Chatbot based on the BERT model for reporting mood charts on a regular basis. Additionally, our system adopted mood charts which are now officially utilized in Seoul National University Bundang Hospital. We expect that our system provides an opportunity for at-risk people to identify their emotional state while lowering psychosocial burden prior to officially diagnosed with the disorder. Furthermore, we hope it can help users to feel less burdened and familiar with the task of filling out their mood state.",
    link: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11287750",
    period: "2022.06 - 2023.03",
    image: "/images/MoodChartBot.png",
  },
  {
    id: 4,
    title: "Low-Cost Grid-Based Tactile Instruments for BLV Users",
    venue: "International Journal of Advanced Smart Convergence",
    summary:
      "Created a low-cost tactile interface for visually impaired users to understand and reproduce shapes using toggle buttons.",
    description:
      "While tools exist for blind people to understand shapes, these are not commercially available nor affordable and often require the assistance of sighted people. Thus, we designed two low-cost grid-based tactile tools using toggle buttons (TogGrid) and cotton balls (CottonGrid). To assess the potential of these as an educational tool, we conducted a user study with 12 people with visual impairments where they were asked to understand and reproduce shapes under different conditions. Although CottonGrid is relatively cheap and easy to make, findings show that TogGrid was perceived to be better in terms of perceived easiness, task completion time, accuracy, and preference in general. Particularly, participants valued TogGrid for enabling them to identify and correct errors. Based on the findings, we provide implications for utilizing toggle buttons for designing educational instruments for learning and expressing shapes for blind people.",
    link: "https://koreascience.kr/article/JAKO202329158325629.page",
    period: "2022.01 - 2023.04",
    image: "/images/TogGrid.png",
  },
];
