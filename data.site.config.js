const siteData = [
  {
    name: "मतगणनाको संक्षिप्त परिणाम",
    items: [
      {
        name: "दलगत संख्यात्मक विवरण",
        urls: ["http://result.election.gov.np/JSONFiles/ElectedSummByParty.txt"]
      },
      {
        name: "लिङ्गगत संख्यात्मक विवरण",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectedSummByGender.txt"
        ]
      },
      {
        name: "जिल्लागत मतगणनाको विवरण",
        urls: [
          "http://result.election.gov.np/JSONFiles/ResultSummHoR.txt",
          "http://result.election.gov.np/JSONFiles/ResultSummPA.txt"
        ]
      }
    ]
  },
  {
    name: "राष्ट्रपति निर्वाचन",
    items: [
      {
        name: "मतगणनाको परिणाम",
        urls: [
          "http://result.election.gov.np/JSONFiles/CandidateNominationPE.txt"
        ]
      }
    ]
  },
  {
    name: "उपराष्ट्रपति निर्वाचन",
    items: [
      {
        name: "मतगणनाको परिणाम",
        urls: []
      }
    ]
  }
];

module.exports = siteData;
