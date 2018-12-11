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
        urls: [
          "http://result.election.gov.np/JSONFiles/CandidateNominationVPE.txt"
        ]
      }
    ]
  },
  {
    name: "राष्ट्रिय सभा",
    items: [
      {
        name: "उम्मेदवारको अन्तिम नामावाली",
        urls: [
          "http://result.election.gov.np/JSONFiles/CandidateNominationUH.txt"
        ]
      },
      {
        name: "निर्वाचित उम्मेदवार",
        urls: ["http://result.election.gov.np/JSONFiles/ElectedCandidateUH.txt"]
      }
    ]
  },
  {
    name: "प्रतिनिधि सभा",
    items: [
      {
        name: "पहिलो हुने निर्वाचित हुने उम्मेदवार",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectionResultCentral.txt"
        ]
      },
      {
        name: "दलगत समानुपातिक परिणाम",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectionResultCentralPR.txt"
        ]
      },
      {
        name: "समानुपातिक निर्वाचित उम्मेदवार ",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectedCandidatePRCentral.txt"
        ]
      }
    ]
  },
  {
    name: "प्रदेश सभा",
    items: [
      {
        name: "पहिलो हुने निर्वाचित हुने उम्मेदवार",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectionResultState.txt"
        ]
      },
      {
        name: "दलगत समानुपातिक परिणाम",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectionResultStatePR.txt"
        ]
      },
      {
        name: "समानुपातिक निर्वाचित उम्मेदवार ",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectedCandidatePRState.txt"
        ]
      }
    ]
  },
  {
    name: "स्थानीय तह",
    items: [
      {
        name: "निर्वाचन नतिजा सारांश",
        urls: [
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseMayor1.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseDeputyMayor1.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseChairPerson1.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseDeputyChairPerson1.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseWardChairPerson1.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseWomenMem1.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseDalitWomenMem1.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseMember1.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseMayor2.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseDeputyMayor2.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseChairPerson2.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseDeputyChairPerson2.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseWardChairPerson2.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseWomenMem2.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseDalitWomenMem2.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseMember2.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseMayor3.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseDeputyMayor3.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseChairPerson3.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseDeputyChairPerson3.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseWardChairPerson3.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseWomenMem3.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseDalitWomenMem3.txt",
          "http://result.election.gov.np/JSONFiles/TopFivePartyPostWiseMember3.txt"
        ]
      },
      {
        name: "दलगत मतगणनाको परिणाम",
        urls: [
          "http://result.election.gov.np/JSONFiles/PartyLeadTrail1.txt",
          "http://result.election.gov.np/JSONFiles/PartyLeadTrail2.txt",
          "http://result.election.gov.np/JSONFiles/PartyLeadTrail3.txt"
        ]
      },
      {
        name: "मतगणनाको विस्तृत परिणाम",
        urls: [
          "http://result.election.gov.np/JSONFiles/VoteCount1.txt",
          "http://result.election.gov.np/JSONFiles/VoteCount2.txt",
          "http://result.election.gov.np/JSONFiles/VoteCount3.txt"
        ]
      },
      {
        name: "कार्यपालिका निर्वाचन",
        urls: ["http://result.election.gov.np/JSONFiles/KaryapalikaResult.txt"]
      },
      {
        name: "जिल्ला समन्वय समिति निर्वाचन",
        urls: ["http://result.election.gov.np/JSONFiles/DCCResult.txt"]
      }
    ]
  }
];

module.exports = siteData;
