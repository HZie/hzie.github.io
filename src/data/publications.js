export const publications = [
  {
    "id": 5,
    "title": "ForceKeyboard: Eyes-Free Text Entry With a Force Sensitive Soft Keyboard for Wearable Devices",
    "authors": "Cavazos Quero, L., Han, J., & Oh, U.",
    "year": 2026,
    "venue": "IEEE Transactions on Haptics, 19(2), 390–401.",
    "summary": "Designed a 26-participant study of eyes-free text entry; conducted interviews and analyzed study data.",
    "link": "https://ieeexplore.ieee.org/abstract/document/11459377"
  },
  {
    "id": 1,
    "title": "AscleAI: A LLM-based Clinical Note Management System for Enhancing Clinician Productivity",
    "venue": "Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA ’24). ACM.",
    "summary": "Designed a user study of an LLM-based clinical note system; implemented the RAG component, conducted interviews, and analyzed study data.",
    "abstract": "While clinical notes are essential to the field of healthcare, they pose several challenges for clinicians since it is difficult to write down medical information, review prior notes, and extract the desired information at the same time while examining a patient. Thus, we designed a system that can automatically generate clinical notes from dialogues between patients and clinicians and provide specific information upon clinicians’ query using a Large Language Model (LLM) both in real-time. To explore how this system can be used to support clinicians in practice, we conducted an interview with six clinicians followed by a design probe study with the current version of our system for feedback. Findings suggest that our system has the potential to enable clinicians to write and access clinical notes and examine the patients simultaneously with reduced cognitive loads and increased efficiency and accuracy.",
    "link": "https://dl.acm.org/doi/abs/10.1145/3613905.3650784",
    "period": "2023.09 - 2024.05",
    "image": "/images/AscleAI.png",
    "image_alt": "Workflow showing clinical speech converted to text, processed by an LLM, and returned as a summarized document via AscleAI.",
    "authors": "Han, J.*, Park, J.*, Huh, J., Oh, U., Do, J., & Kim, D.",
    "year": 2024
  },
  {
    "id": 2,
    "title": "Understanding the Use of AI-Based Audio Generation Models by End-Users",
    "venue": "Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA ’24). ACM.",
    "summary": "Independently designed, conducted, and analyzed a study comparing text-to-audio generation with music search; built an LLM-assisted prompting prototype.",
    "abstract": "With the growing popularity of video platforms, the demand for copyright-free audio sources for adding background music to videos is also expected to increase. While text-to-audio-generation models can be useful for this purpose, little is known about how people perceive and use these models. To understand how generation models for audio are used and to identify their strengths and weaknesses compared to typical audio search engines, we conducted a user study with 16 participants, where they were asked to choose matching background music after watching muted videos. Findings show that participants appreciate the search engine for recommending search keywords and displaying multiple results although the outcome does not fully reflect the intent. In contrast, the generation model posed challenges in choosing proper prompts but excelled in finding the desired music. Based on these results, we suggest design considerations to improve the usability of the audio generation model for end-users.",
    "link": "https://doi.org/10.1145/3613905.3650785",
    "period": "2023.09 - 2024.05",
    "image": "/images/MuseForge.png",
    "image_alt": "Screenshot of MuseForge, an AI music generation interface, showing a text prompt input, keyword suggestions, and generated music tracks with waveform previews and descriptions.",
    "authors": "Han, J., Yang, E., & Oh, U.",
    "year": 2024
  },
  {
    "id": 3,
    "title": "MoodChartBot: Design and Implementation of a Mood Chart Application Using AI Chatbot",
    "venue": "Journal of Korea Multimedia Society, 26(3), 503–508.",
    "summary": "Designed chatbot-based mood tracking app using KoBERT for emotion detection.",
    "abstract": "The overall level of depression in Korean society has become substantially high. It suggests the urgency of preventing the prognosis of severe depression as well as detecting at-risk populations. The previous studies showed that reporting a mood chart regularly is essential for the early detection of depressive disorder. In this regard, the current study aims to design and implement a mobile application which makes it easier to access mood charts than the traditional paper-based method. Specifically, the application includes an AI Chatbot based on the BERT model for reporting mood charts on a regular basis. Additionally, our system adopted mood charts which are now officially utilized in Seoul National University Bundang Hospital. We expect that our system provides an opportunity for at-risk people to identify their emotional state while lowering psychosocial burden prior to officially diagnosed with the disorder. Furthermore, we hope it can help users to feel less burdened and familiar with the task of filling out their mood state.",
    "link": "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11287750",
    "period": "2022.06 - 2023.03",
    "image": "/images/MoodChartBot.png",
    "image_alt": "Flowchart of MoodChartBot functions: users can write or edit daily mood charts, or view a weekly summary, with mood detection and mood change graphs.",
    "authors": "Han, J., Kim, Y., Joh, H., Lee, J., & Oh, U.",
    "year": 2023
  },
  {
    "id": 4,
    "title": "Exploring Low-Cost Grid-Based Tactile Instruments for Understanding and Reproducing Shapes for People with Visual Impairments",
    "venue": "International Journal of Advanced Smart Convergence, 12(3), 127–140.",
    "summary": "Designed a study and implemented a tactile interface for shape understanding and reproduction by visually impaired users; conducted interviews and analysis.",
    "abstract": "While tools exist for blind people to understand shapes, these are not commercially available nor affordable and often require the assistance of sighted people. Thus, we designed two low-cost grid-based tactile tools using toggle buttons (TogGrid) and cotton balls (CottonGrid). To assess the potential of these as an educational tool, we conducted a user study with 12 people with visual impairments where they were asked to understand and reproduce shapes under different conditions. Although CottonGrid is relatively cheap and easy to make, findings show that TogGrid was perceived to be better in terms of perceived easiness, task completion time, accuracy, and preference in general. Particularly, participants valued TogGrid for enabling them to identify and correct errors. Based on the findings, we provide implications for utilizing toggle buttons for designing educational instruments for learning and expressing shapes for blind people.",
    "link": "https://koreascience.kr/article/JAKO202329158325629.page",
    "period": "2022.01 - 2023.04",
    "image": "/images/TogGrid.png",
    "image_alt": "Photo of a tactile grid prototype connected to an Arduino with multicolored wires, showing a raised wooden grid interface on a cardboard base.",
    "authors": "Kim, Y.*, Han, J.*, & Oh, U.",
    "year": 2023
  },
  {
    "id": 6,
    "title": "Music Assembler: Integrated Virtual Musical Instrument with Block-Typed Touch Sensor",
    "authors": "Han, J., Moon, S.J., Park, D.E., & Oh, U.",
    "year": 2019,
    "venue": "Proceedings of the Korea Software Congress, 1687–1689.",
    "summary": "An integrated virtual musical instrument with a block-typed touch sensor.",
    "link": "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE09302039"
  }
];

export const publicationGroups = [
  { title: "Peer-Reviewed Journal & Conference Papers", ids: [5, 3, 4, 6] },
  { title: "Peer-Reviewed Extended Abstracts & Posters", ids: [1, 2] },
].map((group) => ({ ...group, papers: group.ids.map((id) => publications.find((paper) => paper.id === id)) }));
